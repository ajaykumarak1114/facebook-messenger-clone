
import { useEffect, useState } from 'react';
import db from './firebase';
import './App.css';
import Message from './components/Message';
import firebase from 'firebase'
import { FormControl, Input, InputLabel } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
import FlipMove from 'react-flip-move';

function App() {

  const [ input, setInput] = useState('');
  const [ messages, setMessages ] = useState([{username: '', text: ''}]);
  const [ username, setUsername ] = useState('')

  useEffect(() => {
      db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({id: doc.id, text: doc.data()})))
      })
  }, [])

  

  // useState = variable in react
  // useEffect = run code on a condition in react

  useEffect(() => {
    // run code here
    // if its blak inside [], this code run ONCE when the app component loads
    // if we have a varibale like input, it runs every time input changes

    setUsername(prompt("Enter your name"))
  }, []) // condition

  const sendMessage = event => {
    event.preventDefault();
    //setMessages([...messages, {username: username, text: input}])

    db.collection('messages').add({
      username: username,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  return (
    <div className="App">
      <h1>Facebook Messenger Clone</h1>
      <h2>Welcome {username}</h2>
      <form className="app_form">
        <FormControl className="app_formControl">
          <InputLabel>Enter a message...</InputLabel>
          <Input className="app_input" value={input} onChange={event => setInput(event.target.value)}/>
          <IconButton className="app_iconButton" variant="contained" color="primary" disabled={!input} type="submit" onClick={sendMessage}>
             <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({text, id}) => {
            console.log(id)
           return <Message username={username} message={text} key={id}/>
        })
        }
      </FlipMove>
    </div>
  );
}

export default App;
