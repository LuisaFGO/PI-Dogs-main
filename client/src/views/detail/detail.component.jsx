import { useEffect} from 'react';
import { useDispatch, useSelector} from "react-redux";

import {getByID} from '../../redux/actions/index';
import Card from '../../components/card/card.component';

import './detail.styles.css';

function Detail() {
  const dispatch = useDispatch();
  const dog = useSelector((state)=> state.dog);

  useEffect(()=>{
    dispatch(getByID())
  },[dispatch])

  return (
    <div >
      < Card dog = {dog}/>
    </div>
  );
}

export default Detail;