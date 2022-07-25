import'./App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from './components/navbar';

function App(){
 
     //creating IP state
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setIP(res.data.IPv4)


  }
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

    return(

        <div className = "App">
           <Navbar/>

         <h4>{ip}</h4>
           
         
        </div>
       
    );
}






export default App;