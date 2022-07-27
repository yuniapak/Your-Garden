import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PlantCard from '../components/PlantCard'
import MyGarden from './MyGarden'
import axios from 'axios'
const PlantInfo = (props) => {
  const [plant, setPlant] = useState('')

  //   useEffect(() => {
  //     const getPlant = async () => {
  //       const result = await axios.get(
  //         `http://localhost:3001/api/plant/:Name=${props.searchResult}`
  //       )
  //       setPlant(result.data)
  //       console.log(result.data)
  //     }
  //     getPlant()
  //   }, [])

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
