// eslint-disable-next-line react/prop-types
function Titulo({ tipo, titulo }) {
  return (
    <>
      {tipo === 'h1' && <h1>{titulo}</h1>}
      {tipo === 'h2' && <h2>{titulo}</h2>}
      {tipo === 'h3' && <h3>{titulo}</h3>}
    </>
  )
}

export default Titulo
