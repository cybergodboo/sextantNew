import'./App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/navbar'
import Ip from './components/ipaddress'
import './components/banner/Banner';
import Main from './components/main'


function App(){
      

    return(


     <div className="App">
        

     
        <Navbar/>
        <Ip/>     
        <Main/>
       
     </div>

    )
}

export default App;


