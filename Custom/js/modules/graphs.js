var graphData = {
    graphs: [{
        name: "blah",
        pathLine: "M10,280 L60,310 L110,360 L160 330",
        pathArea: "M10,380, L10,280 L60,310 L110,360 L160,330 L160,380",
        points: [
            {
                x: 10,
                y: 280
            },
            {
                x: 60,
                y: 310
            },
            {
                x: 110,
                y: 360
            },
            {
                x: 160,
                y: 330
            }
        ]
    }]
}

var myVueObj = new Vue({
    el: "#app",
    data: graphData
})