import React from 'react'
import{Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'


const PlantCard = (props) =>{
    // const cart = () =>{
    // const [plant, postPlant] = useState([])
    //     if ()
    //     const addPlant = async () => {
    //       const res = axios.put(`http://localhost:3001/api/yourNewGarden`)
    //       postPlant(res)
    //       console.log(res)
    //     }

    let searchResults = props.searchResults
    return(
        <div>
            {
            searchResults.map((plant)=>(
            <div key = {plant.Name} onClick={props.onClick}>
            <img src={plant.image} alt='image is missing'/>
            <h3>{plant.Name}</h3>
            <button >Add</button>
            <Link to = '/plantInfo' searchResults={searchResults}>More information</Link>
            </div>
            ))
            }

        </div>
    )
}
// }
export default PlantCard