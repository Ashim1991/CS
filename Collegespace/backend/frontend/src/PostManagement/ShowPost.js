import React,{useEffect,useState} from 'react';
import axios from 'axios';

import "./post.css";
const ShowPost=() => {
   
    const[posts,setPosts] = useState([])
    

    const getPosts = async () => {
        const response = await axios.get('http://localhost:8000/api/Post/');

        setPosts(response.data)
    }
   

    useEffect( () =>{
         getPosts();
        
    },[])




    return (
        <div>
        <div>{
             posts.map((post,index) => (
                 <div className='Show'>
                      <div className='text'>
                    
                     <p>Posted BY: {post.createdby}</p>
                     <p>{post.description}</p>
                     </div>
                     <img src={post.image} alt=""/>
                     {/* <div className='text'>
                     <h1>{post.name}</h1>
                    </div> */}
                 </div>    
             )
             )
            }
        </div>
        </div>
    )
}

export default ShowPost;
