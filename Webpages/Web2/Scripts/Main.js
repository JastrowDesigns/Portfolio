var backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.volume = .2;
var dialUpSound = document.getElementById('dialUpSound');
dialUpSound.volume = .5;
var gotMail = document.getElementById('gotMail');
gotMail.volume = .1;
var swish = document.getElementById('swish');
swish.volume = .2;
var flyBall = document.getElementById('flyBall');
var glassBreak = document.getElementById('glassBreak');
var weightsLifting = document.getElementById('weightsLifting');
weightsLifting.currentTime = 0.4;
var slideIn = document.getElementById('slideIn');


dialUpSound.play();
setTimeout(function(){
	$("#dialUp").attr('src','Images/DialUp2.jpg');
}, 1500);

setTimeout(function(){
	$("#dialUp").attr('src','Images/DialUp3.jpg');
}, 3000);

setTimeout(function(){
	$("#loading").css('display','none');
    gotMail.play();
}, 3500);

setTimeout(function(){
    $("#dialUp").css('display','none');
    $("#grey").css('display','none');
	$("#mailC").animate({opacity: '1'},100);
	$("#mailC").animate({top: '20vh'},500);
}, 4000);

setTimeout(function(){
    $("#mailC").css('display','none');
    $("#mailO").css('display','block');
}, 4800);

setTimeout(function(){
	$("#mailO").animate({opacity: '0'},1000);
}, 5200);

setTimeout(function(){
    $("#mailO").css('display','none');
	$(".punBtns").animate({opacity: '1'},1000);
	$("#message").animate({opacity: '1'},1000);
	backgroundMusic.play();
	$("#note1").animate({opacity: '1'},1000);
	$("#note2").animate({opacity: '1'},1000);
}, 6000);

var clearIt = 0;

$("#pun1").click(function(){
	$("#pun1").animate({left: '40vw',opacity: '0'},500);
	$(".punBtns").animate({opacity: '0'},500);
	setTimeout(function(){
		$(".punBtns").css('display','none');
	}, 600);
	setTimeout(function(){
		$("#message").html("I told my doctor I didn't want a<br />brain transplant, but he changed my mind.");
		brainSwap();
	}, 700);
	clearIt = 1;
	setTimeout(function(){
		$("#return").css('display','block');
	}, 1000);
});

$("#pun2").click(function(){
	$("#pun2").animate({left: '40vw',opacity: '0'},500);
	$(".punBtns").animate({opacity: '0'},500);
	setTimeout(function(){
		$(".punBtns").css('display','none');
	}, 600);
	setTimeout(function(){
		$("#message").html("I couldn't figure out why the baseball was getting bigger,<br />then it hit me.");
		baseball();
	}, 700);
	clearIt = 2;
});
 
$("#pun3").click(function(){
	$("#pun3").animate({left: '40vw',opacity: '0'},500);
	$(".punBtns").animate({opacity: '0'},500);
	setTimeout(function(){
		$(".punBtns").css('display','none');
	}, 600);
	setTimeout(function(){
		$("#message").html("I only workout on the weekends,<br /> Monday-Friday are the weak days.");
		weightsLifting.play();
		weightLift();
	}, 700);
	clearIt = 3;
	setTimeout(function(){
		$("#return").css('display','block');
	}, 1000);
});

$("#pun4").click(function(){
	$("#pun4").animate({left: '40vw',opacity: '0'},500);
	$(".punBtns").animate({opacity: '0'},500);
	setTimeout(function(){
		$(".punBtns").css('display','none');
	}, 600);
	setTimeout(function(){
		$("#message").html("I relish the fact that you've<br /> mustard the strength to ketchup with me.");
		condiments();
	}, 700);
	clearIt = 4;
});

$("#return").click(function(){
	$("#message").html("Choose a pun below...");
	$(".punBtns").css('opacity','1');
	$(".punBtns").css('left','0px');
	$(".punBtns").css('display','block');
	$("#return").css('display','none');
	if(clearIt == 1){
		$("#men").css('display','none');
		$("#brain").css('display','none');
		$("#brain2").css('display','none');
		swish.pause();
		swish.currentTime = 0;
	}
	if(clearIt == 2){
		$("#crackedScreen").css('display','none');
	}
	if(clearIt == 3){
		weightsLifting.pause();
		weightsLifting.currentTime = 0.4;
		$("#weight").css('display','none');
	}
	if(clearIt == 4){
		$("#ketchup").css('display','none');
		$("#mustard").css('display','none');
		$("#relish").css('display','none');
		$("#ketchup").css('left','140vw');
		$("#mustard").css('left','-40vw');
		$("#relish").css('left','140vw');
		$("#ketchup").css('display','block');
		$("#mustard").css('display','block');
		$("#relish").css('display','block');
	}
});

function brainSwap(){
	$("#men").css('display','block');
	$("#brain").css('display','inline-block');
	$("#brain2").css('display','inline-block');
	swish.play();
}

function baseball(){
	flyBall.play();
	$("#baseball").css('display','block');
	$("#baseball").addClass("baseballActive")
	setTimeout(function(){
		$("#baseball").css('left','200px');
		$("#baseball").animate({top: '80vh'},500);
	}, 1900);
	setTimeout(function(){
		flyBall.pause();
		flyBall.currentTime = 0;
		glassBreak.play();
		$("#baseball").css('width','80vw');
		$("#baseball").css('transform','rotate(360deg)');
		$("#crackedScreen").css('display','block');
	}, 2000);
	setTimeout(function(){
		$("#baseball").css('display','none');
		$("#baseball").removeClass("baseballActive")
		$("#baseball").css('width','25vw');
		$("#baseball").css('transform','rotate(0deg)');
		$("#baseball").css('left','50%');
		$("#return").css('opacity','0');
		$("#return").css('display','block');
		$("#return").animate({opacity: '1'},500);
	}, 3000);
}

function weightLift(){
	$("#weight").css('display','block');
}

function condiments(){
	slideIn.play();
	$("#relish").animate({left: '30vw'},1500);
	setTimeout(function(){
		slideIn.play();
		$("#mustard").animate({left: '70vw'},1500);
	}, 1500);
	setTimeout(function(){
		slideIn.play();
		$("#ketchup").animate({left: '50vw'},1500);
	}, 3000);
	setTimeout(function(){
		$("#return").css('opacity','0');
		$("#return").css('display','block');
		$("#return").animate({opacity: '1'},500);
	}, 4500);
}