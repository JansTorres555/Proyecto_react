import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; 
import Contenido from './components/contenido/contenido'; 

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <Contenido />
      </main>
      <Footer />
    </div>
  );
};

export default App;