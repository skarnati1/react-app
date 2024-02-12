import React from 'react';
import {Link} from 'react-router-dom';

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo : {
                name: "",
                location: "default",
            }
        }
    }
    async componentDidMount() {
            const data = await fetch("https://api.github.com/users/skarnati1")
            const json = await data.json();
            console.log (json);
            console.log("child mounted");
            this.setState({
                userInfo: json,
            });
    }

    render(){
        const {name, location, avatar_url, login, url} = this.state.userInfo;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>Count Class : {count}</h1>
                <button onClick={() => {
                    //never update state variables directly
                    
                    this.setState({
                        count : this.state.count + 1
                    })  

                }}>Increase Count</button>
                <img src= {avatar_url} />
                <h2>Name : {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: {login}</h4>
                <Link to={url}>Profile Link</Link>
            </div>
        )
    }
}

export default UserClass;