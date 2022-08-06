import axios from 'axios'
import { useState } from 'react'
import MatchedPlants from '../components/MatchedPlants'
const Cart = (props) => {
  let bed1 = []
  const [created, setCreated] = useState(false)
  const [arrayOfPlants, setArrayOfPlants] = useState([])
  const allPlants = props.allPlants
  const cartElements = props.cartElements

  //match id for information about plant to display
  // cartElements.map((elem) => {
  //   console.log('elem', elem)
  //   allPlants.filter((plant) => {
  //     if (elem == plant._id) {
  //       cart.push(plant)
  //     }
  //   })
  // })
  // console.log('plants inside variable Cart', cartElements)

  //match plants to fit
  //working but matching in pairs!
  const fitPlants = () => {
    for (let i = 0; i < cartElements.length; i++) {
      for (let j = 0; j < cartElements.length; j++) {
        for (let e = 0; e < cartElements[j].fit.length; e++) {
          if (
            cartElements[i].Name == cartElements[j].fit[e] &&
            bed1.includes()
          ) {
            bed1.push(cartElements[i], cartElements[j])
            setArrayOfPlants(bed1)
            setCreated(true)
            console.log(bed1)
          }
        }
      }
    }
  }

  //create new cart onclick
  const createNewCart = async () => {
    const result = axios.post(`http://localhost:3001/api/yourNewGarden`)
    console.log('new cart made')
  }
  //delete whole cart onclick
  const deleteCart = async () => {
    //const plantId = await cartElements(e.target.id)
    const remove = await axios
      .delete(`http://localhost:3001/api/yourNewGarden/${props.cartInUse}`)
      .then((res) => {
        console.log(res.status)
        window.location.reload(false)
        createNewCart()
      })
    //  console.log(cartElements)
  }

  // cart.map((elem) => console.log(elem.Name))

  return (
    <div>
      <h2>Your plants:</h2>
      <div className="cartButtons">
        <button onClick={fitPlants}>Create</button>
        <button type="submit" onClick={() => deleteCart()}>
          Clear Cart
        </button>
      </div>
      <div className="Cart">
        {cartElements.map((elem) => (
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
      <MatchedPlants created={created} arrayOfPlants={arrayOfPlants} />
    </div>
  )
}
export default Cart
