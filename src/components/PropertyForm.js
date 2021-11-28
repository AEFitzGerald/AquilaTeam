import PropertyCard from "./PropertyCard";
import Footer from './Footer';
import treelineLg from './imgs/treelineLg.png';
import treelineSm from  './imgs/treelineSm.png'
import React, { useState, useEffect } from 'react';
import NavAfterConnect from "./NavAfterConnect";


const PropertyForm = () => {

    const imageUrl = useWindowWidth() >= 650 ? treelineLg : treelineSm;

        return (
            
            <div id="treelineImg" className="treelineImg" style={{ backgroundImage:`url(${ imageUrl })` }}>
                <NavAfterConnect/>
                <div className="cardContainer colStep" >
                    <PropertyCard/>
                        <div className="crumbColSolo">
                            <h5 className="crumbTitleSolo">
                                <span className="crumbNumbersSolo">2. </span>Property Details
                            </h5>
                            <p className="crumbDescriptionSolo">Enter the Longitude and Latitude of your property in decimal degrees, for example: -123.95908355712889, 53.25042550620077</p>
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

export default PropertyForm;
