import React from 'react';
import './main.css'
import video from './video.mp4';
import Banner from './banner/Banner'
import Ip from './ipaddress'




const Main = () =>{
    return(

        <div className='main'>
 <video src={video} autoPlay loop>
 

 </video>
 <div>
  
    <Banner/>
 </div>


        </div>
    )
       
    

}

export default Main;