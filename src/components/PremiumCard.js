import React from 'react';
import PremiumButton from './PremiumButton';


const PremiumCard = () => {
    return (
        <div className="card">
            <p id="premiumCardText" className="cardText">Thank you, we received your property coordinates and are calculating your premium.</p>
            <PremiumButton/>
        </div>
    );
};


export default PremiumCard;