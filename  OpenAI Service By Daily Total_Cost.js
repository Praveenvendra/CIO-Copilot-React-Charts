import React, { useEffect } from 'react';
import * as echarts from 'echarts';

const MyBarChart = () => {
  useEffect(() => {
    const posList = [
      'left', 'right', 'top', 'bottom', 'inside', 'insideTop', 'insideLeft',
      'insideRight', 'insideBottom', 'insideTopLeft', 'insideTopRight',
      'insideBottomLeft', 'insideBottomRight'
    ];

    const app = {
      configParameters: {
        rotate: { min: -90, max: 90 },
        align: { options: { left: 'left', center: 'center', right: 'right' } },
        verticalAlign: { options: { top: 'top', middle: 'middle', bottom: 'bottom' } },
        position: {
          options: posList.reduce((map, pos) => {
            map[pos] = pos;
            return map;
          }, {})
        },
        distance: { min: 0, max: 100 }
      },
      config: {
        rotate: 90,
        align: 'left',
        verticalAlign: 'middle',
        position: 'insideBottom',
        distance: 15,
        onChange: function () {
          const labelOption = {
            rotate: app.config.rotate,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            position: app.config.position,
            distance: app.config.distance
          };
          myChart.setOption({
            series: [
              { label: labelOption },
              { label: labelOption },
              { label: labelOption },
              { label: labelOption }
            ]
          });
        }
      }
    };

    const labelOption = {
      show: true,
      position: app.config.position,
      distance: app.config.distance,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      rotate: app.config.rotate,
      formatter: '{c}  {name|{a}}',
      fontSize: 16,
      rich: {
        name: {}
      }
    };

    const myChart = echarts.init(document.getElementById('MyBarChart'));
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
      },
      legend: {
        data: ['GPT-4', 'DALL-E', 'Codex', 'Embeddings']
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
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'GPT-4',
          type: 'bar',
          barGap: 0,
          label: labelOption,
          emphasis: { focus: 'series' },
          data: [320, 332, 301, 334, 390, 255, 300]
        },
        {
          name: 'DALL-E',
          type: 'bar',
          label: labelOption,
          emphasis: { focus: 'series' },
          data: [220, 182, 191, 234, 290, 200, 100]
        },
        {
          name: 'Codex',
          type: 'bar',
          label: labelOption,
          emphasis: { focus: 'series' },
          data: [150, 232, 201, 154, 190, 150, 200]
        },
        {
          name: 'Embeddings',
          type: 'bar',
          label: labelOption,
          emphasis: { focus: 'series' },
          data: [98, 77, 101, 99, 40, 126, 80]
        }
      ]
    };

    myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return <div id="MyBarChart" style={{ width: '95vw', height: '95vh' }}></div>;
};

export default MyBarChart;
