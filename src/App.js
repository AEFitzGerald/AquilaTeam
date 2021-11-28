import './App.css';
import React from "react";
import About from './components/About';
import Connect from './components/Connect';
import Confirm from './components/Confirm';
import PropertyForm from './components/PropertyForm';
import { Routes, Route } from "react-router-dom";
import PremiumSet from './components/PremiumSet';


function App(){

    return <Routes>
                <Route path='/' element= { <Connect /> }/>
                <Route path ="/about" element= { <About /> }/>    
                <Route path="/property" element ={<PropertyForm />}/>
                <Route path ="/premium" element={ <PremiumSet /> }/>
                <Route path ="/confirm" element={ <Confirm /> }/>
            </Routes>
}   

export default App;
