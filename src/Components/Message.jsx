import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            message: "welcome visitor"
        }
    }

    changeMessage = ()=>{
        this.setState({
          message: "Thank you for suscribing",
        });
    }
    changeMessageBack = ()=>{
        this.setState({
          message: "Welcome back",
        });
    }

    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>{this.changeMessage()}}>Suscribe</button>
                <button onClick={()=>{this.changeMessageBack()}}>Go back</button>
            </div>
        );
    }
}

export default Message;
