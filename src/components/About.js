import React from 'react'
import Header from "./Header";
import User from './User';
import UserClass from './UserClass';

const About = () =>{
   return (
    <div className="aboutus">
        <div>
            <h1>About</h1>
            <h1>This is a page for sample react testing</h1>
            {/* <User /> */}

            <UserClass name={'Sridhar Class'}  location = {'Cumming class'}/>
        </div>
    </div>
     
   )
}

export default About;