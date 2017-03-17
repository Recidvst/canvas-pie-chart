var canvas = document.getElementById('chartcanvas'),
		ctx = canvas.getContext('2d'),
		total = 0,
		radian = 0,
		list = "",
		radius = canvas.width/2;

$.getJSON( "https://raw.githubusercontent.com/Recidvst/canvas-pie-chart/master/company-times2.json", function(jsondata) {
	var count = Object.keys(jsondata).length;
	$.each(jsondata, function(key, data) {
		total += Number(data.current);
	});
	$.each(jsondata, function(key, data) {
		var num = Number(data.current);
		list += "<li>" + key + " = " + data.current + "</li>";
		ctx.fillStyle = data.colour;
		ctx.beginPath();
		ctx.arc(radius,radius,radius,radian,radian+(Math.PI*2*(num/total)));
		ctx.lineTo(radius,radius,radius);
    ctx.stroke();
		ctx.fill();
		radian += Math.PI*2*(num/total);
	});
		$('#total-label').text("Total: " + total);
		$('#list-label').html(list);
});
