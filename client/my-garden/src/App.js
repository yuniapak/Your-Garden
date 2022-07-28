import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import PlantCard from './components/PlantCard'
import Home from './pages/Home'
import Cart from './pages/Cart'
import MyGarden from './pages/MyGarden'
import PlantInfo from './pages/PlantInfo'
import { useState, useEffect } from 'react'

const App = () => {
  let cartUse = ''
  const [allPlants, setAllPlants] = useState([])
  const [cartElements, setCartElements] = useState([])
  const [cartInUse, setCartInUse] = useState('')

  const getPlants = async () => {
    const res = await axios.get(`http://localhost:3001/api/plant`)
    setAllPlants(res.data)
    //console.log(res.data)
  }
  useEffect(() => {
    getPlants()
    getCart()
  }, [])

  const getCart = async () => {
    const res = await axios.get(`http://localhost:3001/api/yourNewGarden`)
    setCartElements(res.data[0].plants)
    //  console.log(res.data[0].plants)
    setCartInUse(res.data[0]._id)
  }
  return (
    <div>
      <header>
        <h1>Garden</h1>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/plant"
            element={<MyGarden allPlants={allPlants} cartInUse={cartInUse} />}
          />
          <Route
            path="/yourNewGarden/*"
            element={
              <Cart
                allPlants={allPlants}
                cartElements={cartElements}
                cartInUse={cartInUse}
              />
            }
          />
          <Route
            path="/plantInfo"
            element={<PlantInfo allPlants={allPlants} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
