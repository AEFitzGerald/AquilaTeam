// import Moralis from 'moralis';
import React from 'react';
import { useWeb3ExecuteFunction, useMoralis } from "react-moralis";
import { ContractAddress } from './Config';
import { ABI } from './Config';


//this componenent has unfinished logic

const ConfirmButton = () => {
    const { web3 } = useMoralis();
    const enableContract = new web3.eth.Contract(ABI, ContractAddress);
    //const Contract = createAquilaInsuranceContract();

    let policyAddress= "";
    let propertyCoodinates = "";
    let productId = "0"; //product 0 with multiplier x2
    let amount = 0.01 * 10 ** 18; //in Wei

    /*for test case the user object is not encrypted --> else Moralis.enableEncryptedUser();
    //GET connected String  objectId from Moralis Database
    async function getAddress() {
        const addressQuery = new Moralis.Query(Moralis.User.current);
        const policyAddress = await addressQuery.get(user.objectId); 
        policyAddress.set(user.objectId)
        await policyAddress.save();
    }

    //GET connected String property 
    const propertyQuery = new Moralis.Query(Moralis.User.current);
    const propertyCoodinates = await propertyQuery.get(user.property);
    propertyQuery.set(user.property)
    await propertyQuery.save();
    */



// const createAquilaInsuranceContract = () => {    
    const { data, error, fetch, isFetching } = useWeb3ExecuteFunction({
        abi: ABI,
        contractAddress: ContractAddress,
        functionName: "buyPolicy",
        msgValue: amount,
        params: {
            _policyAddress: policyAddress,
            _productId: productId,
            _iplCoordinates: propertyCoodinates,
        },
    });
//}



    return (<div>
        { error }

        <button 
        className="btn" 
        onClick={ () => fetch() } 
        disabled={ isFetching }>Confirm and Pay</button>
        { data && <pre> 
            {JSON.stringify(data)},
            </pre>}
        </div>)
};

export default ConfirmButton;



