import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './profile.css';

const Profile =() => {

    const[info,setInfos] = useState([])

    const getInfos = async () => {
        const response = await axios.get('http://localhost:8000/api/profile/');

        setInfos(response.data)
    }
    
    useEffect( () =>{
        getInfos();
       
   },[])

    return (
        <div>{
            info.map((profile,index) =>(
                <div>
                <div className='profilecard'>
                <div className='piccard'>
                    <img src={profile.image} alt =" "/>
                </div>
               <div className='infocard'>
               <h2> My Info</h2>
                <li>
                <h1> Date of Birth :<span>{profile.dateofbirth}</span></h1>
                <h1> Level :<span>{profile.category}</span></h1>
                <h1> Section :<span>{profile.section}</span></h1>
                <h1> Course :<span>{profile.course}</span></h1>
                </li>
               </div>
              </div>
                 <div className='Aboutcard'>
                 <div className='Acardone'>
                 <p> {profile.about}</p>
                </div>
                <div className='Acard'>
                <li>
                <h1> Date of Birth :<span>{profile.dateofbirth}</span></h1>
                <h1> Level :<span>{profile.category}</span></h1>
                <h1> Section :<span>{profile.section}</span></h1>
                <h1> Course :<span>{profile.course}</span></h1>
                </li>
                </div>
                </div>
              </div>
            )
            )
            }  
        </div>
    )
}

export default Profile;