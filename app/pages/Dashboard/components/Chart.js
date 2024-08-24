import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Chart = ({ data }) => {
  return (
    <LineChart width={500} height={300} data={data}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <XAxis dataKey="date" />
      <YAxis />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Tooltip />
    </LineChart>
  );
};

Chart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string,
    value: PropTypes.number,
  })),
};

Chart.defaultProps = {
  data: [],
};

export default Chart;
