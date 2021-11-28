import React, { useState, useEffect } from 'react';
import treelineLg from './imgs/treelineLg.png';
import treelineSm from  './imgs/treelineSm.png'
import Footer from './Footer';


const About = () => {

    const imageUrl = useWindowWidth() >= 650 ? treelineLg : treelineSm;

        return (
            <div id="treelineImg" className="treelineImg" style={{ backgroundImage:`url(${ imageUrl })` }}>
                <div className="containerFlex">
                    <div className="topnavLeft">
                        <a href="/">BACK TO CONNECT</a>
                    </div>
                </div>
                <div className="aboutContainer">
                    <div className="aboutCopy">
                        
                        <h3 id ="about">About Aquila</h3>
                    
                        <p className="aboutText">Aquila is a trustless dapp for parametric forest fire insurance; there is no centralized intermediary that can interfere with the insurance contracts. 
                        Once a contract is deployed, it is guaranteed to payout the claim.</p><br></br>
                        
                        <p className="aboutText">Harnessing the unique properties of blockchain is what makes this emerging sector of insurance so unique. 
                        Blockchains are tamperproof, immutable environments, leaving security as a fundamental component built into the core.</p><br></br>
                        
                        <p className="aboutText">Parametric insurance is a non-traditional insurance product that offers pre-specified payouts based upon a trigger event. 
                        In the case of our forest fire application, our trigger event is a forest fire crossing a pre-set property area. 
                        This is done by comparing satellite images of burning areas against coordinates of the land.
                        To get the external data securely into the smart contracts, Chainlink is used, which provides decentralized oracle network middleware.</p><br></br>

                        <p className="aboutText">Aquila is at the forefront of the current global paradigm shift leading towards decentralized parametric insurance systems. 
                        Aiming to offer the first fully regulated parametric forest fire insurance in BC, Canada, as well as expanding to other regions around the world. This is a revolutionary approach to delivering insurance, and is presently an unexplored open market.</p><br></br>

                        <p className="aboutText">On August 9, 2021, the United Nations released a climate report titled ‘Code Red For Humanity’, stressing the severity of the worldwide climate crisis. This highlights another area of concern, and as more forest fire’s occur more frequently and on a more extreme scale, we must assure the company’s values align with those of the planet.</p> 
                        <p classNam="aboutText">Get in Touch with the makers:</p>
    
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

export default About;
