const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllDogs, createPost, getTemperament } = require('../controllers/controller.js')
const { API_KEY } = process.env;


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/dogs/:id', async (req, res) =>{
    const {id} = req.params;
    
    const dogTotal= await getAllDogs()
        if(id){
            let dogId= await dogTotal.filter(dog => dog.id == id)
            dogId.length?
            res.status(200).json(dogId):
            res.status(404).send('Not found or does not exist 😥')
        }
});

router.get('/dogs', async (req,res)=>{
    const nombre = req.query.nombre;
    let dogTotal= await getAllDogs();
      if(nombre){
        let dogName= await dogTotal.filter(dog => dog.nombre.toLowerCase().includes(nombre.toLowerCase())) 
        dogName.length ? //si existe, porque tiene algo-- entonces->
        res.status(200).send(dogName) : res.status(404).send('Not found or dog not exist 😥') // trae una receta especificamente.
      }else{
        res.status(201).send(dogTotal) //trae todos
    }
})

router.post('/dogs', async (req, res) => {
    let {nombre, imagen, altura, añosDeVida, peso, temperaments} = req.body;
   try {
     let response = await createPost(nombre, imagen, altura, añosDeVida, peso, temperaments);
     res.status(200).json('Create done');
   } catch (error) {
     res.status(400).json({error: error.message});
   }
})

router.get('/temperaments', async (req, res) => {
  try {
    const temperament = await getTemperament();
    res.json(temperament);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}
)

module.exports = router;
