import React from 'react';
import "./Page.css";
import Post from '../PostManagement/Post'

function NewsPage() {
    return (
      
        <div className='Mainpage md-3'>
          <div className='blogcata'>
            
          </div>
          <div className='Newspost'>
       
          <Post/>
          </div>
          <div className='Active'>
          
          </div>
        </div>
    )
}

export default NewsPage;
