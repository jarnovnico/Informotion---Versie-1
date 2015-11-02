
$( "#amsterdam" ).click(function() {
  if($('#another-element:visible').length) {
    $('#another-element').hide();
  } else {
    $('#another-element').show();
  }
  var tlgrafiek = new TimelineMax();
  
  tlgrafiek.from('#another-element', 1, {
    opacity: 0,
    y: 200,
    ease: Power1.easeInOut
  });
});

// Grafiek
var dataArray = [20, 40, 50, 60];

var width = 400;
var height = 250;

var widthScale = d3.scale.linear()
  .domain([0, 60])
  .range([0, width]);

var color = d3.scale.linear()
  .domain([0, 60])
  .range(['red', 'blue']);

var axis = d3.svg.axis()
  .ticks(5)
  .scale(widthScale);

var canvas = d3.select('#grafiek')
  .attr('width', width)
  .attr('height', height)
  .append('g')
  .attr('transform', 'translate(20, 0)');

var bars = canvas.selectAll('rect')
  .data(dataArray)
  .enter()
    .append('rect')
    .attr('width', function(d) { return widthScale(d); })
    .attr('height', 50)
    .attr('fill', function(d) { return color(d); })
    .attr('y', function(d, i) { return i * 50});

canvas.append('g')
  .attr('transform', 'translate(0, 210)')
  .call(axis);