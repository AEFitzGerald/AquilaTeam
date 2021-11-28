import React, { useState, useEffect } from 'react';
import ConfirmCard from "./ConfirmCard";
import treelineLg from './imgs/treelineLg.png';
import treelineSm from  './imgs/treelineSm.png'
import NavAfterConnect from './NavAfterConnect';
import Footer from './Footer';


const Confirm = () => {

    const imageUrl = useWindowWidth() >= 650 ? treelineLg : treelineSm;

        return (
            <div id="treelineImg" className="treelineImg" style={{ backgroundImage:`url(${ imageUrl })` }}>
                <NavAfterConnect/>
                <div className="cardContainer colStep">
                    <ConfirmCard/>
                    <div className="crumbColSolo">
                        <h5 className="crumbTitleSolo">
                            <span className="crumbNumbersSolo">4. </span>Confirm and Pay
                        </h5>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    };

    const useWindowWidth = () => {
        const [windowWidth, setWindowWidth ] = useState(window.innerWidth);
    
    
        useEffect(() => {   
            const handleWindowResize = () => {
                setWindowWidth(window.innerWidth);
            };
            
            window.addEventListener('resize', handleWindowResize); 
            
            return () => {
                window.removeEventListener('resize', handleWindowResize);
            }
    
        }, []);
    
        return windowWidth;
    };

export default Confirm;