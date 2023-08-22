import React from 'react';
import 'font-awesome/css/font-awesome.min.css'; // Import du CSS de Font Awesome
import '../style/header.css'
function HeaderBoubou() {
  return (
    <div className="header-container">
      <div className="title-container">
        <h1 style={{color: 'orange'}}>Boubou Studio</h1>
      </div>
      <div className="account-icon-container">
        <i className="fa fa-user" aria-hidden="true"></i>
        <span> Mon Compte</span>
      </div>
    </div>
  );
}

export default HeaderBoubou;
