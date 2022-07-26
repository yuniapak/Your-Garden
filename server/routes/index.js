const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/controllers.js')

router.get('/', (req, res) => res.send('Landing page'))
router.get('/plant', controllers.getAllPlants)
router.get('/plant/:id', controllers.getPlantById)
//Cart create and update plants array
router.post('/yourNewGarden', controllers.createCart)
router.put('/yourNewGarden/:id', controllers.updatePlantCart)

module.exports = router
