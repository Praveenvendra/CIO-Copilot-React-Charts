import React from 'react';
import ReactEcharts from 'echarts-for-react';

const BarChartComponent1 = () => {
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: ['GPT-4', 'DALL-E', 'Codex', 'Embeddings']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'value'
      }
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: {
          show: false
        },
        data: [
          '2023-May', '2023-Apr', '2023-Mar', '2023-Feb', 
          '2023-Jan', '2022-Dec', '2022-Nov', '2022-Oct', 
          '2022-Sep', '2022-Aug', '2022-July', '2022-June'
        ]
      }
    ],
    series: [
      {
        name: 'GPT-4',
        type: 'bar',
        label: {
          show: true,
          position: 'inside'
        },
        emphasis: {
          focus: 'series'
        },
        data: [700, 800, 900, 950, 600, 750, 850, 900, 950, 980, 870, 990]
      },
      {
        name: 'DALL-E',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true
        },
        emphasis: {
          focus: 'series'
        },
        data: [650, 700, 800, 850, 900, 950, 1000, 930, 940, 910, 920, 970]
      },
      {
        name: 'Codex',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'left'
        },
        emphasis: {
          focus: 'series'
        },
        data: [600, 620, 700, 750, 800, 850, 900, 870, 880, 850, 860, 920]
      },
      {
        name: 'Embeddings',
        type: 'bar',
        stack: 'Total',
        label: {
          show: true,
          position: 'left'
        },
        emphasis: {
          focus: 'series'
        },
        data: [580, 620, 690, 720, 750, 800, 850, 820, 830, 800, 810, 870]
      }
    ]
  };

  return (
    <div style={{ padding: '50px' }}>
      {/* <h2>AI Product Usage Over Time</h2> */}
      <ReactEcharts option={option} style={{ height: '820px', width: '100%' }} />
    </div>
  );
};

export default BarChartComponent1;
