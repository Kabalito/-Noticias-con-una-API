import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/header';
import Formulario from './components/formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=ve&category=${categoria}&apiKey=d988a530546747f1bc4ed01a99b4b4c2`

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();

      setNoticias(noticias.articles);
    }
    consultarAPI();
 
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo='Buscador de noticias'      
      />

      <div className="container white">
          <Formulario
          setCategoria={setCategoria}          
          />
          <ListadoNoticias
            noticias={noticias}
          />
      </div>
    </Fragment>
  );
}

export default App;
