$( "#block9" ).click(function() {
  if($('#deel9:visible').length) {
    $('#deel9').hide();
  } else {
    $('#deel9').show();
  }
});

$( "#amsterdam9" ).click(function() {
  if($('#another-element9:visible').length) {
    $('#another-element9').hide();
  } else {
    $('#another-element9').show();
  }
  var tlgrafiek = new TimelineMax();
  
  tlgrafiek.from('#another-element9', 1, {
    opacity: 0,
    y: 200,
    ease: Power1.easeInOut
  });
});

// Grafiek
var dataArray = [
    {
      "prijs":60,
      "soortprijs":"goedkoopste"
    },
    {
      "prijs":185,
      "soortprijs":"gemiddelde"
    },
    {
      "prijs":750,
      "soortprijs":"duurste"
    }
  ];

var width = 400;
var height = 250;

var widthScale = d3.scale.linear()
  .domain([0, 750])
  .range([0, width]);

var color = d3.scale.linear()
  .domain([ 0, 750])
  .range(['lime', 'tomato']);

var axis = d3.svg.axis()
  // .ticks(6)
  .scale(widthScale);

var canvas = d3.select('#grafiek9')
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