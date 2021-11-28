import React from 'react';
import { useMoralis } from "react-moralis";
import { useNavigate } from 'react-router-dom'


const ConnectButton = () => {

    const navigate = useNavigate();
    const { authenticate } = useMoralis();

    const handleAuthenticate = () => {
        authenticate({signingMessage:"Aquila Insurance Connection"}).then(() => {
        navigate("/property");
        });
    };
    
    return (
        <div>
            <button className="btn" type="button" onClick={ handleAuthenticate }>Connect</button>
        </div>
    );
};

export default ConnectButton;
