import React from "react";

class Car extends React.Component
{
    constructor(props){
        super(props);
        // this.state={color:"red"};
    }
    render() {
        return <h2>Hi, I am {this.props.model} Car!</h2>;
    }
}

// function Car(props) {
//     return <h2> I am a {props.color} Car !!</h2>
// }

export default Car;