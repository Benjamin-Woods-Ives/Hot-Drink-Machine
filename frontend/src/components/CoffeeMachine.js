import React from "react";
import "./CoffeeMachine.css";
import OptionBox from "./OptionBox";
import axios from "axios";
import Readout from "./Readout";

const api = axios.create({
    baseURL: "http://81.103.124.35/api" 
  })
class CoffeeMachine extends React.Component {

    state = {
        drinks: [],
        selectedDrink: {
            instructions: [],
            optional: [],
            },     
        selected: false,
        readoutState: 0
      }
    constructor () {
        super();
        }

    componentDidMount() {
        const getDrinks = async() => {
            var resp = await api.get("/drinks/").then(({data}) => data);
            this.setState({drinks: this.state.drinks = resp})
        }
        getDrinks()
    }

    getInstructions = async(id) =>{
        var resp = await api.get("/instructions/"+id).then(({data})=>data);
        this.setState({selectedDrink: this.state.selectedDrink = resp, selected: true, readoutState: 0})
  }

    incrementReadOutState = async() => {
        this.state.readoutState++
        this.setState((state) => {return {readoutState: state.readoutState}})
    }

    render() {
        if ((this.state.selected) === true){
            var preperationReadout = <Readout instructions={this.state.selectedDrink.instructions} options={this.state.selectedDrink.optional} sharedState={this.state.readoutState} handler= {this.incrementReadOutState}/>
        }
        else {
            var preperationReadout = ""
        }
        
        return (
            <div className="main">
                <h1>Hot Drinks Machine</h1>
                <p>Select a drink to make.</p>
                <div className="coffeeMachine">
                    {this.state.drinks.map(drink =><OptionBox key= {drink.id} drinkId = {drink.id} drinkName= {drink.name} handler= {this.getInstructions}/>)}
                </div>
                {preperationReadout}
            </div>
        )      
    }
}

export default CoffeeMachine;