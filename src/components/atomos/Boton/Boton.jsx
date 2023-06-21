// eslint-disable-next-line react/prop-types
function Boton ({ evento, valor, fn }) {
  return (
    <>
      {evento && <input type='button' onClick={fn} value={valor} /> || <input type='button' value={valor} />}

    </>
  )
}

export default Boton
