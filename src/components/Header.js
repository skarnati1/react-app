
import { LOGO_URL } from "../utils/constants";
import { useState} from "react";
import {Link} from "react-router-dom";
import useGetStatus from "../utils/useGetStatus";
// import {Link}

// let btnName = "Login";


const Header = () =>{
    const [btnName, updateName] = useState("Login");
    
    const onlineStatus = useGetStatus();
    return (
        <div className="flex justify-between bg-blue-100 shadow-lg m2">
            <div className="logo-container">
                <img className="w-56" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online Satus: { onlineStatus ? "✅" :"🔴"}
                    </li>
                    <li className="px-4">
                    <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4">Cart</li>
                    <li className="px-4">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button className="login-btn" onClick={() => {
                        btnName == "Login"?
                        updateName("Logout") :
                        updateName("Login");
                        }}
                    >
                        {btnName}
                    </button>
                </ul>

            </div>
        </div>
    )
}

export default Header;