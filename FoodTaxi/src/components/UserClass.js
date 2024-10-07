import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {name} = this.props.userInfo;
        return (
            <h1>{name}</h1>
        );
    }
}

export default UserClass;