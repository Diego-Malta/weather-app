function UserInput({ city, setCity, fetchWeather }) {

  const handleInput = e => setCity(e.target.value);
  
  return (
    <div className="user-input">
      <input type="text" value={city} placeholder="Enter city" onChange={handleInput}/>
      <button onClick={fetchWeather}>Get Weather</button>
    </div>
  )
}

export default UserInput