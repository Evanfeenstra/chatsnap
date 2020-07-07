import React from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'

function App() {
  return (
    <main class="main">
  
      <header>
        <img src="/gorrilla.jpg" alt="logo" />
        <span>Chat App</span>
      </header>

      <Message />

      <Footer />

    </main>
  )
}

export default App;
