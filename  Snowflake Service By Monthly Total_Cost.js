import React from 'react';
import ReactEcharts from 'echarts-for-react';

const dataVirtualWarehouse = [350, 420, 490, 520, 610, 580, 540, 590, 630, 720, 690, 700];
const dataDataSharing = [380, 450, 510, 560, 630, 600, 560, 610, 650, 740, 710, 720];
const dataSnowpipe = [300, 370, 440, 470, 560, 530, 490, 540, 580, 670, 640, 650];
const dataDataMarketplace = [310, 380, 450, 480, 570, 540, 500, 550, 590, 680, 650, 660];
const dataStreams = [320, 390, 460, 490, 580, 550, 510, 560, 600, 690, 660, 670];

const option = {
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  angleAxis: {},
  radiusAxis: {
    type: 'category',
    data: ['2023-May', '2023-Apr', '2023-Mar', '2023-Feb', '2023-Jan', '2022-Dec', '2022-Nov', '2022-Oct', '2022-Sep', '2022-Aug', '2022-Jul', '2022-Jun'],
    z: 10
  },
  polar: {},
  series: [
    {
      type: 'bar',
      data: dataVirtualWarehouse,
      coordinateSystem: 'polar',
      name: 'Virtual Warehouse',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: dataDataSharing,
      coordinateSystem: 'polar',
      name: 'Data Sharing',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: dataSnowpipe,
      coordinateSystem: 'polar',
      name: 'Snowpipe',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: dataDataMarketplace,
      coordinateSystem: 'polar',
      name: 'Data Marketplace',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: dataStreams,
      coordinateSystem: 'polar',
      name: 'Streams',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    }
  ],
  legend: {
    show: true,
    data: ['Virtual Warehouse', 'Data Sharing', 'Snowpipe', 'Data Marketplace', 'Streams']
  }
};

function PolarBarChartDemo() {
  return (
    <div style={{ padding: '50px' }}>
      <ReactEcharts option={option} style={{ height: '600px', width: '100%' }} />
    </div>
  );
}

export default PolarBarChartDemo;
