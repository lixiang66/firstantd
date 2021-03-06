import React from 'react';

import ReactEcharts from 'echarts-for-react';
import data from '../models/mockdata.json';
import '../../node_modules/echarts/map/js/china';

class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state={option:this.getOption()};
    } 
    getOption(){ 
        const weiboData = data.map(function (serieData, idx) {
            var px = serieData[0] / 1000;
            var py = serieData[1] / 1000;
            var res = [[px, py]];

            for (var i = 2; i < serieData.length; i += 2) {
                var dx = serieData[i] / 1000;
                var dy = serieData[i + 1] / 1000;
                var x = px + dx;
                var y = py + dy;
                res.push([x.toFixed(2), y.toFixed(2), 1]);

                px = x;
                py = y;
            }
            return res;
        });

        return {
            backgroundColor: '#404a59',
            title : {
                text: '在线用户分布图',
                subtext: 'test',
                sublink: 'http://www.thinkgis.cn/public/sina',
                left: 'center',
                top: 'top',
                textStyle: {
                    color: '#fff'
                }
            },
            tooltip: {},
            legend: {
                left: 'left',
                data: ['强', '中', '弱'],
                textStyle: {
                    color: '#ccc'
                }
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            series: [{
                name: '弱',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: 1,
                large: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 2,
                        shadowColor: 'rgba(37, 140, 249, 0.8)',
                        color: 'rgba(37, 140, 249, 0.8)'
                    }
                },
                data: weiboData[0]
            }, {
                name: '中',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: 1,
                large: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 2,
                        shadowColor: 'rgba(14, 241, 242, 0.8)',
                        color: 'rgba(14, 241, 242, 0.8)'
                    }
                },
                data: weiboData[1]
            }, {
                name: '强',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbolSize: 1,
                large: true,
                itemStyle: {
                    normal: {
                        shadowBlur: 2,
                        shadowColor: 'rgba(255, 255, 255, 0.8)',
                        color: 'rgba(255, 255, 255, 0.8)'
                    }
                },
                data: weiboData[2]
            }]
        };
    }

    render() {
          return (
          <ReactEcharts ref='echarts_react'
                        option={this.state.option} 
                        style={{height: 600,width:`100%`,margin:`auto`}} />
      );
    }
};
MapComponent.propTypes = {
};
export default MapComponent;
