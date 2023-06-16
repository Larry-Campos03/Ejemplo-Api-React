import { useState, useEffect } from 'react';
import Recuadro from '../../components/templates/Recuadro';
import Tarjeta from '../../components/moleculas/Tarjeta';

function Index() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((respuesta) => respuesta.json())
      .then((datos) => setPersonajes(datos.results));
  }, []);

  return (
    <>
      <Recuadro>
        {personajes.map((personaje) => (
          <Tarjeta
            key={personaje.id}
            img={personaje.image}
            nombre={personaje.name}
            descripcion={personaje.species}
          />
        ))}
      </Recuadro>
    </>
  );
}

export default Index;
