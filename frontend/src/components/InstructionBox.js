import React from "react";
import downArrow from "./arrowdown.png";
import "./InstructionBox.css";

class InstructionBox extends React.Component { 
    render() {
        return (
            <div>
            <p>{this.props.text}</p>
            <p><img className="downArrow" src={downArrow}/></p>
            </div>
        )      
    }
}

export default InstructionBox;