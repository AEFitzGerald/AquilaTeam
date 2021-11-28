import React from 'react';
import DrawProperty from './DrawProperty.js';
import { useNavigate } from 'react-router-dom';
import { useMoralis } from 'react-moralis';
import { Moralis } from 'moralis';


const PropertyCard = () => {


    //coordinate data --> data submit to db
    let navigate = useNavigate();
    const AquilaUser = Moralis.Object.extend("User");
    const user = new AquilaUser(Moralis.User.current);
    const { setUserData, userError, isUserUpdating } = useMoralis();
    
    
    //send users coordinates to Moralis DB
    const changeHandler = e => {
        setUserData({
            property: e.target.value
        })
    }

    async function submitHandler(e) {
       // window.userCoordinates = "{ \"farm\": " + JSON.stringify((mapLayers[0]["latlngs"])) + "}";
        e.preventDefault();
        let result = await user.save(e.target.value)
        .then(res=>{ 
            console.log(res, userError, result, "*****ERROR In SUBMIT")
            if ( userError ) {
                console.log( userError );
            } 
            else {
            navigate('/premium');
            console.log( "Success database entry!", result)
            }
        })
        .catch (err=>{
            console.log(err, userError )
            })

        }

    return (
        
        <div className="card">
            <form onSubmit = { submitHandler } autoComplete="off">
                { userError && <p> {userError.message }</p>}
                
                <label>Longitude and Latitude</label>

                <textarea name="property" id="property" onChange={ changeHandler} />

                <input type="submit" value="Submit" onClick = { submitHandler } disabled={ isUserUpdating } className="btn" />

            </form> 
        </div>

    );
};


export default PropertyCard;