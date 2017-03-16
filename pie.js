var canvas = document.getElementById('chartcanvas');
var ctx = canvas.getContext('2d');

var total = 0;
// var color = ['#9aefdd','#dd729e','#6767ea','#ebca7d','#e18769'];
var angle = 1.5*Math.PI;

$.getJSON( "https://raw.githubusercontent.com/Recidvst/canvas-pie-chart/master/company-times.json", function(jsondata) {
	$.each(jsondata, function(key, data) {
		var num = Number(data.current);
		total += num;
		$('#total-label').text("Total: " + total);
		ctx.fillStyle = data.colour;
		ctx.beginPath();
		ctx.arc(canvas.width/2,canvas.height/2,canvas.height/2,angle,angle+(Math.PI*2*(num/total)));
		ctx.lineTo(canvas.width/2,canvas.height/2);
		ctx.fill();
		angle += Math.PI*2*(num/total);
	});
});
