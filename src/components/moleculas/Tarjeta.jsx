import Imagen from '../atomos/Imagen/Imagen'
import Parrafo from '../atomos/Parrafo/Parrafo'
import Titulo from '../atomos/Titulo/Titulo'
import Boton from '../atomos/Boton/Boton'
import './Tarjeta.css'
import { useState } from 'react'

// eslint-disable-next-line react/prop-types
function Tarjeta ({ id, img, nombre, descripcion }) {

  const [objeto, setObjeto] = useState([])

  const eventoClick = () => {

    const elementoGuardados = {
      id,
      nombre,
      imagen: img,
      descripcion
    }

    setObjeto(estadoAnterior =>({...elementoGuardados}))
    console.log(objeto)

  }

  return (
    <article className='container-tarjeta'>
      <div className='container-tarjeta__imagen'>
        <Imagen recurso={img} descripcion={descripcion} />
      </div>
      <div className='container-tarjeta__contenido'>
        <Titulo tipo='h2' titulo={nombre} />
        <Parrafo contenido={descripcion} />
        <Boton evento valor='Guardar' fn={eventoClick} />
      </div>
    </article>
  )
}

export default Tarjeta
