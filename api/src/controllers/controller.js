require('dotenv').config();
const axios = require('axios');
const { API_KEY } = process.env;
const { Dog, Temperaments } = require('../db');

//Traigo info de la api
const getApiInfo= async () =>{
    const apiUrl= await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${API_KEY}`);
    //tarea: hacer un validador
    const apiInfo= await apiUrl.data.map(dog =>{
        return {
            id: dog.id,
            nombre: dog.name,
            imagen: dog.image.url,
            altura: dog.height.imperial,
            peso: dog.weight.imperial,
            añosDeVida: dog.life_span,
            temperaments: dog.temperament,
        }
    })
    return apiInfo
}

//traer Db
const getDbInfo = async ()=>{
    return await Dog.findAll({
        include:{
          model: Temperaments,
          attributes: ['nombre'],
          through: {
            attributes: [], // A Traves de la tabla atributes. 
        }
    } 
})
}

 //Concatenar API + DB //
 const getAllDogs= async ()=>{
    const apiInfo= await getApiInfo();//traiga la info de la API
    const dbInfo= await getDbInfo(); // traiga la info de la DB
    const infoTotal= await apiInfo.concat(dbInfo) // concatena toda la info en un [].
    return infoTotal
}

const createPost = async (nombre, imagen, altura, añosDeVida, peso, temperaments) => {
    const newDog = await Dog.create({nombre, imagen, altura, añosDeVida, peso});
    let dogtemperamentDb = await Temperaments.findAll({
      where: {nombre: temperaments}
  })
  newDog.addTemperament(dogtemperamentDb);
}

const getTemperament =async() =>{
    const apiUrl= await axios.get(`https://api.thedogapi.com/v1/breeds?apiKey=${API_KEY}`);
    const allTemperaments= await apiUrl.data.map(t => t.temperament);
    const temps = allTemperaments.toString().split(",");
    temps.forEach(tm => {
      Temperaments.findOrCreate({
          where: { nombre: tm}
      })
    })
    const temperamentTypes = await Temperaments.findAll();
    return temperamentTypes;
    };



module.exports = {
    getAllDogs,
    createPost,
    getTemperament,
}