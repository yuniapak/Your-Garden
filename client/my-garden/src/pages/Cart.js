import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Cart = (props) => {
  let cart = []
  const allPlants = props.allPlants
  const cartElements = props.cartElements
  const wholeCart = props.wholeCart

  //match id for information about plant to display
  cartElements.map((elem) => {
    allPlants.filter((plant) => {
      if (elem == plant._id) {
        cart.push(plant)
      }
    })
  })
  console.log(cartElements)

  //create new cart onclick
  const createNewCart = async () => {
    const result = axios.post(`http://localhost:3001/api/yourNewGarden`)
    console.log('new cart')
  }
  //delete whole cart onclick
  const deleteCart = async () => {
    //const plantId = await cartElements(e.target.id)
    const remove = await axios
      .delete(`http://localhost:3001/api/yourNewGarden/${props.cartInUse}`)
      .then((res) => {
        console.log(res.status)
        window.location.reload(false)
      })
    //  console.log(cartElements)
  }

  // const cartInUse = props.cartInUse

  // const updateCartOfPlants = async (e) => {
  //   const plantId = e.target.id
  //   for (let i = 0; i < wholeCart.plants.length; i++) {
  //     if (plantId == wholeCart.plants[i]) {
  //       console.log(wholeCart.plants[i])
  //       const result = await axios
  //         .put(
  //           `http://localhost:3001/api/yourNewGarden/yourNewGarden/c/${cartInUse}`,
  //           { plants: wholeCart.plants[i] }
  //         )
  //         .then((res) => {
  //           console.log(result.status)
  //           window.location.reload(false)
  //         })
  //       //console.log('removed', wholeCart.plants)
  //     }
  //   }
  // }

  cart.map((elem) => console.log(elem.Name))

  return (
    <div>
      <h2>Your plants:</h2>
      <div className="cartButtons">
        <button type="submit" onClick={() => deleteCart()}>
          Clear Cart
        </button>
        <button onClick={createNewCart}>Create New Cart</button>
      </div>
      <div className="Cart">
        {cart.map((elem) => (
          <div key={elem.Name} className="cartElem">
            <button
              id={elem._id}
              className="delete"
              type="submit"
              // onClick={updateCartOfPlants}
            >
              X
            </button>
            <h3>{elem.Name}</h3>
            <img src={elem.image} />
            <h4>Best planted with: {elem.fit}</h4>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Cart
