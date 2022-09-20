const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require("jsonwebtoken");
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
}
));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));

app.use(session(
    {
        key: "userId",
        secret: "team",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    }
))

app.use(express.json());

app.listen(3001, () =>{
    console.log("Running");
});

const db = mysql.createConnection({
    user: "me",
    host: "localhost",
    password: "",
    database: "reacthotel"
});

app.post('/create', (req, res) => {
    const fullname = req.body.fullname;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, (err, hash) =>{

        if(err){
            console.log(err);
        }    

        db.query('INSERT INTO users(fullname, username, email, password) VALUES (?,?,?,?)',
        [fullname, username, email, hash],
        (err, result) =>{
            if(err){
                console.log(err);
            }else{
                res.send(result);
            }
        }
       );
    });
});

const verifyJWT = (req, res, next) =>{
    const token = req.headers["x-access-token"];
};

app.get('/isUserAuth', verifyJWT, (req, res) =>{
    res.send("Your Are Authenticated!");
    if(!token){
        res.send("We Need A token!");
    }else{
        jwt.verify(token, "jwtSecret", (err, decoded) =>{
            if(err){
                res.json({ auth: false, message: "Failed Authentification"});
            }else{
                req.userId = decoded.id;
                next();
            }
        });
    }
});

app.get("/login", (req, res) =>{
    if(req.session.user){
        res.send({loggedIn: true, user: req.session.user});
    }else{
        res.send({loggedIn: false});
    }
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE username = ?;',
     username,
     (err, result) =>{
         if(err){
             res.send({err : err});
         }
         
         if(result.length > 0){
             bcrypt.compare(password, result[0].password, (error, response) =>{
                if(response){
                    const id = result[0].id;
                    const token = jwt.sign({id}, "jwtSecret", {
                        expiresIn : 300,
                    });
                    req.session.user = result;
                    console.log(req.session.user);
                    res.json({auth: true, token: token, result: result});
                }else{
                    res.send({message: "Wrong Username/Password Combination"});
                }
             });
         }else{
             res.send({message: "User Does NOT Exist!"});
         }
     }
    );

});