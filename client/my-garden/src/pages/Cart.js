import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Cart = () => {
  const [cartElements, setCartElements] = useState([])
  useEffect(() => {
    const getCart = async () => {
      const res = await axios.get(`http://localhost:3001/api/yourNewGarden`)
      setCartElements(res.data)
      console.log(res.data)
    }
    getCart()
  }, [])

  return (
    <div>
      <h2>Your plants:</h2>

      {cartElements.map((elem) => (
        <div key={elem.plants}>
          <h3>{elem.plants}</h3>
        </div>
      ))}
    </div>
  )
}
export default Cart
