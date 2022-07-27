import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from '../components/Search'
import PlantCard from '../components/PlantCard'

const MyGarden = () => {
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [searched, setSearched] = useState(false)
  const [allPlants, setAllPlants] = useState([])

  const getPlants = async () => {
    const res = await axios.get(`http://localhost:3001/api/plant`)
    setAllPlants(res.data)
    console.log(res.data)
  }

  useEffect(() => {
    getPlants()
  }, [])

  const getSearchResults = async (e) => {
    e.preventDefault()
    const result = await axios.get(
      `http://localhost:3001/api/plant/Name?search=${searchQuery}`
    )
    setSearchResults(result.data)
    console.log(searchResults)
    setSearched(true)
  }

  const handleChange = (event) => {
    let input = event.target.value
    setSearchQuery(input)
  }

  return (
    <div>
      <Search getSearchResults={getSearchResults} handleChange={handleChange} />
      <PlantCard
        allPlants={allPlants}
        searchResults={searchResults}
        searched={searched}
      />
    </div>
  )
}
export default MyGarden
