import Recuadro from '../../components/templates/Recuadro'
import Tarjeta from '../../components/moleculas/Tarjeta'
import Titulo from '../../components/atomos/Titulo/Titulo'
import './Index.css'

import { useState, useEffect } from 'react'

function Index () {
  const [personajes, setPersonajes] = useState([])
  const [pagina, setPagina] = useState(1)

  const URL_API = `https://rickandmortyapi.com/api/character?page=${pagina}`

  useEffect(() => {
    fetch(URL_API)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        const { results } = datos
        setPersonajes(results)
      })
  }, [pagina])

  const paraAtras = () => {
    if (pagina === 1) {
      return pagina
    } else {
      setPagina(pagina - 1)
    }
  }

  const paraAdelante = () => {
    if (pagina === 42) {
      return pagina
    } else {
      setPagina(pagina + 1)
    }
  }

  return (
    <>
      {personajes
        ? <Recuadro>
          {personajes.map((personaje) => (
            <Tarjeta
              key={personaje.id}
              img={personaje.image}
              nombre={personaje.name}
              descripcion={personaje.species}
            />
          ))}
        </Recuadro>
        : <Titulo tipo='h1' titulo='Error, no se encuentran los elementos' />}
      <div className='botones'>
        <button onClick={paraAtras}>Atras</button>
        <button onClick={paraAdelante}>Adelante</button>
      </div>
    </>
  )
}

export default Index
