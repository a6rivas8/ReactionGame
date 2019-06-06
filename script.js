var start = new Date().getTime();

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';

	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}

	return color;
}

function reappear() {
	var top = Math.floor(Math.random() * 300);
	var left = Math.floor(Math.random() * 300);
	var dimension = (Math.random() * 300) + 50;
	var color = getRandomColor();

	if (Math.random() > 0.5) {
		document.getElementById('square').style.borderRadius = "50%";
	} else {
		document.getElementById('square').style.borderRadius = "0";
	}

	document.getElementById('square').style.top = top.toString() + "px";
	document.getElementById('square').style.left = left.toString() + "px";
	document.getElementById('square').style.width = dimension + "px";
	document.getElementById('square').style.height = dimension + "px";
	document.getElementById('square').style.backgroundColor = color;
	document.getElementById('square').style.display = "block";
	start = new Date().getTime();
}

function shapeDelay() {
	setTimeout(reappear, (Math.random() * 2500) + 500);
}

shapeDelay();

var record = 1000;
document.getElementById('square').onclick = function() {
	var end = new Date().getTime();
	document.getElementById('square').style.display = "none";
	// given in milliseconds
	var time = (end - start) / 1000;

	// adjust fastest time
	if (time < record) {
		record = time;
		document.getElementById('best').innerHTML = time + "s";
	}

	if (time > record) {
		document.getElementById('timer').style.color = "red";
		document.getElementById('timer').innerHTML = time + "s";
	} else {
		document.getElementById('timer').style.color = "green";
		document.getElementById('timer').innerHTML = time + "s";
	}

	shapeDelay();
}