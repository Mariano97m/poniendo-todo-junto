import { Component } from "react";
import styles from "./PersonCard.module.css"

class PersonCard extends Component {

    constructor(props){
        super(props);
        const {age} = this.props;
        this.state = {
            age: age
        }

    }

    render(){

        const {firstName, lastName, age, hairColor} = this.props;
        const Aumentar = () => {
            this.setState({age: this.state.age + 1})
            
        };
        return(
            <div className={styles.estilo}>
                <h1>{lastName}, {firstName} </h1>
                <p>Age: {this.state.age} </p>
                <p>Hair Color: {hairColor}</p>
                <button className="boton" onClick={Aumentar}>Birthday Button for:{lastName} {firstName}</button>
            </div>
        )
    }
};
export default PersonCard;
