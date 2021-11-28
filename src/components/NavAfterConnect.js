import React from 'react';
import { useMoralis } from "react-moralis";
import { Link } from 'react-router-dom';

const NavAfterConnect = () => {

    const { logout, isAuthenticating } = useMoralis();

    return (
        <div className="containerFlex">
            <div className="topnavLeft">
                <Link id="logout" to ="/" onClick={() => logout()} disabled={ isAuthenticating }>LOGOUT</Link>
            </div>
        </div>
    );
}

export default NavAfterConnect;