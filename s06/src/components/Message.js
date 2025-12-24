import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super();
        this.state = {
            msg: "Bienvenue Visiteur",
            msgbtn: "inscription",
            counter: 0
        }
        //this.inscription = this.inscription.bind(this);
    }

    inscription() {
        //this.state.msg = "votre inscription est effectuée"
        this.setState({
            msg: "votre inscription est effectuée",
            msgbtn: "merci"
        })
    }

    inc(){
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Class</h1>
                <p>{this.state.msg}</p>
                {/* <button onClick={this.inscription}>{this.state.msgbtn}</button> */}
                <button onClick={() => this.inscription()}>{this.state.msgbtn}</button>
                <br />
                <br />
                <br />

                <span>{this.state.counter}</span><br />
                <button onClick={()=> this.inc()}>+</button>
                <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>

            </div>
        );
    }
}

export default Message;
