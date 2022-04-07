/**
 * This is the Line Chart Component which provides the visual trending view of expenses by days
 * This component is able to provide visuals multiple data (Expenses by Category) as well as the total expenses
 * The component accepts two props from the calling parents components which are days (X-axis) and expenses (Y-axis)
 **/

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register( ...registerables);


// background colors for lines in chart
const colors = [
  "#742774", "rgba(75,192,192,1)", "tomato", "dodgerblue", "crimson"
]


// prepare Data: fill missing values, order data
function prepareData (data, days) {
  let values = Array(days.length).fill(0);

  data.forEach (d => {
    const idx = days.indexOf(new Date(d.date).toLocaleDateString());
    values[idx] = d.amount;
  });
  return values;
}


// create and prepare datasets for the line chart
function createDataSets (expenses, days) {

  let datasets = [];
  let i = 0;

  for (let [key, value] of Object.entries(expenses)) {
    datasets.push ({
      label: key,
      data: prepareData(value, days),
      borderColor: colors[i]
    });
    i++;
  }

  return datasets;
}


/**
 * Plotting the Line Chart based on the data received from props
 * props:
 *  expenses  : A single object or an array of expense objects
 *            : expenses will be a key-value pair object (key: expenseType, value: array of expense object)
 *  Days      : Array of dates starting from specified start date to end datae
 **/
function LineChart ({expenses, days}) {

  const [ data, setData ] = useState(null);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    if (days && days !== null) {
      setData ({
        labels: days,
        datasets : createDataSets(expenses, days)
      });
    }
  }, [days, expenses]);

  useEffect(() => {
    setLoading(false);
  }, [data]);

  return (
    <div>
      {
        loading
          ? "loading"
          : (data && <Line data={data}/>)
      }
    </div>
  )
}

export default LineChart;
