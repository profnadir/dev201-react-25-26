import React, { Component } from 'react';

class Compteur extends Component {
    constructor(props) {
        console.log("constructeur");
        
        super(props);
        this.state={
            compteur : 0,
            name: ""
        }
    }

    componentDidMount(){
        console.log("component did mount : monté");
        console.log("get posts from DB");
    }

    componentDidUpdate(){
        console.log("component did update : modifié");
    }

    componentWillUnmount(){
        console.log("component will unmount : démonté");
    }

    render() {
        console.log("render");
        /* console.log("get posts from DB"); */
        
        return (
            <div style={{background:"yellow"}}>
                <button>test</button> <br/>
                name : <input type="text" value={this.state.name}
                    onChange={e => this.setState({name: e.target.value})}/> <br/>
                <p>{this.state.name}</p>
                <p>{this.state.compteur}</p>
                <button onClick={() => this.setState({compteur : this.state.compteur + 1})}>+</button>
                <button onClick={() => this.setState({compteur : this.state.compteur - 1})}>-</button>
            </div>
        );
    }
}

export default Compteur;
