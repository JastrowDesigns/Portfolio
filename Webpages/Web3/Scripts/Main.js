var letsPlay = document.getElementById('letsPlay');
var word = document.getElementById('word');
var wordArray;
var easyBtn = document.getElementById('easyBtn');
var normBtn = document.getElementById('normBtn');
var hardBtn = document.getElementById('hardBtn');
var easy = ["tree","book","smile","show","bug","water","pie","hat","cup"];
var normal = ["round","palace","garbage","backbone","computer","whistle","baseball","aircraft","hockey"];
var hard = ["catalog","vegetarian","pharmacist","chestnut","glitter","lie","diagonal","dizzy","wobble"];
var rNoEasy = Math.floor(Math.random() * easy.length);
var rNoNorm = Math.floor(Math.random() * normal.length);
var rNoHard = Math.floor(Math.random() * hard.length);
var letters = document.getElementsByClassName('letter');
var guessInput = document.getElementById('guessInput');
var letBank = document.getElementById('letBank');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');
var f = document.getElementById('f');
var g = document.getElementById('g');
var h = document.getElementById('h');
var leti = document.getElementById('i');
var j = document.getElementById('j');
var k = document.getElementById('k');
var l = document.getElementById('l');
var m = document.getElementById('m');
var n = document.getElementById('n');
var o = document.getElementById('o');
var p = document.getElementById('p');
var q = document.getElementById('q');
var r = document.getElementById('r');
var s = document.getElementById('s');
var t = document.getElementById('t');
var u = document.getElementById('u');
var v = document.getElementById('v');
var w = document.getElementById('w');
var x = document.getElementById('x');
var y = document.getElementById('y');
var z = document.getElementById('z');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var tMin;
var tSec;
var correct = 0;
var deathCount = 0;
var winCount = 0;
var lives;
var countdown;

var muteBtn = document.getElementById('muteBtn');
var soundBtn = document.getElementById('soundBtn');

var music = document.getElementById('backgroundMusic');
music.volume = 0;
music.pause();

muteBtn.addEventListener('click',muteMusic);
function muteMusic(){
	muteBtn.style.opacity = 1;
	soundBtn.style.opacity = .5;
	muteBtn.style.outline = 0;
	soundBtn.style.outline = 0;
	music.pause();
}

soundBtn.addEventListener('click',playMusic);
function playMusic(){
	muteBtn.style.opacity = .5;
	soundBtn.style.opacity = 1;
	muteBtn.style.outline = 0;
	soundBtn.style.outline = 0;
	if (music.paused) {
        music.play();
    }else{
        music.currentTime = 0
    }
}

var incorrectSound = document.getElementById('incorrectSound');
var correctSound = document.getElementById('correctSound');
var win = document.getElementById('win');
var lose = document.getElementById('lose');

correctSound.volume = .3;
win.volume = .5;
lose.volume = .5;

var clock = document.getElementById("clock");
var min = document.getElementById("min");
var sec = document.getElementById("sec");

var edetails = document.getElementById('edetails');
var ndetails = document.getElementById('ndetails');
var hdetails = document.getElementById('hdetails');

function beginGame(){
	countdown = setInterval(tick,1000);
	clock.style.backgroundColor = "#42FF00";
	min.style.backgroundColor = "#42FF00";
	sec.style.backgroundColor = "#42FF00";
	setTimeout(function(){
		clock.style.backgroundColor = "white";
		min.style.backgroundColor = "white";
		sec.style.backgroundColor = "white";
	}, 1000);
	setTimeout(function(){
		clock.style.backgroundColor = "#42FF00";
		min.style.backgroundColor = "#42FF00";
		sec.style.backgroundColor = "#42FF00";
	}, 500);
	setTimeout(function(){
		clock.style.backgroundColor = "white";
		min.style.backgroundColor = "white";
		sec.style.backgroundColor = "white";
	}, 500);
}

