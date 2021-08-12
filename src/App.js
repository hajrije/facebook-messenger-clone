import React, { useEffect, useState } from 'react';
import './App.css';
import {FormControl,Input} from '@material-ui/core';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton}  from '@material-ui/core';

function App() {
const [input,setInput]= useState('');
const [messages,setMessages]= useState([]);
const [username,setUsername]= useState('');

useEffect( () => {
db.collection('messages')
.orderBy('timestamp','desc')  
.onSnapshot (snapshot => {
 setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
})
}, [] )



useEffect( () => {
  setUsername(prompt ('Please enter your name'));
}, []  //condition

)

const sendMessage = (event) => {
  event.preventDefault(); //disables the refreshing of page

db.collection('messages').add({
  message : input,
  username : username,
  timestamp :firebase.firestore.FieldValue.serverTimestamp()
})
  setInput('');      //set input to blank after we add a message
};
 
return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="messenger-logo"/>
      <h1>Messenger Clone </h1>
        <h2>Mire se erdhet {username} </h2> 
      
      <form className='app_form'>
      <FormControl className='app__formControl'>
       <Input className='app__input' placeholder='Shkruaj nje mesazh' value={input} onChange= {event =>setInput(event.target.value)} />
       <IconButton className='app__iconButton' disabled={!input} variant='text' color='primary' type='submit' onClick={sendMessage}>
      <SendIcon/>
       </IconButton>
       </FormControl>

      </form>
      <FlipMove> 
      {
        messages.map(({id,message}) => (
          <Message key={id} username={username} message={message}/>
        
        ))
      }
      </FlipMove>
    </div>
  );
}

export default App;
