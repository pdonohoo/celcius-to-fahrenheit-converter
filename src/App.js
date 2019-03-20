import React, { Component } from 'react';
import './App.css';
import Button from './Components/button';



class App extends Component {

  state = {
    celsius: '',
    farhenheit: '',
  }

  celsiusInput = (event) => {
    console.log(this.state.celsius)
    this.setState({
      celsius: event.target.value
    }) 
  }
    
  convertToFarhenheit = () => {
    console.log(this.state.farhenheit)
    this.setState({
      farhenheit: parseInt(((this.state.celsius) * 9 / 5) + 32)
    })
  }

  render() {
    return (
      <div style={{ alignContent: 'center', textAlign: 'center' }} >
        <h1 style={{ textAlign: 'center' }} >Temp Conversion</h1>
        <div>
          <h3>Degrees in Celcius</h3>
          <input onChange={this.celsiusInput} />
          <h3>Degrees in Farhenheit</h3>

          <div>
            {this.state.farhenheit} <br />
            <Button onClick={this.convertToFarhenheit} />

          </div>

        </div>
      </div>
    );
  }
}

export default App;
