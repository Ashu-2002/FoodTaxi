import React from "react";
import UserClass from "./UserClass";

class AboutClass extends React.Component{
  constructor(){
    super();

    this.state = {
      userInfo : {}
    }
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/Ashu-2002");
    const userInfo = await data.json();
    
    this.setState({
      userInfo: userInfo
    });
  }

  render(){
    return (
      <UserClass userInfo = {this.state.userInfo}/>
    );
  }
}

export default AboutClass;