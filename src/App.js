import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
              },
              {
                name: 'Mac',
                job: 'Bouncer',
              },
              {
                name: 'Dee',
                job: 'Aspring actress',
              },
              {
                name: 'Dennis',
                job: 'Bartender',
              },            
        ],
    };

    render() {
        const { characters } = this.state
    
    

      return (
        <div className="App container">
          <h3>Hello, React!</h3>
          <br/>          
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <br/>
          <Form handleSubmit={this.handleSubmit}/>
        </div>
      )
    }

    removeCharacter = index => {
        const { characters } = this.state
      
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }


      handleSubmit = character => {
        this.setState({ characters: [...this.state.characters, character] })
      }
  }

  export default App