function tick(){

 

                if(tSec == 0){

                                tMin--;

                                tSec = 60;

                }

 

                tSec--;

 

                if(tMin < 10){

                                min.innerHTML = "0" + tMin;

                }else {

                                min.innerHTML = tMin;

                }

 

                if(tSec >= 0 && tSec < 10){

                                sec.innerHTML = "0" + tSec;

                }else {

                                sec.innerHTML = tSec;

                }

               

                if(tMin + tSec == 0){
                				lose.play();

                                min.innerHTML = "- -  ";

                                sec.innerHTML = "  - -";

                                clearInterval(countdown);

                                setTimeout(function(){

                                if(confirm("Sorry, you ran out of time, the word was '" + wordArray + "'.\nPlay again?")){
									//location.reload();
									letsPlay.style.display = "none";
									word.innerHTML = "";
									letters.innerHTML = "";
									easyBtn.style.display = '';
									normBtn.style.display = '';
									hardBtn.style.display = '';
									edetails.style.display = '';
									ndetails.style.display = '';
									hdetails.style.display = '';
									letBank.style.display = 'none';
									correct = 0;
									deathCount = 0;
									winCount = 0;
									errorMessage.style.display = 'none';
									clearInterval(countdown);
									min.innerHTML = "00";
									sec.innerHTML = "00";
									a.style.visibility = "visible";
									b.style.visibility = "visible";
									c.style.visibility = "visible";
									d.style.visibility = "visible";
									e.style.visibility = "visible";
									f.style.visibility = "visible";
									g.style.visibility = "visible";
									h.style.visibility = "visible";
									leti.style.visibility = "visible";
									j.style.visibility = "visible";
									k.style.visibility = "visible";
									l.style.visibility = "visible";
									m.style.visibility = "visible";
									n.style.visibility = "visible";
									o.style.visibility = "visible";
									p.style.visibility = "visible";
									q.style.visibility = "visible";
									r.style.visibility = "visible";
									s.style.visibility = "visible";
									t.style.visibility = "visible";
									u.style.visibility = "visible";
									v.style.visibility = "visible";
									w.style.visibility = "visible";
									x.style.visibility = "visible";
									y.style.visibility = "visible";
									z.style.visibility = "visible";
								} else{
										endMessage.innerHTML = "Thanks for playing.";
										errorMessage.innerHTML = eMessages[9];
										letsPlay.style.display = 'none';
										easyBtn.style.display = 'none';
										normBtn.style.display = 'none';
										hardBtn.style.display = 'none';
										letBank.style.display = 'none';
										a.removeEventListener('click',checkMatcha);
										b.removeEventListener('click',checkMatchb);
										c.removeEventListener('click',checkMatchc);
										d.removeEventListener('click',checkMatchd);
										e.removeEventListener('click',checkMatche);
										f.removeEventListener('click',checkMatchf);
										g.removeEventListener('click',checkMatchg);
										h.removeEventListener('click',checkMatchh);
										leti.removeEventListener('click',checkMatchzleti);
										j.removeEventListener('click',checkMatchj);
										k.removeEventListener('click',checkMatchk);
										l.removeEventListener('click',checkMatchl);
										m.removeEventListener('click',checkMatchm);
										n.removeEventListener('click',checkMatchn);
										o.removeEventListener('click',checkMatcho);
										p.removeEventListener('click',checkMatchp);
										q.removeEventListener('click',checkMatchq);
										r.removeEventListener('click',checkMatchr);
										s.removeEventListener('click',checkMatchs);
										t.removeEventListener('click',checkMatcht);
										u.removeEventListener('click',checkMatchu);
										v.removeEventListener('click',checkMatchv);
										w.removeEventListener('click',checkMatchw);
										x.removeEventListener('click',checkMatchx);
										y.removeEventListener('click',checkMatchy);
										z.removeEventListener('click',checkMatchz);

						            }

                                }, 1);

                }

                if(tMin == 0 && tSec == 10){

                                clock.style.backgroundColor = "red";

                                min.style.backgroundColor = "red";

                                sec.style.backgroundColor = "red";

                                setTimeout(function(){

                                                clock.style.backgroundColor = "white";

                                                min.style.backgroundColor = "white";

                                                sec.style.backgroundColor = "white";

                                }, 200);

                }

                if(tMin == 0 && tSec == 5){

                                clock.style.backgroundColor = "red";

                                min.style.backgroundColor = "red";

                                sec.style.backgroundColor = "red";

                                setTimeout(function(){

                                                clock.style.backgroundColor = "white";

                                                min.style.backgroundColor = "white";

                                                sec.style.backgroundColor = "white";

                                }, 200);

                }

                if(tMin == 0 && tSec == 3){

                                clock.style.backgroundColor = "red";

                                min.style.backgroundColor = "red";

                                sec.style.backgroundColor = "red";

                                clock.style.color = "white";

                                min.style.color = "white";

                                sec.style.color = "white";

                               

                }
}



easyBtn.addEventListener('click', function(){
	tMin = 2;
	tSec = 00;
	beginGame();
	wordArray = easy[rNoEasy];
	chooseWord();
	easyBtn.style.display = 'none';
	normBtn.style.display = 'none';
	hardBtn.style.display = 'none';
	edetails.style.display = 'none';
	ndetails.style.display = 'none';
	hdetails.style.display = 'none';
	letBank.style.display = 'inline-block';
	letsPlay.style.display = 'inline-block';
	lives = 10;
});

