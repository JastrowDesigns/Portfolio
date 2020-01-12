var hgt = document.getElementById('yourHeight');
var wgt = document.getElementById('yourWeight');
var btn = document.getElementById('submit');

var scale = document.getElementById('scale');
var sNormal = document.getElementById('scaleNo');
var sOver = document.getElementById('scaleOv');
var sObese = document.getElementById('scaleOb');
var sMorbid = document.getElementById('scaleMo');

var weight = document.getElementById('weight');
var weightNo = document.getElementById('weightNo');
var weightOv = document.getElementById('weightOv');
var weightOb = document.getElementById('weightOb');
var weightMo = document.getElementById('weightMo');

btn.addEventListener('click', bmi);

function bmi() {
	var math = ((Number(wgt.value)) * 703) / (Number(hgt.value) * Number(hgt.value));
	var bmiResult = math.toFixed(2)
	if(bmiResult < 25){
		scale.style.display = 'none';
		sNormal.style.display = 'block';
		weight.style.display = 'none';
		weightNo.style.display = 'block';
		alert("Your BMI is " + bmiResult + "\nYou are at a healthy weight.");
	}
	else {
		sNormal.style.display = 'none';
		weightNo.style.display = 'block';
	}
	if((bmiResult > 25) && (bmiResult < 30)){
		scale.style.display = 'none';
		sOver.style.display = 'block';
		weight.style.display = 'none';
		weightOv.style.display = 'block';
		alert("Your BMI is " + bmiResult + "\nYou are overweight.");
	}
	else {
		sOver.style.display = 'none';
		weightOv.style.display = 'none';
	}
	if((bmiResult > 30) && (bmiResult < 40)){
		scale.style.display = 'none';
		sObese.style.display = 'block';
		weight.style.display = 'none';
		weightOb.style.display = 'block';
		alert("Your BMI is " + bmiResult + "\nYou are obese.");
	}
	else {
		sObese.style.display = 'none';
		weightOb.style.display = 'none';
	}
	if(bmiResult > 40){
		scale.style.display = 'none';
		sMorbid.style.display = 'block';
		weight.style.display = 'none';
		weightMo.style.display = 'block';
		alert("Your BMI is " + bmiResult + "\nYou are morbidly obese.");
	}
	else {
		sMorbid.style.display = 'none';
		weightMo.style.display = 'none';
	}
}
