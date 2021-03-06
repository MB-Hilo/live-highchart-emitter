$(document).ready(function () {
    Highcharts.setOptions({
        global: {
            useUTC: false
        }
    });

    dataSources.forEach(function(source){
        chart = newChart(source.id, source.name,[{
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


     // Prepare demo data
                // var data = [{ 'hc-key': 'ir', value: 0 },
                //     { 'hc-key': 'ph', value: 1 },
                //     { 'hc-key': 'sa', value: 2 },
                //     { 'hc-key': 'jp', value: 3 },
                //     { 'hc-key': 'th', value: 4 },
                //     { 'hc-key': 'om', value: 5 },
                //     { 'hc-key': 'ye', value: 6 },
                //     { 'hc-key': 'in', value: 7 },
                //     { 'hc-key': 'kr', value: 8 },
                //     { 'hc-key': 'bd', value: 9 },
                //     { 'hc-key': 'sp', value: 10 },
                //     { 'hc-key': 'cn', value: 11 },
                //     { 'hc-key': 'bh', value: 12 },
                //     { 'hc-key': 'mm', value: 13 },
                //     { 'hc-key': 'id', value: 14 },
                //     { 'hc-key': 'sg', value: 15 },
                //     { 'hc-key': 'ru', value: 16 },
                //     { 'hc-key': 'sh', value: 17 },
                //     { 'hc-key': 'my', value: 18 },
                //     { 'hc-key': 'az', value: 19 },
                //     { 'hc-key': 'am', value: 20 },
                //     { 'hc-key': 'vn', value: 21 },
                //     { 'hc-key': 'tj', value: 22 },
                //     { 'hc-key': 'uz', value: 23 },
                //     { 'hc-key': 'tl', value: 24 },
                //     { 'hc-key': 'kh', value: 25 },
                //     { 'hc-key': 'bt', value: 26 },
                //     { 'hc-key': 'ge', value: 27 },
                //     { 'hc-key': 'kz', value: 28 },
                //     { 'hc-key': 'il', value: 29 },
                //     { 'hc-key': 'sy', value: 30 },
                //     { 'hc-key': 'jo', value: 31 },
                //     { 'hc-key': 'tm', value: 32 },
                //     { 'hc-key': 'cnm', value: 33 },
                //     { 'hc-key': 'mn', value: 34 },
                //     { 'hc-key': 'kw', value: 35 },
                //     { 'hc-key': 'iq', value: 36 },
                //     { 'hc-key': 'ae', value: 37 },
                //     { 'hc-key': 'la', value: 38 },
                //     { 'hc-key': 'pk', value: 39 },
                //     { 'hc-key': 'jk', value: 40 },
                //     { 'hc-key': 'qa', value: 41 },
                //     { 'hc-key': 'tr', value: 42 },
                //     { 'hc-key': 'bn', value: 43 },
                //     { 'hc-key': 'af', value: 44 },
                //     { 'hc-key': 'kp', value: 45 },
                //     { 'hc-key': 'lb', value: 46 },
                //     { 'hc-key': 'nc', value: 47 },
                //     { 'hc-key': 'cy', value: 48 },
                //     { 'hc-key': 'tw', value: 49 },
                //     { 'hc-key': 'np', value: 50 },
                //     { 'hc-key': 'lk', value: 51 },
                //     { 'hc-key': 'kg', value: 52 }];

                    
                // // Initiate the chart
                // $('#container').highcharts('Map', {
                    
                //     title : {
                //         text : 'Highmaps basic demo'
                //     },

                //     subtitle : {
                //         text : 'Source map: <a href="https://code.highcharts.com/mapdata/custom/asia.js">custom/asia</a>'
                //     },

                //     mapNavigation: {
                //         enabled: true,
                //         buttonOptions: {
                //             verticalAlign: 'bottom'
                //         }
                //     },

                //     colorAxis: {
                //         min: 0
                //     },

                //     series : [{
                //         data : data,
                //         mapData: Highcharts.maps['custom/asia'],
                //         joinBy: 'hc-key',
                //         name: 'Random data',
                //         states: {
                //             hover: {
                //                 color: '#a4edba'
                //             }
                //         },
                //         dataLabels: {
                //             enabled: true,
                //             format: '{point.name}'
                //         }
                //     }]
                // });

    console.log(chart.series);
});