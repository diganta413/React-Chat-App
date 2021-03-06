import './App.css';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import React,{ useEffect,useState,forwardRef,useRef } from 'react'
import SendIcon from '@material-ui/icons/Send';
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import IconButton from '@material-ui/core/IconButton';
import ScrollToBottom from 'react-scroll-to-bottom';

function App(){
  const messageEl = useRef(null);
  const [input,setinput]=useState("");
  const [messages,setmessages]=useState([])
  const [username,setusername]=useState("Unknown user");

  useEffect(() => {
    db.collection("messages").orderBy("time").onSnapshot(querySnapshot => {
    const data = querySnapshot.docs.map(doc => ({id: doc.id, msg_data: doc.data()}));
    setmessages(data);
});
    
  }, [])

  

  useEffect(() => {
    const user=prompt("Enter a username");
    if(user)
    {
      setusername(user);
    }
    else
    {
      setusername("Unknown user");
    }
  }, [])

  const msg_send = (event) =>{
    if(input)
    {
      event.preventDefault();
    //setmessages([...messages,{user:username,message:input}]);
    db.collection("messages").add({msg: input,user: username,time: firebase.firestore.FieldValue.serverTimestamp()});
    setinput("");
    }
    
  }
  

  return (
    <div className="App">
      <img src="messenger.png" className="icon"></img>
      <FlipMove ref={messageEl}>
        {messages.map((message)=>(
          <Message key={message.id} text={message.msg_data.msg} username={message.msg_data.user} current_username={username}/>
        ))}
      </FlipMove>
      
      <form className="form">
        <TextField  placeholder="Enter a message" value={input} onChange={event => setinput(event.target.value) } className="input" />
        <IconButton variant="contained" color="primary" type="submit" className="send_icon" onClick={msg_send} disabled={!input}>
          <SendIcon/>
        </IconButton>
        
      </form>      
    </div>
  );
}

export default App;
