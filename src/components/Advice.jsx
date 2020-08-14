import React, { Component } from 'react'
import axios from 'axios'
import '../App.css';

export class Advice extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
           advice: 'Get Free Advice Here !!'
        }
      }
    
    componentDidMount(){
        this.getAdvice()
    }
    
    getAdvice = () => {
        const id = Math.floor(Math.random() * 205 ) + 1
        axios.get(`https://api.adviceslip.com/advice/${id}`)
        .then(result => {
            const data = JSON.parse(result.data + "}");
            console.log(result.data.slip)
            const {advice} = data.slip
            this.setState({
                advice: advice
            })
            console.log(advice)
        })
        .catch(err => console.log(err.message))
    }

    render() {
        const { advice } = this.state
        return (
        <div className="card">
            <h1 className="heading">{advice}</h1>
            <button className="button" onClick={this.getAdvice}>
                <span>GIVE ME ADVICE!</span>
            </button>
        </div>
            
        )
    }
}

export default Advice
