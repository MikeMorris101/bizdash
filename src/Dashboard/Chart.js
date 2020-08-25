import React, { useContext } from 'react';
import { Card } from './Card';
import { chartData } from './Data';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ThemeContext } from './Dashboard';
import { darkerGrey, lightGrey, darkGrey } from './GlobalStyle';

function getOptions(dark) {
  return {
    chart: {
      height: '360px',
      type: 'column',
      backgroundColor: dark ? darkerGrey : 'white',
      style: {
        fontFamily: `'Blinker', sans-serif`,
      },
    },
    title: {
      text: 'Revenue by Product',
      style: {
        color: dark ? lightGrey : 'black',
      },
    },
    xAxis: {
      labels: {
        style: {
          color: dark ? lightGrey : 'black',
        },
      },
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      min: 0,
      gridLineColor: dark ? 'grey' : lightGrey,
      reversedStacks: false,
      title: {
        text: 'Billions of Dollars',
        style: {
          color: dark ? lightGrey : 'black',
        },
      },
      labels: {
        style: {
          color: dark ? lightGrey : 'black',
        },
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: 'bold',
          color:
            // theme
            (Highcharts.defaultOptions.title.style &&
              Highcharts.defaultOptions.title.style.color) ||
            'gray',
        },
      },
    },
    legend: {
      itemStyle: {
        color: dark ? lightGrey : 'black',
      },
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor || 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false,
    },
    tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
      backgroundColor: dark ? darkerGrey : 'white',
      style: {
        color: dark ? lightGrey : 'black',
      },
    },
    plotOptions: {
      series: {
        borderWidth: 0,
      },
      column: {
        stacking: 'normal',
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: chartData,
  };
}

export function Chart() {
  const [theme, setTheme] = useContext(ThemeContext);
  const dark = theme === 'dark';
  return (
    <Card height={400} dark={dark}>
      <HighchartsReact highcharts={Highcharts} options={getOptions(dark)} />
    </Card>
  );
}
