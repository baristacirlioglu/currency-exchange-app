import React from 'react'
import './App.css'
import Currency from './components/Currency.jsx'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
   <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex items-start justify-center pt-10 bg-[url('../images/doviz.jpg')] bg-no-repeat bg-cover bg-center">
        <Currency />
      </main>

      <Footer />
    </div>
  );
}

export default App
