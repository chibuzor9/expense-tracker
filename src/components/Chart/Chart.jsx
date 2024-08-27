/* eslint-disable react/prop-types */
import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
	const dataPointVals = props.dataPoints.map(
		(dataPoint) => dataPoint.value,
	);
	const maxTotal = Math.max(...dataPointVals);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.id}
					value={dataPoint.value}
					maxValue={maxTotal}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
