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
  apiKey: "AIzaSyCM4MfokXnlCxEQcp96BcXk16-6Y5bTsfk",
  authDomain: "chatsnapppp.firebaseapp.com",
  databaseURL: "https://chatsnapppp.firebaseio.com",
  projectId: "chatsnapppp",
  storageBucket: "chatsnapppp.appspot.com",
  messagingSenderId: "324225124799",
  appId: "1:324225124799:web:21a0ca271a8efdf09e390a"
};
initialize(firebaseConfig)
