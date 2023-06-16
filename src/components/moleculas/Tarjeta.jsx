import Imagen from '../atomos/Imagen'
import Parrafo from '../atomos/Parrafo'
import Titulo from '../atomos/Titulo'

// eslint-disable-next-line react/prop-types
function Tarjeta({ img, nombre, descripcion }) {
  return (
    <article className="">
      <div className="">
        <Imagen recurso={img} descripcion={descripcion} />
      </div>
      <div className="">
        <Titulo tipo="h2" titulo={nombre} />
        <Parrafo contenido={descripcion} />
      </div>
    </article>
  )
}

export default Tarjeta
