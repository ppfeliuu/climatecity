import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';

function App() {

  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);

  const datosConsulta = datos => {
    console.log(datos);
    if(datos.ciudad === '' | datos.pais === '') {
      guardarError(true);
      return;
    }

    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  let componente;
  if (error) {
      componente = <Error mensaje='Ambos campos son obligatorios' />
  } else {

    componente = null;

  }

  return (
    <div className="App">
      <Header
        titulo='Weather App React'
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Formulario 
                datosConsulta={datosConsulta}
              />
            </div>

            <div className="col s12 m6">
              {componente}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