normBtn.addEventListener('click', function(){
	tMin = 4;
	tSec = 00;
	beginGame();
	wordArray = normal[rNoNorm];
	chooseWord();
	easyBtn.style.display = 'none';
	normBtn.style.display = 'none';
	hardBtn.style.display = 'none';
	edetails.style.display = 'none';
	ndetails.style.display = 'none';
	hdetails.style.display = 'none';
	letBank.style.display = 'inline-block';
	letsPlay.style.display = 'inline-block';
	lives = 5;
});

hardBtn.addEventListener('click', function(){
	tMin = 6;
	tSec = 00;
	beginGame();
	wordArray = hard[rNoHard];
	chooseWord();
	easyBtn.style.display = 'none';
	normBtn.style.display = 'none';
	hardBtn.style.display = 'none';
	edetails.style.display = 'none';
	ndetails.style.display = 'none';
	hdetails.style.display = 'none';
	letBank.style.display = 'inline-block';
	letsPlay.style.display = 'inline-block';
	lives = 3;
});

function chooseWord(){
	for(var i = 0; i < wordArray.length; i++){
		word.innerHTML += '<div class="letter" id="">' + wordArray.charAt(i); + '</div>';
	}
}

a.addEventListener('click',checkMatcha)
function checkMatcha(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "a"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	a.style.visibility = "hidden";
	a.removeEventListener('click',checkMatcha)
}

b.addEventListener('click',checkMatchb)
function checkMatchb(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "b"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	b.style.visibility = "hidden";
	b.removeEventListener('click',checkMatchb)
}

c.addEventListener('click',checkMatchc)
function checkMatchc(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "c"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	c.style.visibility = "hidden";
	c.removeEventListener('click',checkMatchc)
}

d.addEventListener('click',checkMatchd)
function checkMatchd(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "d"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	d.style.visibility = "hidden";
	d.removeEventListener('click',checkMatchd)
}

e.addEventListener('click',checkMatche)
function checkMatche(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "e"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	e.style.visibility = "hidden";
	e.removeEventListener('click',checkMatche)
}

f.addEventListener('click',checkMatchf)
function checkMatchf(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "f"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	f.style.visibility = "hidden";
	f.removeEventListener('click',checkMatchf)
}

g.addEventListener('click',checkMatchg)
function checkMatchg(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "g"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	g.style.visibility = "hidden";
	g.removeEventListener('click',checkMatchg)
}

h.addEventListener('click',checkMatchh)
function checkMatchh(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "h"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	h.style.visibility = "hidden";
	h.removeEventListener('click',checkMatchh)
}

leti.addEventListener('click',checkMatchleti)
function checkMatchleti(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "i"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	leti.style.visibility = "hidden";
	leti.removeEventListener('click',checkMatchleti)
}

j.addEventListener('click',checkMatchj)
function checkMatchj(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "j"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	j.style.visibility = "hidden";
	j.removeEventListener('click',checkMatchj)
}

k.addEventListener('click',checkMatchk)
function checkMatchk(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "k"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	k.style.visibility = "hidden";
	k.removeEventListener('click',checkMatchk)
}

l.addEventListener('click',checkMatchl)
function checkMatchl(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "l"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	l.style.visibility = "hidden";
	l.removeEventListener('click',checkMatchl)
}

m.addEventListener('click',checkMatchm)
function checkMatchm(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "m"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	m.style.visibility = "hidden";
	m.removeEventListener('click',checkMatchm)
}

n.addEventListener('click',checkMatchn)
function checkMatchn(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "n"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	n.style.visibility = "hidden";
	n.removeEventListener('click',checkMatchn)
}

o.addEventListener('click',checkMatcho)
function checkMatcho(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "o"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	o.style.visibility = "hidden";
	o.removeEventListener('click',checkMatcho)
}

p.addEventListener('click',checkMatchp)
function checkMatchp(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "p"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	p.style.visibility = "hidden";
	p.removeEventListener('click',checkMatchp)
}

q.addEventListener('click',checkMatchq)
function checkMatchq(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "q"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	q.style.visibility = "hidden";
	q.removeEventListener('click',checkMatchq)
}

r.addEventListener('click',checkMatchr)
function checkMatchr(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "r"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	r.style.visibility = "hidden";
	r.removeEventListener('click',checkMatchr)
}

s.addEventListener('click',checkMatchs)
function checkMatchs(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "s"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	s.style.visibility = "hidden";
	s.removeEventListener('click',checkMatchs)
}

