import {Link} from 'react-router-dom';
import './card.styles.css';

function Card({dog}) {

const { nombre, imagen, altura, peso, añosDeVida, temperaments, id} = dog;
  return (
    <div className='card-container'>
      <Link to={`home/${id}`}>
      <p>{id}</p>
      <p>{imagen}</p>
      <h2>{nombre}</h2>
      <p>Altura: {altura}</p>
      <p>Peso: {peso}</p>
      <p>Temperaments: {temperaments}</p>
      <p>Años de vida: {añosDeVida}</p>
      </Link>
    </div>
  );
}

export default Card;