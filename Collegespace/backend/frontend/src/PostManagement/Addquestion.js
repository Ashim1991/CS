
import React,{useEffect,useState} from 'react';
import "./post.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {AiOutlinePlus} from 'react-icons/ai';


const Addquestion = () => {
     

    const[title, setTitle] = useState("")
    const[description,setDescription]=useState("")

    const history = useHistory();

    const Addquestions = async () =>{
        let formField = new FormData()
        formField.append('title', title)
        formField.append('description', description)
       

        await axios({
            method:'post',
            url:'http://localhost:8000/api/question/',
            data:formField
        }).then((response) =>{
            console.log(response.data)
            history.push('/QandA')
        })
        
    }




    return (
        <div>
        <h4>Ask Question<AiOutlinePlus/></h4>
      <div className='Addpost'>
          
        <div className="Title">
        <label for="exampleFormControlInput1" className="form-label">Title:</label>
        <input
          type='text'
          name='name'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        </div>


      <div  className="Title2">
      <label for="exampleFormControlInput1" className="form-label">Question:</label>
      <input
        type='text'
        name='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      </div>


      
      <button className='but' onClick={Addquestions}> Post</button>
      <div className='Space'>

      </div>

      </div>
      </div>

    )
}
 export default Addquestion;