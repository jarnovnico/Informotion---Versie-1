$( "#tooltipButton" ).click(function() {
	if($('#tooltipWindow:visible').length) {
	  $('#tooltipWindow').hide();
	} else {
	  $('#tooltipWindow').show();
	}
});

$('#tooltipButton').click(function(){

	if ($.trim($(this).text()) === 'Hide legenda') {
	  $(this).text('Show legenda');
	} else {
	  $(this).text('Hide legenda');        
	}

	return false; 
});

document.getElementById('checkboxvuil').onclick = function() {
    if ( this.checked ) {
        console.log('ja vuil');
    } else {
        console.log('nee vuil');
    }
};

document.getElementById('checkboxgeld').onclick = function() {
    if ( this.checked ) {
        console.log('ja geld');
    } else {
        console.log('nee geld');
    }
};

$("#terugknop").click(function(event) {
	returnFromDetail.returnFromDetail();
});

var graphs = {
	clickEvent: function (entity) {	
		this.createGraph(entity)
		this.createGraph2(entity)
	},

	showSideBar: function () {
		var tlgrafiek = new TimelineMax();

	  	tlgrafiek.to('.stadsdeel__wrapper', 1, {
	    	right: 60,
	    	ease: Power1.easeInOut
	  	});
	},
	removeGraph: function () {
	  var tlgrafiek = new TimelineMax();

	  tlgrafiek.to('.graph svg', 2, {
	    opacity: 0,
	    x: 200,
	    ease: Power1.easeInOut,
	    onComplete:function() {
	    	removeSvg();
	    }
	  },"fight");
	  tlgrafiek.to('.graph2 svg', 2, {
	    opacity: 0,
	    x: 200,
	    ease: Power1.easeInOut,
	  },"fight");
	  tlgrafiek.to('.stadsdeel__wrapper', 1, {
	    	right: -2222,
	    	ease: Power1.easeInOut
	  });

	  function removeSvg () {
	  	d3.select(".graph svg")
					 .remove();

	  	d3.select(".graph2 svg")
			 .remove();
	};

	},
	createGraph2: function (entity) {
		for (var i = 0; i < graphData.schoonheidsgraden.length-1; i++) {
			if(graphData.schoonheidsgraden[i].citypart==entity.name) {
				var dataArray = graphData.schoonheidsgraden[i];
			}
		};
		var partColor=["#003E03","#006522","#008F06","#28CF2F","#2AFF00","#32FF5C","#8AD871"]

		var width = 400;
		var height = 370;

		var widthScale = d3.scale.linear()
		  .domain([0, 10])
		  .range([0, width]);

		var color = d3.scale.linear()
		  .domain([ 0, 10])
		  .range(['lime', 'tomato']);

		var axis = d3.svg.axis()

		  // .ticks(5)
		  .scale(widthScale);
		  

		var canvas2 = d3.select('.graph2').append("svg")
		  .attr('width', width)
		  .attr('height', height)
		  .append('g')
		  .attr('transform', 'translate(5, 0)');
		var t = -1;
		var bars = canvas2.selectAll('rect')
		  .data(dataArray.subparts)
		  .enter()
		    .append('rect')
		    .attr('width', function(d) { return widthScale(d.grade); })
		    .attr('height', 50)
		    .attr('fill', function() { t++; return partColor[t];})
		    .attr('y', function(d, i) { return i * 50;});

		// pak de datum uit data en append die in tekst
		var soortprijs = canvas2.selectAll('text')
		  .data(dataArray.subparts)
		  .enter()
		    .append('text')
		    .text(function(d) { return d.part }) // tekst = functie return datum
		    .attr('y', function(d, i){ return i * 50;} ) // index van date 21 keer verticaal verdelen.
		    .attr('transform', 'translate(6, 30)'); // margins bij de datums zodat ze netjes in midden van balk staan.

		canvas2.append('g')
		  .attr('transform', 'translate(0, -25)')
		  .call(axis);

		  var tlgrafiek = new TimelineMax();
  
		  tlgrafiek.from('.graph2 svg', 2, {
		    opacity: 0,
		    x: 200,
		    ease: Power1.easeInOut
		  });
	},

	// Grafiek
	createGraph: function (entity) {
		var dataArray = graphData.hotelData[entity.name];
		this.showSideBar();

		var width = 400;
		var height = 210;

		var widthScale = d3.scale.linear()
		  .domain([0, 100 + d3.max(dataArray, function(d){return d.prijs})])
		  .range([0, width]);

		var color = d3.scale.linear()
		  .domain([ 0, 100 + d3.max(dataArray, function(d){return d.prijs})])
		  .range(['lime', 'tomato']);

		var axis = d3.svg.axis()
		  // .ticks(5)
		  .scale(widthScale);

		var canvas = d3.select('.graph').append("svg")
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

		  var tlgrafiek = new TimelineMax();
  
		  tlgrafiek.from('.graph svg', 2, {
		    opacity: 0,
		    x: 200,
		    ease: Power1.easeInOut
		  });
	}
};
