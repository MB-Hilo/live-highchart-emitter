var emitter = emitter.connect({
    secure: true
}); 
var key = 'HqYEYvKSgPXHe-yG3zp-YySG2-n03jHV';
var charts = {}, chart = {}, chart2 = {};

var dataSources = [
    {id:"singapore", container:"container", name:"Singapore"},
    {id:"vietnam", container:"container2", name:"Vietnam"},
    {id:"indonesia", container:"container3", name:"Indonesia"},
    {id:"thailand", container:"container4", name:"Thailand"},
    {id:"phillippines", container:"container5", name:"Phillippines"},
    {id:"malayasia", container:"container6", name:"Malayasia"},
    {id:"myanmar", container:"container7", name:"Myanmar"},
];

//charts["singapore"] = chart;

emitter.on('connect', function(){
    // once we're connected, subscribe to the 'chat' channel
    console.log('emitter: connected');
    emitter.subscribe({
        key: key,
        channel: "charting",
        last: 5
    });

})

// on every message, update chart
emitter.on('message', function(chartData){
    //convert back to JSON
    chartData = JSON.parse(chartData.asString());
    
    // log that we've received a message
    console.log('emitter: received ' + chartData);

    //get chart ID from data
    var chartID = chartData.id;

    //init reference to chart
    var thisChart = charts[chartID];
    console.log("this chart",thisChart);

    //add a point to the chart from emitter data
    var series = thisChart.series[0];
    var x = chartData.date, // x-axis is current time
        y = parseFloat(chartData.dataPoint); //y-axis is a random mocked number
    series.addPoint([x, y], true, true);
    
});

//emit mock data, this would be coming from you server and is for demonstration only
function emitData(){

    dataSources.forEach(function(source){
        emitter.publish({
                    key: key,
                    channel: "charting",
                    ttl: 1200,
                    message: JSON.stringify({
                        name: 'regional mock server data',
                        id: source.id,
                        dataPoint: Math.round(Math.random() * 100),
                        date: (new Date()).getTime()
                    })
        });
    });

    setTimeout(emitData, 1000);
}

(function(){
    setTimeout(emitData, 3000);
})();

