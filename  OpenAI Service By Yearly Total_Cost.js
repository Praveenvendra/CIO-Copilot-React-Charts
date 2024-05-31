import React from 'react';
import ReactEcharts from 'echarts-for-react';

const BarChartComponent1 = () => {
  const option = {
    legend: {
      data: ['GPT-4', 'DALL-E', 'Codex', 'Embeddings'],
      top: '15'
    },
    tooltip: {},
    dataset: {
      dimensions: ['year', 'GPT-4', 'DALL-E', 'Codex', 'Embeddings'],
      source: [
        { year: '2020', 'GPT-4': 70.2, 'DALL-E': 65.4, 'Codex': 75.1, 'Embeddings': 68.3 },
        { year: '2021', 'GPT-4': 85.3, 'DALL-E': 78.9, 'Codex': 82.4, 'Embeddings': 77.5 },
        { year: '2022', 'GPT-4': 90.7, 'DALL-E': 85.6, 'Codex': 88.9, 'Embeddings': 82.1 },
        { year: '2023', 'GPT-4': 95.1, 'DALL-E': 92.3, 'Codex': 91.5, 'Embeddings': 89.0 },
        { year: '2024', 'GPT-4': 50.0, 'DALL-E': 45.0, 'Codex': 55.0, 'Embeddings': 48.0 }
      ]
    },
    xAxis: { type: 'category' },
    yAxis: {},
    series: [
      { type: 'bar', name: 'GPT-4' },
      { type: 'bar', name: 'DALL-E' },
      { type: 'bar', name: 'Codex' },
      { type: 'bar', name: 'Embeddings' }
    ]
  };

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <ReactEcharts option={option} style={{ height: '100%', width: '100%' }} />
    </div>
  );
};

export default BarChartComponent;
