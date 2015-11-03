$( "#block4" ).click(function() {
  if($('#deel4:visible').length) {
    $('#deel4').hide();
  } else {
    $('#deel4').show();
  }
});

$( "#amsterdam4" ).click(function() {
  if($('#another-element4:visible').length) {
    $('#another-element4').hide();
  } else {
    $('#another-element4').show();
  }
  var tlgrafiek4 = new TimelineMax();
  
  tlgrafiek4.from('#another-element4', 1, {
    opacity: 0,
    y: 200,
    ease: Power1.easeInOut
  });
});

// Grafiek
var dataArray = [
    {
      "prijs":65,
      "soortprijs":"goedkoopste"
    },
    {
      "prijs":250.49,
      "soortprijs":"gemiddelde"
    },
    {
      "prijs":1250,
      "soortprijs":"duurste"
    }
  ];

var width = 400;
var height = 250;

var widthScale = d3.scale.linear()
  .domain([0, 1250])
  .range([0, width]);

var color = d3.scale.linear()
  .domain([ 0, 1250])
  .range(['lime', 'tomato']);

var axis = d3.svg.axis()
  .ticks(6)
  .scale(widthScale);

var canvas = d3.select('#grafiek4')
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

// pak de datum uit data en append die in tekst
var soortprijs = canvas.selectAll('text')
  .data(dataArray)
  .enter()
    .append('text')
    .text(function(d) { return d.soortprijs }) // tekst = functie return datum
    .attr('y', function(d, i){ return i * 50;}) // index van date 21 keer verticaal verdelen.
    .attr('transform', 'translate(6, 30)'); // margins bij de datums zodat ze netjes in midden van balk staan.

canvas.append('g')
  .attr('transform', 'translate(0, 160)')
  .call(axis);