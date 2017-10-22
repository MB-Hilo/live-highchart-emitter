$(document).ready(function () {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    dataSources.forEach(function(source){
        chart = newChart(source.container, source.name,[{
                    name: source.name,
                    data: initMockData()
                }]);

        charts[source.id] = chart;
    });

    function initMockData(){
        // generate an array of random data
                    
                    var data = [],
                        time = (new Date()).getTime(),
                        i;

                    for (i = -19; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.round(Math.random() * 100)
                        });
                    }

                    return data;
    }

    function newChart(containerID, chartTitle, series){
        console.log("new chart");

         return Highcharts.chart(containerID, {
            chart: {
                type: 'spline',
                animation: Highcharts.svg, // don't animate in old IE
                marginRight: 10,
                events: {
                        load: function () {

                        // // set up the updating of the chart each second
                        // var series = this.series[0];
                        // setInterval(function () {
                        //     var x = (new Date()).getTime(), // current time
                        //         y = Math.random();
                        //     series.addPoint([x, y], true, true);
                        // }, 1000);
                    }
                }
            },
            title: {
                text: chartTitle,
                className: 'highcharts-color-0'
            },
            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150,
                className: 'highcharts-color-1'
            },
            yAxis: {
                title: {
                    text: 'Ride requests'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#00b13f'
                }],
                className: 'highcharts-color-1',
            },
            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + '</b><br/>' +
                        Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                        Highcharts.numberFormat(this.y, 2);
                }
            },
            legend: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            series: series
        });
     }

    console.log(chart.series);
});