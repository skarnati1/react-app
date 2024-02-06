import RestaurantCard from "./RestaurantCard";
import restList from "../mocks/restListMock";
import {useState} from "react";

const Body = () =>{
    const [listOfRestaurants, setListOfRestaurant] = useState(restList);
    
    return (
        <div className="body">
            <div className="filte">
                <button className="filter-btn" onClick={() =>{
                    const filteredList = listOfRestaurants.filter((res) =>  res.data.avgRating > "4.0"); 
                    setListOfRestaurant(filteredList);
                }}>Top Rated Restaurants</button>
                
            </div>
            
            <div className="search">Search</div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant, index) => (
                    <RestaurantCard key={restaurant.data.id}resData= {restaurant}/>
                ))}
            </div>
        </div>
        )
}

export default Body;