import React from 'react';

const Contenido = () => {
  const productos = [
    {
      id: 1,
      nombre: '',
      descripcion: '',
      precio: '$0',
      imgSrc: 'https://via.placeholder.com/300x200?text=Camiseta+1'
    },
    {
      id: 2,
      nombre: 'Camiseta de Fútbol 2',
      descripcion: '',
      precio: '$0',
      imgSrc: 'https://via.placeholder.com/300x200?text=Camiseta+2'
    },
    {
      id: 3,
      nombre: 'Camiseta de Chile ',
      descripcion: '',
      precio: '$0',
      imgSrc: 'https://via.placeholder.com/300x200?text=Camiseta+3'
    },
    {
      id: 4,
      nombre: '',
      descripcion: '',
      precio: '$24.99',
      imgSrc: 'https://via.placeholder.com/300x200?text=Camiseta+4'
    },
    {
      id: 5,
      nombre: '',
      descripcion: '',
      precio: '$0',
      imgSrc: 'https://via.placeholder.com/300x200?text=Camiseta+5'
    },
    {
      id: 6,
      nombre: 'Camiseta de Fútbol 6',
      descripcion: '',
      precio: '$39.99',
      imgSrc: 'https://via.placeholder.com/300x200?text=Camiseta+6'
    }
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Nuestros Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={producto.imgSrc}
              alt={producto.nombre}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
              <p className="text-gray-600 mb-2">{producto.descripcion}</p>
              <p className="text-lg font-bold mb-2">{producto.precio}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Comprar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contenido;