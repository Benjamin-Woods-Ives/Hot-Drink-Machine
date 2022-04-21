import React from "react";
import "./OptionBox.css";
class OptionBox extends React.Component { 
    
    inputHandle = () => {
        this.props.handler(this.props.drinkId)
    }
    
    render() {
        // console.log(this.props)
        return (
            <button onClick={this.inputHandle} className="OptionBox">
                {this.props.drinkName}
            </button>
        )      
    }
}

export default OptionBox;