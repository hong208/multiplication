import React, { Component } from "react";
import "./Board.css";

class Board extends Component {
    constructor(props){
        super(props);
        
    }

    render() {
        return (
            <div className="board">
                {this.props.number1} X {this.props.number2} = {this.props.number1 * this.props.number2}
            </div>
        )
    }

}

export default Board;