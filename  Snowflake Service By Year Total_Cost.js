import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const MyStepLineChart = () => {
  useEffect(() => {
    // Initialize the chart
    const myChart = echarts.init(document.getElementById('MyStepLineChart'));

    // Function to generate random values within the specified range
    const generateRandomData = (min, max, count) => {
      const data = [];
      for (let i = 0; i < count; i++) {
        data.push(Math.floor(Math.random() * (max - min + 1)) + min);
      }
      return data;
    };

    // Generate random data for each series
    const seriesDataCount = 5; // Number of data points in each series
    const minValue = 300;
    const maxValue = 1500;

    const option = {
      title: {
        // text: 'Step Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Virtual Warehouse', 'Data Sharing', 'Snowpipe', 'Data Marketplace', 'Streams'],
        top : 10
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        data: ['2023', '2022', '2021', '2020', '2019']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Virtual Warehouse',
          type: 'line',
          step: 'start',
          data: generateRandomData(minValue, maxValue, seriesDataCount)
        },
        {
          name: 'Data Sharing',
          type: 'line',
          step: 'middle',
          data: generateRandomData(minValue, maxValue, seriesDataCount)
        },
        {
          name: 'Snowpipe',
          type: 'line',
          step: 'end',
          data: generateRandomData(minValue, maxValue, seriesDataCount)
        },
        {
          name: 'Data Marketplace',
          type: 'line',
          step: 'end',
          data: generateRandomData(minValue, maxValue, seriesDataCount)
        },
        {
          name: 'Streams',
          type: 'line',
          step: 'end',
          data: generateRandomData(minValue, maxValue, seriesDataCount)
        }
      ]
    };
    // Set the option to the chart
    myChart.setOption(option);

    // Clean up on unmount
    return () => {
      myChart.dispose();
    };
  }, []); // Empty dependency array to run the effect only once

  return <div id="MyStepLineChart" style={{ width: '95vw', height: '95vh' }}></div>;
};

export default MyStepLineChart;
