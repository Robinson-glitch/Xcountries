// import logo from './logo.svg';
import React, { useState,useEffect } from "react";
import axios from "axios";
import './App.css';

function App() {

const[countries,Setcountries]=useState([]);

useEffect(()=>{
  
fetchAPI();

},[])

 const fetchAPI=()=>{

  axios.get("https://xcountries-backend.azurewebsites.net/all").then((response)=>{

    Setcountries(response.data);

  }).catch((error)=>{

    console.log(`Error fetching data:${error}`);
  });
    
  }

  return (
    <div className="App" style={{display:"flex",flexWrap:"wrap",gap:"10px"}}>
     {countries.map((country)=>(
     <card style={{border: '1px solid #ccc', borderRadius: '8px', padding: '16px'}}>
      <img src={country.flag} alt="No img" style={{width:"50%"}}></img>
      <div>{country.name}</div>
     </card>
     ))}
    </div>
  );
}

export default App;
