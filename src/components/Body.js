import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import restList from "../mocks/restListMock";
import yelpListMock from "../mocks/yelpListMock";
import {useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useGetStatus from "../utils/useGetStatus";
import { korramngala_LOC_API } from "../utils/constants";
import UserContext from "./UserContext";

const Body = () =>{
    console.log("body rendered")
    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurants, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const {loggedInUser, setUserName} = useContext(UserContext);

    useEffect(() => {
        fetchData();
    }, []);

    

    let headers1 = new Headers();
    const RestaurantWithPromotedLabel = withPromotedLabel(RestaurantCard);

  headers1.append('Content-Type', 'application/json');
  let  yelpUrl = 'https://corsproxy.io/?https://api.yelp.com/v3/businesses/search?term=delis&latitude=37.786882&longitude=-122.399972';
//   let  apiUrl =
//     "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=" +
//     search + "&location=" + latitude + "%2C" + longitude + "&radius=" + radius + "&key=" + 'IBLhllP93Kp2uBT9ZWTPxlviJ8QNwBH3r_eBP7SNO4iD9DrxWpc54iMiwsQu35YwmeCsEITcGXo4iThYw56LYs0AFe4AU9CXhpGfie_QPqgNkRFRLDjK5yx2MGLCZXYx';

//   headers1.append('Authorization',  +'Bearer IBLhllP93Kp2uBT9ZWTPxlviJ8QNwBH3r_eBP7SNO4iD9DrxWpc54iMiwsQu35YwmeCsEITcGXo4iThYw56LYs0AFe4AU9CXhpGfie_QPqgNkRFRLDjK5yx2MGLCZXYx');
//   const headers = {'Authorization': 'Bearer IBLhllP93Kp2uBT9ZWTPxlviJ8QNwBH3r_eBP7SNO4iD9DrxWpc54iMiwsQu35YwmeCsEITcGXo4iThYw56LYs0AFe4AU9CXhpGfie_QPqgNkRFRLDjK5yx2MGLCZXYx'};

    fetchData = async() => {
        // const result = await fetch(
        //     yelpUrl
        //     );
        //     const dataMock = await result.json();
            // return yelpListMock.businesses;

            // const data1 = await fetch(yelpUrl, {headers:{'Authorization': 'Bearer IBLhllP93Kp2uBT9ZWTPxlviJ8QNwBH3r_eBP7SNO4iD9DrxWpc54iMiwsQu35YwmeCsEITcGXo4iThYw56LYs0AFe4AU9CXhpGfie_QPqgNkRFRLDjK5yx2MGLCZXYx'}})
            // const json1 = await data1.json();
            // console.log(json1);
        const data = await fetch(
            korramngala_LOC_API
            
            // 'https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        // ,{
        //     credentials: 'include',    
        //     Origin: "null",
        //     dataType : 'jsonp',
        //     method:'GET',
        //     headers: {'Authorization': 'Bearer IBLhllP93Kp2uBT9ZWTPxlviJ8QNwBH3r_eBP7SNO4iD9DrxWpc54iMiwsQu35YwmeCsEITcGXo4iThYw56LYs0AFe4AU9CXhpGfie_QPqgNkRFRLDjK5yx2MGLCZXYx',"Access-Control-Allow-Origin":"*"}
        // }
        );

        

        const json = await data.json();
        // setListOfRestaurant
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        let cardData = json.data.cards[3].card.card.gridElements ? json.data.cards[3].card.card.gridElements :json.data.cards[4].card.card.gridElements;
        let apiList = cardData.infoWithStyle.restaurants
        // console.log(json[data].card[5].card.card.gridElements.infoWithStyle.restaurants);
        // setTimeout(() => {
            setListOfRestaurant(apiList);
            setFilteredRestaurant(apiList);
        // }, 1000);
        
    }

    const onlineStatus = useGetStatus();

    if(onlineStatus === false){
        return <h1> Looks like you are offline! Please check your internet connection</h1>
    }
    return filteredRestaurants.length == 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search p-4 m-4" >
                    <input type="text" className=" border border-solid border-blue-950" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}></input>
                    
                    <button className="m-4 px-4 py-2 rounded-md border-green-300 bg-green-200" onClick={() => {
                        console.log(searchText);
                        
                        const filteredRestaurant = listOfRestaurants.filter((res) => 
                        res.data.name.toLowerCase().includes(searchText)
                        );
                        
                        // const filteredRest = listOfRestaurants.filter((res) => res.data.name.includes(searchText));
                        console.log(filteredRestaurant);
                        setFilteredRestaurant(filteredRestaurant);
                        
                    }}>Search</button>
                </div>
                <div className="search p-4 m-4 flex items-center ">
                    <button className="m-4 px-4 py-2 bg-gray-100 rounded-md" onClick={() =>{
                        const filteredList = listOfRestaurants.filter((res) =>  res.data.avgRating > "4.0"); 
                        setFilteredRestaurant(filteredList);
                    }}>Top Rated Restaurants</button>
                </div>
                <div className="search p-4 m-4 flex items-center ">
                    <input className=" border border-black" value={loggedInUser}
                    onChange={(e)=> setUserName(e.target.value)}></input>
                </div>
                
                
            </div>
            
            
            <div className="flex flex-wrap">
                {filteredRestaurants.map((restaurant, index) => (
                    <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id}>{restaurant?.info?.aggregatedDiscountInfoV3?.header ? <RestaurantWithPromotedLabel resData= {restaurant} props={RestaurantCard} /> :
                        <RestaurantCard  resData= {restaurant}/>
                    }
                    </Link>
                ))}
            </div>
        </div>
        )
}

export default Body;