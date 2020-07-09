import React, {useEffect} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'
import {initialize, useDatu} from 'datu'
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  useEffect(()=>{
    const path = window.location.pathname
    if(path.length<2) window.location.pathname='/home'
  }, [])
  return <BrowserRouter>
    <Route path="/:room" component={Room} />
  </BrowserRouter>
}

function Room(props) {
  const room = props.match.params.room
  const {messages, send} = useDatu(room)
  return (
    <main className="main">
  
      <header>
        <img src="/gorrilla.jpg" alt="logo" />
        <span>Chat App</span>
      </header>

      <div className="messages">
        {messages.map((m,i)=> {
          return <Message key={i} text={m.text} />
        })}
      </div>

      <Footer
        onSend={text=> send({text, room})} 
      />

    </main>
  )
}

export default App;

const firebaseConfig = {
  apiKey: "AIzaSyDWXVgUqm3xATyzqUqTxcpvsW7U804ctXI",
  authDomain: "chatter20202020.firebaseapp.com",
  databaseURL: "https://chatter20202020.firebaseio.com",
  projectId: "chatter20202020",
  storageBucket: "chatter20202020.appspot.com",
  messagingSenderId: "630230183323",
  appId: "1:630230183323:web:cc967f51fc79e394ca053e"
};
initialize(firebaseConfig)
