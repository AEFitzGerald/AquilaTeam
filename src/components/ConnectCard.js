import React from 'react';
import logoLarge from './imgs/logoLarge.png'
import ConnectButton from './ConnectButton';

const ConnectCard = () => {

    return (
        <div className="card">
            
            <img src={ logoLarge } style={{ width:"230px"}} alt ="logo"/>
            
            <p className="cardText">Parametric Forest Fire Insurance<br></br>
            British Columbia, Canada</p>

            <ConnectButton/>
            
        </div>
    );
};


export default ConnectCard;