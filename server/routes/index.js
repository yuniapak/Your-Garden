const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/controllers.js')

router.get('/', (req, res) => res.send('Landing page'))
router.get('/plant', controllers.getAllPlants)
router.get('/plant/Name', controllers.getPlantByName)
router.get('/plant/:Name', controllers.findOne)
router.get('/yourNewGarden', controllers.getCartElem)
// router.get('/plantId', controllers.getPlantById)
//Cart create and update plants array
router.post('/yourNewGarden', controllers.createCart)
router.put('/yourNewGarden/:id', controllers.updatePlantCart)
router.delete('/yourNewGarden/:id/:plant_id', controllers.deleteCart)

module.exports = router
