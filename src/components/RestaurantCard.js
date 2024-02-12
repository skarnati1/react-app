import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    // console.log("resData: ", props);
    const {name, cuisines, avgRating, costForTwo, sla} = resData.info;
     return (
         <div className="m-4 p-4 rounded-md w-[240px] h-[350] hover:bg-slate-200 bg-slate-50 res-card">
             <img className="w-[220px] rounded-md h-[150] res-logo"
             alt="res-logo"
             src={CDN_URL +
             resData.info.cloudinaryImageId
             }>
             </img>
             <h3 className="font-bold py-2 text-lg">{name}</h3>
             <h4>{cuisines.join(", ")}</h4>
             <h4>{avgRating} Stars</h4>
             <h4>{costForTwo}</h4>
             <h4>{sla?.slaString}</h4>
         </div>
     )
 }

 export const withPromotedLabel = (RestaurantCard) =>{
    return (props) => {
        const {resData} = props;
        return(
            <div>
                <label className=" absolute bg-[#6c696d] font-bold text-white m-2 p-2 rounded-md">{resData?.info?.aggregatedDiscountInfoV3?.header} {resData?.info?.aggregatedDiscountInfoV3?.subHeader}</label>
                <RestaurantCard {...props} />
            </div>
            
        );
    }
 }

 export default RestaurantCard;