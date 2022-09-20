import React, {useState} from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom";


const Pay = () => {

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [focus, setFocus] = useState('');

  return (
   <>
   <h3 className="policy">
     Our policy is that you should pay an advance of 100$ here and complete the payement when arrived at the hotel! 
   </h3>
   <Cards
   number={number}
   name={name}
   expiry={expiry}
   cvc={cvc}
   focused={focus}
   />
   <form>
     <input type="tel"
      name="number"
      placeholder="Card Number" 
      value={number} 
      onChange={e => setNumber(e.target.value)}
      onFocus={e => setFocus(e.target.name)}
      className="inputB"
      />
      <input type="text"
      name="name"
      placeholder="Name" 
      value={name} 
      onChange={e => setName(e.target.value)}
      onFocus={e => setFocus(e.target.name)}
      className="inputB"
      />
      <input type="text"
      name="expiry"
      placeholder="MM/YY Expiry" 
      value={expiry} 
      onChange={e => setExpiry(e.target.value)}
      onFocus={e => setFocus(e.target.name)}
      className="inputB"
      />
      <input type="tel"
      name="cvc"
      placeholder="CVC" 
      value={cvc} 
      onChange={e => setCvc(e.target.value)}
      onFocus={e => setFocus(e.target.name)}
      className="inputB"
      />
      <Link to="/ty"><button className="btn-primaryB">Finish The Payement</button></Link>
   </form>
   </>
  );
};

export default Pay;
