import { Component } from "react";

export default class PresentationClass extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <h1>hi {this.props.groupe} from class</h1>
                <h2>{this.props.centre}</h2>
                <h3>{this.props.children}</h3>
            </div>
        )
    }
}