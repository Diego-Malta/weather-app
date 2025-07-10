function Result(props){
  return(
    <>
      <h2>{props.name}</h2>
      <p>{props.temp}</p>
      <p>{props.description}</p>
    </>
  )
}

export default Result