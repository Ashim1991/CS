import React,{useState} from 'react'
import Addpost from './Addpost'
import ShowPost from './ShowPost'

function Post() {

    const [refresh,setRefresh] = useState(false)

    
    return (
        <div>
            <Addpost refresh = {setRefresh}/>
            <ShowPost />
            
        </div>
    )
}

export default Post
