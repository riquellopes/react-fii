import React, { Component } from 'react';

// Components
import FiiList from "./FiiList"

class App extends Component {

  constructor(){
      super();
      this.state = { fiis: [] };
  }

  componentWillMount(){
      fetch("http://localhost:3001/api/")
        .then((response) => {
            return response.json()
        })
        .then((fiis) => {
            this.setState( {fiis: fiis})
        });
  }

  render() {
    if( this.state.fiis.length > 0 ){
        return (
            <div className="container">
                <FiiList list={this.state.fiis} />
            </div>
        )
    }

    return (
      <div className="container">
          <p className="text-center">Load fii...</p>
      </div>
    );
  }
}

export default App;
