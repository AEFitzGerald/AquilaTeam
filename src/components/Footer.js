import React from 'react';
import Copyright from './Copyright';
import logoSmall from './imgs/logoSmall.png'

const Footer = () => {
    
    return (

        <div className="footerContainer">
            <div className="footerRow">
                <img src={ logoSmall } style={{ width:"180px"}} alt ="logo"/>
                <p className="companyTag">Parametric Forest Fire Insurance</p>      
            </div>
            <Copyright/>
        </div>
        
    );
};

export default Footer;