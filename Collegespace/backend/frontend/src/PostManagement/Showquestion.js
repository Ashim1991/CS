import React,{useEffect,useState} from 'react';
import axios from 'axios';

import "./post.css";
function Showquestion() {
   
    const[questions,setQuestions] = useState([])

    const getQuestions = async () => {
        const response = await axios.get('http://localhost:8000/api/question/')
        setQuestions(response.data)
    }
    useEffect( () =>{
         getQuestions();
    },[])




    return (
        <div>{
             questions.map((question,index) => (
                 <div className='Show'>
                      <div className='text'>
                      <h1>{question.title}</h1>
                     <p>{question.description}</p>
                    
                     
                    
                    
                    </div>
                 </div>    
             )
             )
}
        </div>
    )
}

export default Showquestion;