t.addEventListener('click',checkMatcht)
function checkMatcht(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "t"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	t.style.visibility = "hidden";
	t.removeEventListener('click',checkMatcht)
}

u.addEventListener('click',checkMatchu)
function checkMatchu(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "u"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	u.style.visibility = "hidden";
	u.removeEventListener('click',checkMatchu)
}

v.addEventListener('click',checkMatchv)
function checkMatchv(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "v"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	v.style.visibility = "hidden";
	v.removeEventListener('click',checkMatchv)
}

w.addEventListener('click',checkMatchw)
function checkMatchw(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "w"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	w.style.visibility = "hidden";
	w.removeEventListener('click',checkMatchw)
}

x.addEventListener('click',checkMatchx)
function checkMatchx(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "x"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	x.style.visibility = "hidden";
	x.removeEventListener('click',checkMatchx)
}

y.addEventListener('click',checkMatchy)
function checkMatchy(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "y"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	y.style.visibility = "hidden";
	y.removeEventListener('click',checkMatchy)
}

z.addEventListener('click',checkMatchz)
function checkMatchz(){
	for(var i = 0; i <letters.length; i++){
		if(letters[i].innerHTML == "z"){
			letters[i].style.color = "black";
			correct = 1;
			winCount++;	
		}
	}
	setTimeout(function(){
		if(correct == 0){
			deathCount++;
			deathPicture();
		} else{
			correct = 0;	
			winner();
		}
	}, 500);
	z.style.visibility = "hidden";
	z.removeEventListener('click',checkMatchz)
}

var errorMessage = document.getElementById('errorMessage');
var eMessages = ["ATTEMPTS REMAINING:<br />ONE",
				"ATTEMPTS REMAINING:<br />TWO",
				"ATTEMPTS REMAINING:<br />THREE",
				"ATTEMPTS REMAINING:<br />FOUR",
				"ATTEMPTS REMAINING:<br />FIVE",
				"ATTEMPTS REMAINING:<br />SIX",
				"ATTEMPTS REMAINING:<br />SEVEN",
				"ATTEMPTS REMAINING:<br />EIGHT",
				"ATTEMPTS REMAINING:<br />NINE",
				"ATTEMPTS REMAINING:<br />ZERO"];

function deathPicture(){
	if (deathCount < lives) {
		errorMessage.style.display = '';
		incorrectSound.play();
		setTimeout(function(){
		var errors = lives - deathCount;
		errorMessage.innerHTML = eMessages[errors - 1];
		},1);
	}
	if(deathCount == lives){
		lose.play();
		setTimeout(function(){},1000);
		if(confirm("Sorry, the word was '" + wordArray + "'.\nPlay again?")){
			//location.reload();
			letsPlay.style.display = "none";
			word.innerHTML = "";
			letters.innerHTML = "";
			easyBtn.style.display = '';
			normBtn.style.display = '';
			hardBtn.style.display = '';
			edetails.style.display = '';
			ndetails.style.display = '';
			hdetails.style.display = '';
			letBank.style.display = 'none';
			correct = 0;
			deathCount = 0;
			winCount = 0;
			errorMessage.style.display = 'none';
			clearInterval(countdown);
			min.innerHTML = "00";
			sec.innerHTML = "00";
			a.style.visibility = "visible";
			b.style.visibility = "visible";
			c.style.visibility = "visible";
			d.style.visibility = "visible";
			e.style.visibility = "visible";
			f.style.visibility = "visible";
			g.style.visibility = "visible";
			h.style.visibility = "visible";
			leti.style.visibility = "visible";
			j.style.visibility = "visible";
			k.style.visibility = "visible";
			l.style.visibility = "visible";
			m.style.visibility = "visible";
			n.style.visibility = "visible";
			o.style.visibility = "visible";
			p.style.visibility = "visible";
			q.style.visibility = "visible";
			r.style.visibility = "visible";
			s.style.visibility = "visible";
			t.style.visibility = "visible";
			u.style.visibility = "visible";
			v.style.visibility = "visible";
			w.style.visibility = "visible";
			x.style.visibility = "visible";
			y.style.visibility = "visible";
			z.style.visibility = "visible";
		} else{
			clearInterval(countdown);
			endMessage.innerHTML = "Thanks for playing.";
			errorMessage.innerHTML = eMessages[9];
			letsPlay.style.display = 'none';
			easyBtn.style.display = 'none';
			normBtn.style.display = 'none';
			hardBtn.style.display = 'none';
			letBank.style.display = 'none';
			errorMessage.style.display = 'none';
			a.removeEventListener('click',checkMatcha);
			b.removeEventListener('click',checkMatchb);
			c.removeEventListener('click',checkMatchc);
			d.removeEventListener('click',checkMatchd);
			e.removeEventListener('click',checkMatche);
			f.removeEventListener('click',checkMatchf);
			g.removeEventListener('click',checkMatchg);
			h.removeEventListener('click',checkMatchh);
			leti.removeEventListener('click',checkMatchzleti);
			j.removeEventListener('click',checkMatchj);
			k.removeEventListener('click',checkMatchk);
			l.removeEventListener('click',checkMatchl);
			m.removeEventListener('click',checkMatchm);
			n.removeEventListener('click',checkMatchn);
			o.removeEventListener('click',checkMatcho);
			p.removeEventListener('click',checkMatchp);
			q.removeEventListener('click',checkMatchq);
			r.removeEventListener('click',checkMatchr);
			s.removeEventListener('click',checkMatchs);
			t.removeEventListener('click',checkMatcht);
			u.removeEventListener('click',checkMatchu);
			v.removeEventListener('click',checkMatchv);
			w.removeEventListener('click',checkMatchw);
			x.removeEventListener('click',checkMatchx);
			y.removeEventListener('click',checkMatchy);
			z.removeEventListener('click',checkMatchz);
		}
	}
}

