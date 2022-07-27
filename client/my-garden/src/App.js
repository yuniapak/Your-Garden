import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/Cart'
import MyGarden from './pages/MyGarden'
import PlantInfo from './pages/PlantInfo'

const App = () => {
  return (
    <div>
      <header>
        <h1>Garden</h1>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plant" element={<MyGarden />} />
          <Route path="/yourNewGarden" element={<Cart />} />
          <Route path="/plantInfo" element={<PlantInfo />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
