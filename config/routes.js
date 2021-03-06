//Grupo de rutas (routes)
const router = require('express').Router()
//Exportar los controladores (req,res,next)=>{res.render('index')}
const miscController = require('../controllers/misc.controller')
//Definimos la ruta y Llamamos al controlador 
router.get('/', miscController.home)
router.get('/dogs', miscController.dogs)
router.get('/create', miscController.createDog)
router.post('/create', miscController.doCreateDog)

module.exports = router
