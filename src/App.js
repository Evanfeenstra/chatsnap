import React, {useState} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'

function App() {
  const [messages,setMessages] = useState([])
  return (
    <main className="main">
  
      <header>
        <img src="/gorrilla.jpg" alt="logo" />
        <span>Chat App</span>
      </header>

      {messages.map((m,i)=> <Message key={i} text={m} />)}

      <Footer
        onSend={(text)=> setMessages([...messages, text])} 
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
