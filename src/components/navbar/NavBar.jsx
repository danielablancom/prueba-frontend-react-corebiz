import React, {useState} from "react";
import "./NavBar.css";
import logo from "./../../statics/logo.png";
import account from "./../../statics/account.png";
import shoppingCart from "./../../statics/shoppingCart.png";

const NavBar = () => {

  const handleClick = () => {
   console.log('You clicked me')
  }
  return (
    <div className="principal-container-navBar">
      <div className="box-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="inputSearch">
        <input className="input" placeholder="O que esta procurando?"></input>
      </div>
      <div className="box-user">
        <div>
          <img src={account} alt="user-account"></img>
        </div>
        <span>Minha Cont</span>
        <div className="shopping-cart">
          <img onClick={handleClick} src={shoppingCart} alt="shoppingCart" className="imgCart" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
