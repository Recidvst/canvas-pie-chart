var canvas = document.getElementById('chartcanvas');
var ctx = canvas.getContext('2d');

var total = 0;
var angle = 1.5*Math.PI;
var list = "";

$.getJSON( "https://raw.githubusercontent.com/Recidvst/canvas-pie-chart/master/company-times.json", function(jsondata) {
	$.each(jsondata, function(key, data) {
		var num = Number(data.current);
		console.log(num)
		total += num;
		list += "<li>" + key + " = " + data.current + "</li>"
		$('#total-label').text("Total: " + total);
		$('#list-label').html(list);
		ctx.fillStyle = data.colour;
		ctx.beginPath();
    ctx.strokeStyle = "#fff";
		ctx.arc(canvas.width/2,canvas.height/2,canvas.height/2,angle,angle+(Math.PI*2*(num/total)));
		ctx.lineTo(canvas.width/2,canvas.height/2);
    ctx.stroke();
		ctx.fill();
		angle += Math.PI*2*(num/total);
	});
});
