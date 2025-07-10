function UserInput(props) {
  return (
    <div className="user-input">
      <input value={props.city} placeholder="Enter city" />
      <button onClick={()=> console.log("Button clicked")}>Get Weather</button>
    </div>
  )
}

export default UserInput