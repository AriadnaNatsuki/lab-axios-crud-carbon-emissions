const axios = require('axios');
//Instancia de axios
 const http = axios.create({
    baseURL:'http://localhost:8000'
})
//Renderizar la vista home
module.exports.home = (req, res, next) => {
    res.render('home')
}
//Renderizar la vista dogs
module.exports.dogs = (req, res, next) => {
    //Peticion a axios
    http.get('/dogs')
        .then((response) => {
            console.log(response.data)
            //Para pasar el array de datos a una vista
            //tenemos que pasarle como segundo parametro un objeto
            //llanmaremos dogs al objeto
            res.render('dogs',{dogs:response.data})
        })
    .catch(error=>next(error))
  
}
module.exports.createDog = (req, res, next) => {
    res.render('new-dog')
}
module.exports.doCreateDog = (req, res, next) => {
    http.post('/dogs', {
        name: req.body.name,
        //raza: req.body.raza,
        edad: req.body.edad
        // esterilizado:req.body.esterilizado}
    })
        .then(() => {
            res.redirect('/dogs')
        })
    .catch(error=>next(error))
    }

// const Dog = require('../models/Dog.model')

// module.exports.listDogs = (req, res, next) => {
//     Dog.find()
//         .then((dogs) => {
//             console.log(dogs)
//             //Vamos a listar
//             res.render("dogs/list", { dogs: dogs })
//         })
//         .catch(e => console.log(e))
// }
// module.exports.createDog = (req, res, next) => {
//     res.render("dogs/create-form")
// }
// //  .catch (e=> console.log(e))

// module.exports.doCreateDog = (req, res, next) => {
//     Dog.create(req.body)
//         .then(() => {
//             // res.render("drones/update-form")
//             res.redirect("/")
//         })
//         // 
//         .catch(e => console.log(e))
// }

