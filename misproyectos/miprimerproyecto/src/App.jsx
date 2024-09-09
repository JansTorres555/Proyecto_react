import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; // Asegúrate de que esta importación sea correcta
import Contenido from './components/contenido/contenido'; // Asegúrate de que esta importación sea correcta

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