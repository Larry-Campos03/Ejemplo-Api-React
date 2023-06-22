import './Boton.css'

// eslint-disable-next-line react/prop-types
function Boton ({ evento, valor, fn }) {
  return (
    <>
      {evento && <input type='button' className='boton' onClick={fn} value={valor} /> || <input type='button' className='boton' value={valor} />}

    </>
  )
}

export default Boton
