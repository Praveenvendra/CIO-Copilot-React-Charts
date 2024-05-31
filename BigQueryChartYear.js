import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const MyStackedAreaChart = () => {
  useEffect(() => {
    // Initialize the chart
    const myChart = echarts.init(document.getElementById('MyStackedAreaChart'));

    // Your option object with updated data
    const option = {
      title: {
        // text: 'Stacked Line'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['Data Transfer Service', 'BI Engine', 'Storage', 'Reservations', 'Data QnA']
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
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['2023', '2022', '2021', '2020', '2019']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Data Transfer Service',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [750, 1150, 900, 1300, 1050]
        },
        {
          name: 'BI Engine',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [1100, 1250, 1000, 1350, 1200]
        },
        {
          name: 'Storage',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [950, 1200, 850, 1400, 1100]
        },
        {
          name: 'Reservations',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [1150, 1300, 950, 1450, 1250]
        },
        {
          name: 'Data QnA',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [1300, 1450, 1100, 1500, 1350]
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

  return <div id="MyStackedAreaChart" style={{ width: '95vw', height: '95vh' }}></div>;
};

export default MyStackedAreaChart;
