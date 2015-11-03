$( "#block6" ).click(function() {
  if($('#deel6:visible').length) {
    $('#deel6').hide();
  } else {
    $('#deel6').show();
  }
});

$( "#amsterdam6" ).click(function() {
  if($('#another-element6:visible').length) {
    $('#another-element6').hide();
  } else {
    $('#another-element6').show();
  }
  var tlgrafiek = new TimelineMax();
  
  tlgrafiek.from('#another-element6', 1, {
    opacity: 0,
    y: 200,
    ease: Power1.easeInOut
  });
});

// Grafiek
var dataArray = [
    {
      "prijs":24,
      "soortprijs":"goedkoopste"
    },
    {
      "prijs":160,
      "soortprijs":"gemiddelde"
    },
    {
      "prijs":1001,
      "soortprijs":"duurste"
    }
  ];

var width = 400;
var height = 250;

var widthScale = d3.scale.linear()
  .domain([0, 1001])
  .range([0, width]);

var color = d3.scale.linear()
  .domain([ 0, 1001])
  .range(['lime', 'tomato']);

var axis = d3.svg.axis()
  // .ticks(6)
  .scale(widthScale);

var canvas = d3.select('#grafiek6')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(5, 0)');

var bars = canvas.selectAll('rect')
  .data(dataArray)
  .enter()
    .append('rect')
    .attr('width', function(d) { return widthScale(d.prijs); })
    .attr('height', 50)
    .attr('fill', function(d) { return color(d.prijs); })
    .attr('y', function(d, i) { return i * 50;});

var soortprijs = canvas.selectAll('text')
  .data(dataArray)
  .enter()
    .append('text')
    .text(function(d) { return d.soortprijs; })
    .attr('y', function(d, i){ return i * 50;})
    .attr('transform', 'translate(6, 30)');

canvas.append('g')
  .attr('transform', 'translate(0, 160)')
  .call(axis);