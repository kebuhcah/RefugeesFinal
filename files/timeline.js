var data = d3.nest().key(function(d) {
	return d.date;
}).entries(NYTG_TABLE);

var NYTG_ASSETS = 'https://static01.nyt.com/newsgraphics/2016/08/22/trump-statements/a4178f20ebcee2154a2d3f824de50d3d59ba28d5/';

var container = d3.select("#g-timeline");
// .style("height", height+5000 + "px");

var datesContainer = container.append("div").attr("id", "g-dates");

var dates = datesContainer.selectAll(".g-date-wrap").data(data).enter().append("div").attr("class", "g-date-wrap");
// .style("top", function(d){ return dateScale(new Date(d.key)) + "px"; });

dates.append("div").attr("class", "g-date").text(function(d) {
	return d.key;
});

var wrappers = dates.append("div").attr("class", "g-event-wrapper").datum(function(d) {
	return d.values;
});

var personWrapper = dates.append("div").attr("class", "g-pakistan-wrapper").datum(function(d) {
	return d.values;
});


var events = wrappers.filter(function(d) {
	var isThereAnEvent = _.find(d, function(row) {
		return row.event;
	});
	return isThereAnEvent;
}).append("div").attr("class", "g-event").text(function(d) {
	return d[0]["event"];
});

var statements = wrappers.append("div").attr("class", "g-statement").attr("id", function(d) {
	return d[0]["id"];
}).text(function(d) {
	return d[0]["trump-said"];
});

statements.filter(function(d) {
	return d[0]["quote-explanation"];
}).append("div").attr("class", "g-quote-explanation").text(function(d) {
	return d[0]["quote-explanation"];
});

var people = personWrapper.each(function(d) {
	var el = d3.select(this);

	_.each(d, function(row) {
		if (row['fallout-event']) {
			el.append('div').attr("class", "g-fallout-event").text(row['fallout-event']);
		}

		if (row['fallout'] || row['fallout-event']) {

			if (row['quote']) {
				el.append('div').attr("class", "g-person-quote").text(row['quote']).append('span');
				// .text('â†‘');
				// â†“
				// .append('span')
				// .text(row['fallout'])
				// .attr('class', 'g-quote-explanation');
			}

			var person = el.append('div')
			// .classed('g-person', 'true')
			.attr("class", function() {
				if (row['clinton']) {
					return "g-person g-clinton";
				} else {
					return "g-person";
				}
			});

			if (row['pic']) {
				person.append('img').attr('src', NYTG_ASSETS + row['pic'] + '.jpg');
			}

			person.append('div')
			// .text( function(){
			//   if (row['quote']) {
			//       return "â†‘ " + row['fallout'];
			//   } else { return row['fallout']; }
			// })
			.text(row['fallout']).append("span").attr("class", "g-title").text(row["title1"]);
		}
	});
});

var lineHeight = $("#g-dates").height();
console.log("lh:" + lineHeight);
$("#g-middle-line").css("height", lineHeight + "px");

var recent = d3.select("#left-recently");

var recentPeople = recent.selectAll(".g-recent-person").data(NYTG_TABLE).enter()
.append("div").attr("class", function(d) {
	if (d.recent == "y") {
		return "g-recent-person";
	} else {
		return "g-hide";
	}
}).html(function(d) {
	if (d.recent == "y") {
		return d.fallout + ", <span>" + d.title1 + "</span>";
	}
});