import React, { useEffect } from 'react';
import * as echarts from 'echarts';


const StackedBarChart = () => {
    useEffect(() => {
        const chartContainer = document.getElementById('stacked-bar-chart');
        const chart = echarts.init(chartContainer);

        const rawData = [
            [600, 540, 400, 720, 600, 420, 470, 420, 530, 460, 380, 420, 450, 470],
            [560, 650, 326, 399, 426, 636, 478, 350, 460, 380, 490, 530, 590, 620],
            [520, 463, 265, 370, 453, 500, 640, 480, 580, 690, 420, 360, 320, 370],
            [396, 450, 750, 850, 650, 710, 600, 590, 630, 540, 450, 490, 550, 600],
            [630, 426, 453, 500, 523, 555, 623, 520, 540, 610, 580, 550, 530, 590]
        ];

        const totalData = [];
        for (let i = 0; i < rawData[0].length; ++i) {
            let sum = 0;
            for (let j = 0; j < rawData.length; ++j) {
                sum += rawData[j][i];
            }
            totalData.push(sum);
        }

        const series = [
            'Data Processing',
            'Data Analysis',
            'Storage',
            'Database Management',
            'Network Security'
        ].map((name, sid) => {
            return {
                name,
                type: 'bar',
                stack: 'stack',
                barWidth: '60%',
                label: {
                    show: true,
                    formatter: (params) => params.value // Display exact values
                },
                data: rawData[sid]
            };
        });

        const option = {
            legend: {
                show: true,
                orient: 'horizontal',
                top: 10, // Move the legend down by 3 pixels from the top
                padding: [0, 0, 4, 0],
                left: 'center',
                selectedMode: false,
                itemWidth: 20,
                itemHeight: 20,
                itemGap: 10,
            },
            grid: {
                left: 100,
                right: 100,
                top: 50,
                bottom: 50
            },
            yAxis: {
                type: 'value'
            },
            xAxis: {
                type: 'category',
                data: ['2023-Apr', '2023-Mar', '2023-Feb', '2023-Jan', '2022-Dec', '2022-Nov', '2022-Oct', '2022-Sep', '2022-Aug', '2022-July', '2022-June', '2022-May']
            },
            series
        };

        chart.setOption(option);

        // Cleanup
        return () => {
            chart.dispose();
        };
    }, []);

    return <div id="stacked-bar-chart" style={{ width: '95vw', height: '95vh' }} />;
};

export default StackedBarChart;
