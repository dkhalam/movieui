import React, { Component } from 'react';
import logo from './logo.svg';
import Chart from './components/Chart';
import Button from './components/Button';
import Tickets from './components/Tickets';

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     chartData: {
        
  //     }
  //   }
  // }

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
      <div className="App grid-container">
        <div className="grid-item chart-things">
          <div className="charts-head">
            <div className="charts-left">
              <h2>Total Movie Sales</h2>
              <p>Comparison &middot; Movie 1 and Movie 2</p>
            </div>
            <div className="charts-right">  
              <p>Average value of sales in the past month in: <b>United States</b></p>
              <p>All sales: 162,862</p>
            </div>  
          </div>    
          <div className="charts-grid">
            <div className="grid-item line-chart">
              <Chart chartData={this.state.chartData} />
            </div>
            <div className="grid-item progress">
              <div>
                <h2>2,346</h2>
                <p>Total orders - Movie 1</p>
                <progress value="23" max="100"></progress>
              </div>
              <div>
                <h2>4,422</h2>
                <p>Total orders - Movie 2</p>  
                <progress value="44" max="100"></progress>
              </div>  
            </div>
          </div>    
          <p><b>Analysis of sales: </b>The value has been changed over time, and last month reached a level over $50,000.</p>
          <p><span role="img" aria-label="clock">&#128336;</span> Update on 06.26.2018</p>
        </div>
        <div className="first-stats grid-item">
          <h2>Movie 1</h2>
          <p><b>Release Date </b><span role="img" aria-label="clock">&#128336;</span> 26 June 2018</p>
          <Tickets />
        </div>
        <div className="second-stats grid-item">
          <h2>Movie 2</h2>
          <p><b>Release Date </b><span role="img" aria-label="clock">&#128336;</span> 26 June 2018</p>
          <Tickets />
        </div>
      </div>
    );
  }
}

export default App;
