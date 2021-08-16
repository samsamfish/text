import React from 'react'
import AstronomyCard from './AstronomyCard'
import axios from 'axios'




class AstronomyContainer extends React.Component {
    constructor(){
        super();

        this.state={
            astronomy:[]
        }
    }

    componentDidMount(){
        const API_KEY='rHkkYKSMK8xJhwO8VaGHcvhvLGRatZlcHa5GjzTH'
        const END_POINT = 'https://api.nasa.gov/planetary/apod?api_key='
    
        axios.get(END_POINT+API_KEY)
        .then(response =>{
            this.setState({
                astronomy: response.data
            })
            console.log(response)
        })

            
    }
    render(){
        const {astronomy} = this.state;
        return (
            
            <AstronomyCard data={astronomy} />
        )
    }


}


export default AstronomyContainer


