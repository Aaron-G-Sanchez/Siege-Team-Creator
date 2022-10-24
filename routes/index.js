const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/home', (req, res) => {
  res.send('This is the root.')
})

router.get('/operators', controllers.findAllOperators)

router.get('/operators/attack', controllers.findAttackOps)

router.get('/operators/defense', controllers.findDefenseOps)

router.get('/operators/attack/:id', controllers.findAttackOpById)

router.get('/operators/defense/:id', controllers.findDefenseOpById)

module.exports = router
