const axios = require('axios')
// const http = axios.create({
//     baseUrl:'http://localhost:8000'
// })
//Renderizar la vista home
module.exports.home = (req, res, next) => {
    res.render('home')
}
//Renderizar la vista dogs
module.exports.dogs = (req, res, next) => {
    //Peticion a axios
    axios.get('http://localhost:8000/dogs')
        .then((response) => {
            console.log(response.data)
            //Para pasar el array de datos a una vista
            //tenemos que pasarle como segundo parametro un objeto
            //llanmaremos dogs al objeto
            res.render('dogs',{dogs:response.data})
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

