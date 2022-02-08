import React from "react";
import { Component } from "react/cjs/react.production.min";
import Board from "../Board/Board";
import "./Table.css"

const boardList = [1,2,3,4,5,6,7,8,9]
class Table extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className = 'table'>
                
                    
                        <h1>{this.props.value}</h1>
                        <div className = "second">{boardList.slice(3,6).map(j => <Board number1={this.props.value} number2={j} />)
                        }
                        </div>
                    
                   
                        <div className = 'first'>{boardList.slice(0,3).map(j => <Board number1={this.props.value} number2={j} />)}
                        </div>
                        <div className="third">{boardList.slice(6,9).map(j => <Board number1={this.props.value} number2={j} />)
                        }</div>
                    
                
            </div>
        )
    }
}

export default Table;
