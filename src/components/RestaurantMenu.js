import {useEffect, useState} from 'react';
import Shimmer from './Shimmer';
import RestaurantMenuCard from './RestaurantMenuCard';
import {useParams} from 'react-router-dom';
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {
    
    const {resId} = useParams();
    const resInfo  = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState();
    console.log("before calling fetch ofmenu card");
    // const [resInfo, setResInfo] = useState();
    // useEffect(()=>{
    //     fetchMenu();
    // }, []);


    // const {resId} = useParams();
    
    // console.log(params);
    // fetchMenu = async()=>{
    //     console.log("fetch of menu card");
    //     const data = await fetch(MENU_API+resId);
    //     const json = await data.json();
    //     console.log(json);
    //     setResInfo(json.data);
    // };
    console.log("after executing fetch ofmenu card");
    if(resInfo == null) return ( <Shimmer /> );
    const {name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info || {};
    const {itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card?.card;
    const {cards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    const categories = cards.filter((item)=>
      item?.card?.card["@type"].includes("ItemCategory")
    );
    console.log("categories", categories);
    // console.log({cards});

  return  (
    <div className='text-center'>
      {/* <div className='my-4 mx-6'> */}
        <h1 className='my-6 font-bold text-2xl'>{name}</h1>
        <p className='font-bold rexr-lg'>{cuisines.join(', ')}</p>
        <h3>{costForTwoMessage}</h3>
      {/* </div> */}
      {
            
            categories.map((item, index)=> (
              item?.card?.card["@type"].includes("ItemCategory") ?
             <RestaurantMenuCard resMenuCard= {item} key={index} showItems={showIndex === index ? true : false}
              setShowIndex={()=>setShowIndex(index)}/> 
             : <div></div>
                // <div></div>
                // <li id='{item.card.info.id}'>{item.card.info.name} -{" Rs."}{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                )
            )}
    </div>
  );
}
;
export default RestaurantMenu