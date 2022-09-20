const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
user: "root",
host: "localhost",
password: "MYSQL",
database: "reacthotel"
});

app.post('/register', (req, res) =>{

    const fullname = req.body.fullname;
    const username = req.body.password;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO users(fullname, username, email, password) VALUES (?,?,?,?)", [fullname, username, email, password], (err, result) =>{
        console.log(err);
    })
})

app.listen(3001, () => {
    console.log("Running")
});