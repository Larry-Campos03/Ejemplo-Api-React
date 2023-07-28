import Imagen from '../atomos/Imagen/Imagen'
import Parrafo from '../atomos/Parrafo/Parrafo'
import Titulo from '../atomos/Titulo/Titulo'
import './Tarjeta.css'

// eslint-disable-next-line react/prop-types
function Tarjeta ({ img, nombre, descripcion }) {
  return (
    <article className='container-tarjeta'>
      <div className='container-tarjeta__imagen'>
        <Imagen recurso={img} descripcion={descripcion} />
      </div>
      <div className='container-tarjeta__contenido'>
        <Titulo tipo='h2' titulo={nombre} />
        <Parrafo contenido={descripcion} />
      </div>
    </article>
  )
}

export default Tarjeta
