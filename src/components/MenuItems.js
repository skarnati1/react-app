import React from 'react';
import {CDN_URL} from '../utils/constants';

const MenuItems = (itemlist) => {
// const {itemlist} = props;
console.log( "itemlist", itemlist);
  return (
    <div>
         {/* <ul> */}
            {
                itemlist.listItems?.map((item) => (
                    <div className='memu-item p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between' key={item.card.info.name}>
                        
                        <div className='w-9/12'>
                        
                            <p className='p-y-2'>{item.card.info.name}</p> 
                            <p className='item-cost pb-3'>{" ₹"}{item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                            <p className='item-desc text-xs text-gray-400'>{item?.card.info.description}</p>
                        </div>
                        
                        <div className='w-20'>  
                            
                            <div className=' relative'>
                            <img className="" src= {CDN_URL + item.card.info.imageId}/>
                                <button className='bg-white rounded-sm text-green-700'>Add +</button>
                            </div>
                            
                            
                            
                        </div>
                    </div>
                    
                ))
            }
        {/* </ul>  */}
    </div>
  )
}

export default MenuItems