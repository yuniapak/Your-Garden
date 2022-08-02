import axios from 'axios'

const Cart = (props) => {
  let cart = []
  let bed1 = []
  let bed2 = []
  const allPlants = props.allPlants
  const cartElements = props.cartElements

  //match id for information about plant to display
  cartElements.map((elem) => {
    allPlants.filter((plant) => {
      if (elem == plant._id) {
        cart.push(plant)
      }
    })
  })
  console.log('plants inside variable Cart', cartElements)
  //match plants to fit
  //working but matching in pairs!
  const fitPlants = () => {
    for (let i = 0; i < cart.length; i++) {
      let nextPlant = cart[i++]
      let fitPlant = cart[i].fit
      for (let j = 0; j < cart[i].fit.length; j++) {
        if (
          nextPlant.Name == cart[i].fit[j] ||
          nextPlant.fit[j] == cart[i].Name
        ) {
          console.log(nextPlant.Name, 'and', cart[i].Name)
          // bed1.push(nextPlant)
          // bed1.push(cart[i])
        } else if (
          nextPlant.Name == nextPlant.fit[j] ||
          nextPlant.fit[j] == nextPlant.Name
        ) {
          console.log('fit round2', nextPlant.Name, 'and', cart[i++].Name)
        } else {
          console.log('no fit', nextPlant.Name, cart[i].Name)
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
      })
    //  console.log(cartElements)
  }

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
        <button onClick={fitPlants}>Create</button>
      </div>
    </div>
  )
}
export default Cart
