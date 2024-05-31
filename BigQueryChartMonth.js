import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const MyStackedLineChart = () => {
  useEffect(() => {
    // Initialize the chart
    const myChart = echarts.init(document.getElementById('myStackedLineChart'));

    // Your option object
    const option = {
      title: {
        // text: 'Stacked Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Data Transfer Service', 'BI Engine', 'Storage', 'Reservations', 'Data QnA'],
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
        boundaryGap: false,
        data: ['2023-May', '2023-Apr', '2023-Mar', '2023-Feb', '2023-Jan', '2022-Dec', '2022-Nov', '2022-Oct', '2022-Sept', '2022-Aug', '2022-July', '2022-June']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'Data Transfer Service',
          type: 'line',
          stack: 'Total',
          data: [120, 100, 101, 134, 90, 230, 210, 450, 680, 520, 780, 610]
        },
        {
          name: 'BI Engine',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310, 580, 450, 780, 900, 720]
        },
        {
          name: 'Storage',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410, 700, 480, 600, 850, 690]
        },
        {
          name: 'Reservations',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320, 680, 720, 780, 900, 820]
        },
        {
          name: 'Data QnA',
          type: 'line',
          stack: 'Total',
          data: [820, 932, 901, 934, 1290, 1330, 1320, 980, 850, 940, 1050, 990]
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

  return <div id="myStackedLineChart" style={{ width: '95vw', height: '95vh' }}></div>;
};

export default MyStackedLineChart;
