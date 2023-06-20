import { useState, useEffect } from 'react'
import Recuadro from '../../components/templates/Recuadro'
import Tarjeta from '../../components/moleculas/Tarjeta'
import Titulo from '../../components/atomos/Titulo/Titulo'

function Index () {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const {results} = datos
        setPersonajes(results)
      })
  }, [])

  return (
    <>
      {personajes ? <Recuadro>
        {personajes.map((personaje) => (
          <Tarjeta
            key={personaje.id}
            img={personaje.image}
            nombre={personaje.name}
            descripcion={personaje.species}
          />
        ))}
      </Recuadro> : <Titulo tipo='h1' titulo='Error, no se encuentran los elementos'/>}
    </>
  )
}

export default Index
