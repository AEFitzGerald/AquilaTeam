import React from 'react';
import ConfirmButton from './ConfirmButton';


const ConfirmCard = () => {
    
    return (
        <div className="card">
            <p id="confirmMessage" className="cardText confirmCardText">Your premium is 0.01 ETH and insures your home and property:</p><br></br> 
            <p className="cardText confirmCardText">April 1st to September 30th, 2022.</p>
            <ConfirmButton/>
        </div>
    );
};


export default ConfirmCard;