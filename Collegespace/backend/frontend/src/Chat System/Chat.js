import React,{useEffect,useState} from 'react'
import './chat.css';
import Pusher from 'pusher-js';
import { connect } from 'react-redux';



const Chat = ({user}) => {
    
  const [username, setUsername] = useState(null);
  const [chat, setChat] = useState( []);
  const [message, setMessage] = useState([]);

  let allmessage =[];

   useEffect( () =>{
    Pusher.logToConsole = true;

    const pusher = new Pusher('e355a83a2e5019ec4fc4', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', function(data) {
      allmessage.push(data);
      setChat(allmessage)
    });

   },[]);
  
   const submit = async e =>{
     e.preventDefault();
      let formField = new FormData()
       formField.append('username',  user.first_name+ " "+ user.last_name)

     await fetch('http://localhost:8000/api/message/',{
         method: 'POST',
         headers: {'Content-type':'application/json'},
         body: JSON.stringify({
            //  
             formField,
             message
         })
     });
     setMessage('');
   }
   console.log(user)

    return (
        <div className='containerone'>
            <div>
            <div className='message'>
                {chat.map(message =>{
                    return(
                        <div className='chat'>
                          <h1>{message.username}</h1>
                        <div className='Realmsg'>
                        <div className='msg'>
                            <h1>{message.username}</h1>
                            </div>
                          <div className='msgtwo'>
                          <p>{message.message}</p>
                          </div>
                          </div>   
                        </div>
                    )
                })}
            </div>
            </div>
            <form onSubmit={e => submit(e)}>
                 <input className='form-control'
             placeholder='Write your message here'
             value={message}
             onChange={e => setMessage(e.target.value)}
             />
            </form>
        </div>
    )
}
const mapStateToProps = state => ({
  
  user: state.auth.user
});
 export default connect(mapStateToProps)(Chat);
