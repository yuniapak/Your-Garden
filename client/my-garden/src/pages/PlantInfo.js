import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PlantCard from '../components/PlantCard'
import MyGarden from './MyGarden'
import axios from 'axios'

const PlantInfo = (props) => {
  const [plant, setPlant] = useState([])
  console.log(props)
  let { Name } = useParams()
  useEffect(() => {
    let selectedPlant = props.allPlants.find(
      (plant) => plant.Name === parseInt(Name)
    )
    setPlant(selectedPlant)
  }, [props.allPlants, Name])

  return plant ? (
    <div>
      <div key={plant.Name}>
        <h3>{plant.Name}</h3>
        <h4>{plant.watering}</h4>
        <h4>{plant.grow}</h4>
        <img src={plant.image} />
        <p>{plant.about}</p>
      </div>
    </div>
  ) : null
}
export default PlantInfo