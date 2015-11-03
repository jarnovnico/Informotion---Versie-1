$( "#block3" ).click(function() {
  if($('#deel3:visible').length) {
    $('#deel3').hide();
  } else {
    $('#deel3').show();
  }
});

$( "#amsterdam3" ).click(function() {
  if($('#another-element3:visible').length) {
    $('#another-element3').hide();
  } else {
    $('#another-element3').show();
  }
  var tlgrafiek = new TimelineMax();
  
  tlgrafiek.from('#another-element3', 1, {
    opacity: 0,
    y: 200,
    ease: Power1.easeInOut
  });
});

// Grafiek
var dataArray = [
    {
      "prijs":90,
      "soortprijs":"goedkoopste"
    },
    {
      "prijs":243.10,
      "soortprijs":"gemiddelde"
    },
    {
      "prijs":830,
      "soortprijs":"duurste"
    }
  ];

var width = 400;
var height = 250;

var widthScale = d3.scale.linear()
  .domain([0, 830])
  .range([0, width]);

var color = d3.scale.linear()
  .domain([ 0, 830])
  .range(['lime', 'tomato']);

var axis = d3.svg.axis()
  // .ticks(5)
  .scale(widthScale);

var canvas = d3.select('#grafiek3')
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
    .attr('y', function(d, i){ return i * 50;} ) // index van date 21 keer verticaal verdelen.
    .attr('transform', 'translate(6, 30)'); // margins bij de datums zodat ze netjes in midden van balk staan.

canvas.append('g')
  .attr('transform', 'translate(0, 160)')
  .call(axis);