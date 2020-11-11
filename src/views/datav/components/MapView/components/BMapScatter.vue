<template>
    <div  class="bmap-vcharts">
      <ve-bmap
        height="100%"
        :settings="chartSettings"
        :title="title"
        :tooltip="tooltip"
        :series="series"
      ></ve-bmap>
    </div>
</template>

<script>
import { resultData } from './map';

export default {
  name: 'b-map-scatter',
  data() {
    return {
      title: {
        text: '外卖销售数据大屏',
        subtext: '销售趋势统计',
        sublink: 'http://www.hao6.website:999',
        left: 'center',
      },
      tooltip: {},
      series: [
        {
          name: '销售额',
          type: 'scatter',
          coordinateSystem: 'bmap' /* 坐标系统为bmap */,
          data: resultData,
          encode: {
            /* 指定数据中的某项，比如指定value，指定第2项 */
            value: 2,
          },
          itemStyle: {
            color: 'purple',
          },
          /* 动态设置地图中图标的大小 */
          symbolSize(val) {
            return val[2] / 10;
          },
          /* 默认就显示 */
          label: {
            show: false,
            position: 'right',
            fontSize: '50%',
            // formatter: '{b}'/* 取name最为显示的lable */
            formatter(v) {
              // console.log('v', v);
              return `${v.name}-${v.data.value[2]}`;
            },
          },
          /* 默认高亮的时候显示 */
          emphasis: {
            label: {
              show: true,
            },
          },
        },
        {
          name: 'Top 10',
          type: 'effectScatter' /* 带波纹的散点图 */,
          coordinateSystem: 'bmap',
          data: resultData
            .sort((current, next) => next.value[2] - current.value[2])
            .slice(0, 10),
          encode: {
            value: 2,
          },
          itemStyle: {
            color: 'green',
            shadowBlur: 10,
            shadowColor: '#333',
          },
          symbolSize(val) {
            return val[2] / 10;
          },
          label: {
            show: true,
            position: 'right',
            fontSize: '50%',
            formatter(v) {
              return `${v.name} - ${v.data.value[2]}`;
            },
          },
          hoverAnimation: true /* 开启悬浮时的动画效果 */,
          rippleEffect: {
            /* 波纹样式 */
            brushType: 'stroke', /* 描绘的效果 */
          },
          // emphasis: {
          //   label: {
          //     show: false,
          //     fontSize: '50%',
          //     position: 'right',
          //     formatter (v) {
          //       return `${v.name} - ${v.data.value[2]}`
          //     },
          //   }
          // }
        },
      ],
      chartSettings: {
        key: '',
        bmap: {
          key: 'G1LFyjrNGIkns5OfpZnrCGAKxpycPLwb',
          center: [104.114129, 37.550339] /* 中心点 */,
          zoom: 5,
          roam: false,
          mapStyle: {
            // styleId: 'ae2291f853c26c030656ffe33e6fbc4d',
            styleJson: [
              {
                featureType: 'water',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1',
                },
              },
              {
                featureType: 'land',
                elementType: 'all',
                stylers: {
                  color: '#f3f3f3',
                },
              },
              {
                featureType: 'railway',
                elementType: 'all',
                stylers: {
                  visibility: 'off',
                },
              },
              {
                featureType: 'highway',
                elementType: 'all',
                stylers: {
                  color: '#fdfdfd',
                },
              },
              {
                featureType: 'highway',
                elementType: 'labels',
                stylers: {
                  visibility: 'off',
                },
              },
              {
                featureType: 'arterial',
                elementType: 'geometry',
                stylers: {
                  color: '#fefefe',
                },
              },
              {
                featureType: 'arterial',
                elementType: 'geometry.fill',
                stylers: {
                  color: '#fefefe',
                },
              },
              {
                featureType: 'poi',
                elementType: 'all',
                stylers: {
                  visibility: 'off',
                },
              },
              {
                featureType: 'green',
                elementType: 'all',
                stylers: {
                  visibility: 'off',
                },
              },
              {
                featureType: 'subway',
                elementType: 'all',
                stylers: {
                  visibility: 'off',
                },
              },
              {
                featureType: 'manmade',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1',
                },
              },
              {
                featureType: 'local',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1',
                },
              },
              {
                featureType: 'arterial',
                elementType: 'labels',
                stylers: {
                  visibility: 'off',
                },
              },
              {
                featureType: 'boundary',
                elementType: 'all',
                stylers: {
                  color: '#fefefe',
                },
              },
              {
                featureType: 'building',
                elementType: 'all',
                stylers: {
                  color: '#d1d1d1',
                },
              },
              {
                featureType: 'label',
                elementType: 'labels.text.fill',
                stylers: {
                  color: '#999999',
                },
              },
            ],
          },
        },
      },
    };
  },
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .bmap-vcharts {
    width: 100%;
    height: 100%;
  }
</style>
