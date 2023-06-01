import Card from '../card/card.component';
import './cards.styles.css';

function Cards({allDogs}) {

  const dogsList = allDogs;
  
  // filtros, colocar solo que aparezca imagen, nombre, temperamentos y peso, colocar 8 por página
  return (
    <div className='cards-list'>
      {dogsList?.map(dog =>
        < Card dog = {dog}/>
      )}
    </div>
  );
}

export default Cards;