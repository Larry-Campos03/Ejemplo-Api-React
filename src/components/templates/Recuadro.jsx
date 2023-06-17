import './Recuadro.css'

// eslint-disable-next-line react/prop-types
function Recuadro ({ children }) {
  return (
  <div className="container-recuadro">
    {children}
  </div>
  )
}

export default Recuadro
