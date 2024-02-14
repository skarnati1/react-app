import React from 'react'
import {useState} from 'react';
import MenuItems from './MenuItems';

const RestaurantMenuCard = ({resMenuCard, showItems, setShowIndex}) => {
    console.log("resMenuCard", resMenuCard);
    // const {resMenuCard} = props;
    const {itemCards} = resMenuCard.card.card;
    const {card} = resMenuCard.card;
    // const[showItems, setShowItems] = useState(true);
    // const {title info} = props.card'
    // console.log('item- menu-cards :', card);
    // resMenuCard.length < 1 ? <div> no data</div> :
    // console.log('item- menu-cards :', itemCards);
    const handleClick = () =>{
      // setShowItems(!showItems);
      setShowIndex(!showItems);
    }
  return   (
    <div className='w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4'>
      <div className=' flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold text-lg'>{card.title}({card?.itemCards?.length})</span>
        {showItems && <span  className=''>^</span>} {!showItems && <span  className=''>⌄</span>}
      </div>
        {/* <h3>{card.title}({card?.itemCards?.length})</h3> */}
        {showItems &&  <  MenuItems listItems = {itemCards}  key = {card.title}/>}
         {/* {
            itemCards.map((item) =>(
                <li id='{item.card.info.id}'>{item.card.info.name} -{" Rs."}{resMenuCard.card.info.price/100 || resMenuCard.card.info.defaultPrice/100}</li>
            ))
            } */}
          {/* <li id='{resMenuCard.card.info.id}'>{resMenuCard.card.info.name} -{" Rs."}{resMenuCard.card.info.price/100 || resMenuCard.card.info.defaultPrice/100}</li> ? */}
    </div>
  )
}

export default RestaurantMenuCard