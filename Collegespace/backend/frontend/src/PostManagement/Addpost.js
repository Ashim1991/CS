
import React,{useEffect,useState} from 'react';
import "./post.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {toast} from 'react-toastify';
import { connect } from 'react-redux';



const Addpost = ({user}) => {
     

    const[image,setImage] = useState(null)
    const[name, setName] = useState("")
    const[description,setDescription]=useState("")

    const history = useHistory();

    const Addnews = async () =>{
        let formField = new FormData()
        formField.append('name', name)
        formField.append('description', description)
        formField.append('createdby', user.first_name+ " "+ user.last_name)
        if (image !== null){
            formField.append('image', image)
        }

        await axios({
            method:'post',
            url:'http://localhost:8000/api/Post/',
            data:formField,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }).then((response) =>{
            console.log(response.data)
            history.push('/main')
            
        })
        toast.success('Post successfully')
    }

    



    return (
        <div>
       
      <div className='Addpost'>
          <h1>Addnews</h1>
        <div className="Title">
        <label htmlFor="exampleFormControlInput1" className="form-label">Title:</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        </div>


      <div  className="Title2">
      <label htmlFor="exampleFormControlInput1" className="form-label">Description:</label>
      <input
        type='text'
        name='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      </div>


       <div  className="Title3">
       <label htmlFor="exampleFormControlInput1" className="form-label">Image:</label>
       <input
         type='file'
         name='image'
         src={image}
         onChange={(e) => setImage(e.target.files[0])}
       />

       </div>
      <button className='but' onClick={Addnews}> Add news</button>
      <div className='Space'>

      </div>

      </div>
      </div>

    )
}
const mapStateToProps = state => ({
  
  user: state.auth.user
});
 export default connect(mapStateToProps)(Addpost);