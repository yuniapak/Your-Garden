import { useLocation } from 'react-router-dom'
const PlantInfo = (props) => {
  let plantName = ''
  const plant = props.plant
  let location = useLocation()
  const initialState = {
    name: `${location.state.plant.Name}`,
    image: `${location.state.plant.image}`,
    about: `${location.state.plant.about}`,
    grow: `${location.state.plant.grow}`,
    water: `${location.state.plant.watering}`,
    fit: `${location.state.plant.fit}`,
    notfit: `${location.state.plant.notFit}`
  }

  console.log(initialState)
  return (
    <div>
      <h3>{initialState.name}</h3>
      <img src={location.state.plant.image} />
      <h4>Reach maturity in {initialState.grow}</h4>
      <h4>Water: {initialState.water}</h4>
      <h4>Companion planting best with {initialState.fit}</h4>
      <h4>About:</h4>
      <p>{initialState.about}</p>
    </div>
  )
}
export default PlantInfo
