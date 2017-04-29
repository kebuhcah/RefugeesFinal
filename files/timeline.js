console.log(data)

var container = d3.select("#g-timeline");

var datesContainer = container.append("div").attr("id", "g-dates");

var dates = datesContainer.selectAll(".g-date-wrap").data(data).enter().append("div").attr("class", "g-date-wrap");

dates.append("div").attr("class", "g-date").text(function(d) {
	return d.key;
});

var wrappers = dates.append("div").attr("class", "g-event-wrapper").datum(function(d) {
	return d.values;
});

var pakistanWrapper = dates.append("div").attr("class", "g-pakistan-wrapper").datum(function(d) {
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

var statements = wrappers.append("div").attr("class", "g-iran-content").attr("id", function(d) {
	return d[0]["id"];
}).html(function(d) {
	return d[0]["iran"];
});


pakistanWrapper.each(function(d) {
	var el = d3.select(this);

	_.each(d, function(row) {


			if (row['pakistan']) {
				el.append('div').attr("class", "g-pakistan-content").text(row['pakistan']).append('span');
			}
	});
});

var lineHeight = $("#g-dates").height();
console.log("lh:" + 0);
$("#g-middle-line").css("height", lineHeight + "px");

$(window).scroll(function() {
	$('.two-flag-icon').toggleClass('scrolling', $(window).scrollTop() > $('#g-timeline').offset().top);
})

