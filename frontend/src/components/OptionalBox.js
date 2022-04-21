import React from "react";
import downArrow from "./arrowdown.png";
import "./OptionalBox.css";

class OptionalBox extends React.Component { 

    state = {
        yesNo: true,
        text: this.props.text,
        decisionText: "",
        textChanged: false,
        complete: false
    }
    initialstate = {
        yesNo: true,
        text: this.props.text,
        decisionText: "",
        textChanged: false,
        complete: false
    }
    yesHandle = () =>{
        this.setState({yesNo: false, decisionText: (this.props.text +" added!"), textChanged: true, complete: true})
        this.props.handler()
    }
    noHandle= () =>{
        this.setState({yesNo: false, decisionText: (this.props.text + " not added!"), textChanged: true, complete: true})
        this.props.handler()
    }
    resetState = async() =>{
        this.setState((state)=> {return {yesNo: true, decisionText: "", textChanged: false, complete: false}})
    }

    componentDidUpdate(){
        if ((this.props.reset === true) && !(this.state.yesNo === this.initialstate.yesNo)){
            this.resetState()
        }
    }

    render() {
        // if ((this.props.reset === true) && (this.state === this.initialstate)){
        //     this.resetState()
        // }
        // console.log("yesNo:"+this.state.yesNo)
        var yes= ""
        var no= ""
        var text = "add "+ this.props.text + "?"
        if (this.state.textChanged === true){
            text = this.state.decisionText
        }

        if (this.state.yesNo === true){
            yes =<button className="yesNo" onClick={this.yesHandle}>Yes</button>
            no =<button className="yesNo" onClick={this.noHandle}>No</button>
        }
        return (
            <div className="mainDiv">            
                <p>{text}</p>
                <p className="buttonDiv">
                    {yes}
                    {no}
                </p>
                <p><img className="downArrow" src={downArrow}/></p>
            </div>

        )

 
    }
}

export default OptionalBox;