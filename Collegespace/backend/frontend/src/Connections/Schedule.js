import React,{useEffect,useState} from 'react';
import axios from 'axios';

import "./main.css";
function Schedule() {
   
    const[schedules,setSchedules] = useState([])


    const getSchedules = async () => {
        const response = await axios.get('http://localhost:8000/api/schedule/')
        setSchedules(response.data)
    }
    useEffect( () =>{
         getSchedules();
    },[])




    return (
        <div>{
             schedules.map((schedule,index) => (
                
                 <div className='schedule'>
                     <h1> Upcomming important Schedule</h1>
                      <div className='Showschedule'>
                     <h4>Organization:  {schedule.title}</h4>
                     <p>{schedule.description}</p>
                     <h3> Date:{schedule.month}_{schedule.day}</h3>
                     
                     </div>
                     
                
                 </div>    
             )
             )
}
        </div>
    )
}

export default Schedule;
