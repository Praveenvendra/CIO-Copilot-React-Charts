import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const MyChartComponent = () => {
  useEffect(() => {
    // Initialize the chart
    const myChart = echarts.init(document.getElementById('myChart'));


    // Your other configuration objects...

    const getRandomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const seriesData = [
      Array.from({ length: 5 }, () => getRandomNumber(700, 1500)),
      Array.from({ length: 5 }, () => getRandomNumber(700, 1500)),
      Array.from({ length: 5 }, () => getRandomNumber(700, 1500)),
      Array.from({ length: 5 }, () => getRandomNumber(700, 1500)),
      Array.from({ length: 5 }, () => getRandomNumber(700, 1500))
    ];

    const option = {
      // Your ECharts option object...
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['Data Processing', 'Data Analysis', 'Storage', 'Database Management','Network Security'],
        top : 10,

      },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar', 'stack'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      xAxis: [
        {
          type: 'category',
          axisTick: { show: false },
          data: ['2023', '2022', '2021', '2020', '2019']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: 
      [
        {
          name: 'Data Processing',
          type: 'bar',
          barGap: 0,
        //   label: labelOption,
          emphasis: {
            focus: 'series'
          },
          
          data: seriesData[0]
        },
        {
          name: 'Data Analysis',
          type: 'bar',
        //   label: labelOption,
          emphasis: {
            focus: 'series'
          },
        data: seriesData[1]
        },
        {
          name: 'Storage',
          type: 'bar',
        //   label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: seriesData[2]
        },
        {
          name: 'Database Management',
          type: 'bar',
        //   label: labelOption,
          emphasis: {
            focus: 'series'
          },
          data: seriesData[3]
        },
        {
          name: 'Network Security',
          type: 'bar',
        //   label: labelOption,
          emphasis: {
            focus: 'series'
          },
         data: seriesData[4]
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

  return <div id="myChart" style={{ width: '100vw', height: '100vh' }}></div>;
};

export default MyChartComponent;
