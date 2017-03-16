var canvas = document.getElementById('chartcanvas');
var ctx = canvas.getContext('2d');

var slices = [80,50,25,60,90];
var total = 0;
var color = ['#9aefdd','#dd729e','#6767ea','#ebca7d','#e18769'];
var angle = 1.5*Math.PI;

for(var e = 0; e < slices.length; e++)
{
	total += slices[e];
	$('#total-label').text("Total: " + total);
}

for (var i = 0; i < slices.length; i++) {
	ctx.fillStyle = color[i];
	ctx.beginPath();
	ctx.arc(canvas.width/2,canvas.height/2,canvas.height/2,angle,angle+(Math.PI*2*(slices[i]/total)));
	ctx.lineTo(canvas.width/2,canvas.height/2);
	ctx.fill();
	angle += Math.PI*2*(slices[i]/total);
  // ctx.fillText(color[i], canvas.width/2, angle);
}