function winner(){
	correctSound.play()
	if (winCount == letters.length) {
		win.play();
		setTimeout(function(){
			winMessage();
		},500);
	}
}

function winMessage(){
		if(confirm("Congratulations! The word was '" + wordArray + "'!\nPlay again?")){
			//location.reload();
			letsPlay.style.display = "none";
			word.innerHTML = "";
			letters.innerHTML = "";
			easyBtn.style.display = '';
			normBtn.style.display = '';
			hardBtn.style.display = '';
			edetails.style.display = '';
			ndetails.style.display = '';
			hdetails.style.display = '';
			letBank.style.display = 'none';
			correct = 0;
			deathCount = 0;
			winCount = 0;
			errorMessage.style.display = 'none';
			clearInterval(countdown);
			min.innerHTML = "00";
			sec.innerHTML = "00";
			a.style.visibility = "visible";
			b.style.visibility = "visible";
			c.style.visibility = "visible";
			d.style.visibility = "visible";
			e.style.visibility = "visible";
			f.style.visibility = "visible";
			g.style.visibility = "visible";
			h.style.visibility = "visible";
			leti.style.visibility = "visible";
			j.style.visibility = "visible";
			k.style.visibility = "visible";
			l.style.visibility = "visible";
			m.style.visibility = "visible";
			n.style.visibility = "visible";
			o.style.visibility = "visible";
			p.style.visibility = "visible";
			q.style.visibility = "visible";
			r.style.visibility = "visible";
			s.style.visibility = "visible";
			t.style.visibility = "visible";
			u.style.visibility = "visible";
			v.style.visibility = "visible";
			w.style.visibility = "visible";
			x.style.visibility = "visible";
			y.style.visibility = "visible";
			z.style.visibility = "visible";
		} else{
			endMessage.innerHTML = "Thanks for playing.";
			letsPlay.style.display = 'none';
			easyBtn.style.display = 'none';
			normBtn.style.display = 'none';
			hardBtn.style.display = 'none';
			letBank.style.display = 'none';
			errorMessage.style.display = 'none';
			a.removeEventListener('click',checkMatcha);
			b.removeEventListener('click',checkMatchb);
			c.removeEventListener('click',checkMatchc);
			d.removeEventListener('click',checkMatchd);
			e.removeEventListener('click',checkMatche);
			f.removeEventListener('click',checkMatchf);
			g.removeEventListener('click',checkMatchg);
			h.removeEventListener('click',checkMatchh);
			leti.removeEventListener('click',checkMatchzleti);
			j.removeEventListener('click',checkMatchj);
			k.removeEventListener('click',checkMatchk);
			l.removeEventListener('click',checkMatchl);
			m.removeEventListener('click',checkMatchm);
			n.removeEventListener('click',checkMatchn);
			o.removeEventListener('click',checkMatcho);
			p.removeEventListener('click',checkMatchp);
			q.removeEventListener('click',checkMatchq);
			r.removeEventListener('click',checkMatchr);
			s.removeEventListener('click',checkMatchs);
			t.removeEventListener('click',checkMatcht);
			u.removeEventListener('click',checkMatchu);
			v.removeEventListener('click',checkMatchv);
			w.removeEventListener('click',checkMatchw);
			x.removeEventListener('click',checkMatchx);
			y.removeEventListener('click',checkMatchy);
			z.removeEventListener('click',checkMatchz);
		}
}