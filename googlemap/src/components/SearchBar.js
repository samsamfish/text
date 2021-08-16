import React from 'react'

export class SearchBar extends React.Component {
    constructor(){
        super();

        this.state={
            term:''
        }
    }

    onFormSubmit= event =>{
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <label htmlFor="">Search</label>
                    <input type="text" 
                    value={this.state.term}
                    onChange={e=> this.setState({term: e.target.value})} />
                    <button onSubmit={this.onFormSubmit}>Search</button>
                </form>
                
            </div>
        )
    }
}

export default SearchBar
