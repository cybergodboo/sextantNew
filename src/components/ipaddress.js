import {useState,useEffect} from 'react'
import './ip.css'
import axios from 'axios'
import Banner from './banner/Banner'

function Ip(){
    //creating IP state
    const [ip,setIP] = useState('');
    
    //creating function to load ip address from the API
    const getData = async()=>{
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(res.data);
        setIP(res.data.IPv4)
    }
    
    useEffect(()=>{
        //passing getData method to the lifecycle method
        getData()
    },[])
    
    return(
        <div className = "Ip">
        
            <h2>Your IP Address is</h2>
            <h4>{ip}</h4>
        </div>
    );
}

export default Ip;