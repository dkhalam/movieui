import React, {Component} from 'react';
// Import potential chart types from node module
import {Bar, Line, Pie} from 'react-chartjs-2';

// Define chart component, pass in defaults, take data from App.js, render a line chart
class Chart extends Component {
	constructor(props){
		super(props);
		this.state = {
			chartData: props.chartData
		}
	}

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
	}

	render() {
		return (
			<div className="chart">
				<Line
					data={this.state.chartData}
					width={100}
					height={50}
					options={{
						// title: {
						// 	display: this.props.displayTitle,
						// 	text: 'Total Movie Sales',
						// 	fontSize: 25
						// },
						// legend: {
						// 	display: this.props.displayLegend,
						// }

					}}
				/>
			</div>
		)
	}
}

export default Chart;