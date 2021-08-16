import React, { Component } from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'


class App extends React.Component {
    state = {PokemonInfo:[]}
    onGetPokemon =()=> {
        axios.get('https://pokeapi.co/api/v2/pokemon'
        ).then(
            res => {
                
                console.log(res)
            }
        );
    }
    

    render(){
        console.log(this.state.PokemonInfo)

        return(
            <div>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <div></div>
            </div>
        )
    }



}

export default App;