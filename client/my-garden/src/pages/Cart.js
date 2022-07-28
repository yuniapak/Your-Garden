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

  const createNewCart = async () => {
    const result = axios.post(`http://localhost:3001/api/yourNewGarden`)
    console.log('new cart')
  }

  const deleteCart = async () => {
    //const plantId = await cartElements(e.target.id)
    const remove = await axios
      .delete(`http://localhost:3001/api/yourNewGarden/${props.cartInUse}`)
      .then((res) => {
        console.log(res.status)
      })
    console.log(cartElements)
    //import navigate('/yourNewGarden') and useNavigate
  }

  console.log(cart)
  cart.map((elem) => console.log(elem.Name))

  return (
    <div>
      <h2>Your plants:</h2>
      <div className="cartButtons">
        <button onClick={deleteCart}>Delete Cart</button>
        <button onClick={createNewCart}>Create New Cart</button>
      </div>
      <div className="Cart">
        {cart.map((elem) => (
          <div key={elem.Name} className="cartElem">
            <button className="delete" type="submit">
              X
            </button>
            <h3>{elem.Name}</h3>
            <img src={elem.image} />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Cart
