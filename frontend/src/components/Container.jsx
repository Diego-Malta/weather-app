import UserInput from "./UserInput"
import Result from "./Result"

function Container(props) {
  return (
    <div className="container">
      <h1>Weather App</h1>
      <UserInput />
      {props.error && <p className="error-message">{props.error}</p>}
      {props.weather && <Result />}
    </div>
  )
}

export default Container