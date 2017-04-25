d3.request("files/timeline_data.csv").response(function(xhr) {
	return d3.dsvFormat(";").parse(xhr.responseText);
}).get(function(timelineData) {
	var data = d3.nest().key(function(d) {
		return d.date;
	}).entries(timelineData);
	
	console.log(data)

	var NYTG_ASSETS = 'https://static01.nyt.com/newsgraphics/2016/08/22/trump-statements/a4178f20ebcee2154a2d3f824de50d3d59ba28d5/';

	var container = d3.select("#g-timeline");

	var datesContainer = container.append("div").attr("id", "g-dates");

	var dates = datesContainer.selectAll(".g-date-wrap").data(data).enter().append("div").attr("class", "g-date-wrap");

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

	var statements = wrappers.append("div").attr("class", "g-iran-wrapper").attr("id", function(d) {
		return d[0]["id"];
	}).text(function(d) {
		return d[0]["iran"];
	});

	statements.filter(function(d) {
		return d[0]["quote-explanation"];
	}).append("div").attr("class", "g-quote-explanation").text(function(d) {
		return d[0]["quote-explanation"];
	});

	var people = personWrapper.each(function(d) {
		var el = d3.select(this);

		_.each(d, function(row) {

			if (row['pakistan'] || row['fallout-event']) {

				if (row['pakistan']) {
					el.append('div').attr("class", "g-person-quote").text(row['pakistan']).append('span');
				}

				var person = el.append('div').attr("class", "g-person");

				if (row['pic']) {
					person.append('img').attr('src', NYTG_ASSETS + row['pic'] + '.jpg');
				}

				person.append('div').text(row['fallout']).append("span").attr("class", "g-title").text(row["title1"]);
			}
		});
	});

	var lineHeight = $("#g-dates").height();
	console.log("lh:" + 0);
	$("#g-middle-line").css("height", 0 + "px");
});

$(window).scroll(function(){
  $('.two-flag-icon').toggleClass('scrolling', $(window).scrollTop() > $('#g-timeline').offset().top);
})

