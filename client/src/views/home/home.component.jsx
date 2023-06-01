import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";

import {getByName, getDogs} from '../../redux/actions/index';

import Navbar from '../../components/navbar/navbar.component';
import Cards from '../../components/cards/cards.component'

import './home.styles.css';


function Home() {

  const dispatch = useDispatch();
  const allDogs = useSelector((state)=> state.allDogs);

  //*Filtro con el backend
  const [searchString, setsearchString] = useState("");

  function handleChange (e){
     e.preventDefault();
     setsearchString(e.target.value);
  }  
  
  function handleSubmit(e){
     e.preventDefault();
     dispatch(getByName(searchString));
  }
  //*Filtro sobre el estado
  //const [filtered, setFiltered] = useState(allDogs);
  //const [searchString, setsearchString] = useState("");

  //function handleChange (e){
    // e.preventDefault();
     //setsearchString(e.target.value);
  //}
  
  //function handleSubmit(e){
    //e.preventDefault();
    //const filtered = allDogs.filter(dog => 
      //dog.name.includes(searchString));

    //setFiltered(filtered);
  //}

  useEffect(()=>{
    dispatch(getDogs())
    //return(()=>{
      //clearDetail();
    //})
  },[dispatch])

  return (
    <div className='home'>
      <h2 className='home-title'>Home</h2>
      < Navbar handleChange = {handleChange} handleSubmit ={handleSubmit}/>
      < Cards allDogs = {allDogs}/>
    </div>
  );
}

export default Home;