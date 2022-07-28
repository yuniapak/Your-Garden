import React from 'react'
import{Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import PlantInfo from '../pages/PlantInfo'

const PlantCard = (props) =>{

    let searchResults = props.searchResults
    const cartId = props.cartInUse
    const [plantcart, postPlantCart] = useState([])
//update Cart onClick
console.log(cartId)
const getPlant= async(selectedPlant) =>{
    const plant = await axios.get(`http://localhost:3001/api/plant/${selectedPlant}`)
return (plant.data._id)
}
const addToCart = async (e) => { 
    const plantId = await getPlant(e.target.id) 
    const res = await axios.put(`http://localhost:3001/api/yourNewGarden/${cartId}`,{plant: plantId})

    console.log(plantId)
    window.location.reload(false)
}
  
    
 let navigate = useNavigate()
const showPlant = (plant) => {
navigate(`1`,{state: {plant: plant}})
}
//Maping through all elements before searched
    {
        if (props.searchQuery == '') {
          return (
            <div className='allPlants'>
              {props.allPlants.map((plant) => (
                <div key={plant.Name} className='plant'>
                  <img src={plant.image} alt="image is missing" />
                  <h3>{plant.Name}</h3>
                  <button id={plant.Name} type='submit' onClick={addToCart}>Add</button>
                  <button onClick={()=> showPlant(plant)}>More Information</button>
                  {/* <Link to="/plantInfo" onClick={()=> showPlant(plant)}>
                    More information
                  </Link> */}
                
                </div>
              ))}
            </div>
          )
        }
      }


//Mapping through Search elements
    return(
        <div>
            {
            searchResults.map((plant)=>(
            <div key = {plant.Name} onClick={props.onClick} className='plant'>
            <img src={plant.image} alt='image is missing'/>
            <h3>{plant.Name}</h3>
            <button id={plant.Name} type='submit' onClick={addToCart}>Add</button>
            <Link to = '/plantInfo' onClick={()=> showPlant(plant)}>More information</Link>
            </div>
            ))
            }

        </div>
    )
}

export default PlantCard