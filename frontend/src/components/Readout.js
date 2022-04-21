import React from "react";
import InstructionBox from "./InstructionBox";
import OptionalBox from "./OptionalBox";
import "./Readout.css";

class Readout extends React.Component {
  
    state = {
        optionalsComplete: 0,
        footer: ""
    }
    constructor(){
        super()
        this.state.optionalsComplete = 0
        this.footer = ""
    }

    componentDidMount () {
        if (this.props.sharedState === this.props.options.length){
            this.footer = "Drink complete."
        }
        else{
            this.footer = ""
        }
        if (!(this.state.footer == this.footer)){
            this.setState(()=> {return {footer: this.footer}})
        }
    }

    componentDidUpdate() {
        if (this.props.sharedState === this.props.options.length){
            this.footer = "Drink complete."
        }
        else{
            this.footer = ""
        }
        if (!(this.state.footer == this.footer)){
            this.setState(()=> {return {footer: this.footer}})
        }
    }

    updateOptionalsComplete = async () => {
        this.props.handler() 
    }

    render() {
        var header = "Machine tasks:"
        var optionalBoxs = this.props.options.map(aOptions =><OptionalBox key={aOptions} reset ={false} text={aOptions} handler = {this.updateOptionalsComplete}/>)
        if (this.props. sharedState == 0){
            optionalBoxs = this.props.options.map(aOptions =><OptionalBox key={aOptions} reset ={true} text={aOptions} handler = {this.updateOptionalsComplete}/>)
        }
        return(
            <div className="preperationReadout">
                <p><u>{header}</u></p>  
                {this.props.instructions.map(aInstruction =><InstructionBox key={aInstruction} text={aInstruction}/>)}
                {optionalBoxs}
                <p><b>{this.state.footer}</b></p>
            </div>  
        )
    }
}

export default Readout;