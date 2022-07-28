import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Cart = (props) => {
  let cart = []
  const allPlants = props.allPlants
  const cartElements = props.cartElements

  cartElements.map((elem) => {
    allPlants.filter((plant) => {
      if (elem == plant._id) {
        cart.push(plant)
      }
    })
  })
  console.log(cartElements)
  // handleDelete = event =>{
  //   this.setState({ id: event.target.value })
  // }
  // let { id } = useParams()
  const deletePlant = async (e) => {
    // const plantId = await cartElements(e.target.id)
    const remove = await axios
      .delete(`http://localhost:3001/api/yourNewGarden/${e}`)
      .then((res) => {
        console.log(res.status)
      })
    console.log(cartElements)
  }

  console.log(cart)
  cart.map((elem) => console.log(elem.Name))

  return (
    <div>
      <h2>Your plants:</h2>
      {cart.map((elem) => (
        <div key={elem.Name}>
          <button
            className="delete"
            id={elem._id}
            type="submit"
            onClick={() => deletePlant(elem._id)}
          >
            X
          </button>
          <h3>{elem.Name}</h3>
          <img src={elem.image} />
        </div>
      ))}
    </div>
  )
}
export default Cart
