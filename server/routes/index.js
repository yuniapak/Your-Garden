const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/controllers.js')

router.get('/', (req, res) => res.send('Landing page'))
router.get('/plant', controllers.getAllPlants)
router.get('/plant/:id', controllers.getPlantById)
router.post('/yourGarden', controllers.createCart)
router.put('/yourGarden/:id', controllers.updateCart)

module.exports = router
