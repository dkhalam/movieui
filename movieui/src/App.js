import React, { Component } from 'react';
import logo from './logo.svg';
import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData:{

      }
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    this.setState({
      chartData:{
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Movie 1',
            data: [
              65,
              60,
              40,
              50,
              36,
              27,
              40
            ],
            backgroundColor: 'rgb(211, 211, 211, 0.8)'
          }, {
            label: 'Movie 2',
            data: [
              49,
              51,
              62,
              35,
              55,
              32,
              27
            ],
            backgroundColor: 'rgb(21, 193, 193, 0.8)'
          }
        ]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chart chartData={this.state.chartData} />
      </div>
    );
  }
}

export default App;
