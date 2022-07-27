const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/controllers.js')

router.get('/', (req, res) => res.send('Landing page'))
router.get('/plant', controllers.getAllPlants)
router.get('/plant/Name', controllers.getPlantByName)
router.get('/plant/:Name', controllers.findOne)

//Cart create and update plants array
router.post('/yourNewGarden', controllers.createCart)
router.put('/yourNewGarden/:id', controllers.updatePlantCart)
router.delete('/yourNewGarden/:id', controllers.deletePlantFromCart)
module.exports = router
