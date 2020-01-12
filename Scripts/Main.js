var gearSound = document.getElementById("gearSound");
var gearSound2 = document.getElementById("gearSound2");
gearSound.volume = .2;
gearSound2.volume = .2;
var slide = document.getElementById("slide");
slide.volume = .2;
var slideOut = document.getElementById("slideOut");
slideOut.volume = .1;
gearSound.play();
$("#headlineBox").animate({top:"45px",left:"76px"},1000);
var headSpin = new TimelineMax();
headSpin.from("#headlineBox",1,{rotation:-90});
$("#tvContain").animate({bottom:"28px"},1000);


var rock = document.getElementById("rock");
rock.volume = .05;

var wheelSpin = new TimelineMax();
var wheelSpinAlt = new TimelineMax();
var homeSpin = new TimelineMax();

var music = document.getElementById("music");
music.volume = .4;
var x = 0;

$("#audio").click(function(){
	if (music.paused) {
        music.play();
    	$("#audio").attr('src', 'Images/Audio.png');
    }
    else{
        music.currentTime = 0;
        music.pause();
    	$("#audio")
    	$("#audio").attr('src', 'Images/AudioMute.png');
    }
});

homeSpin.to("#homeBtn",1,{rotation:190});
wheelSpin.to("#gear3",1,{rotation:-290})
wheelSpinAlt.to("#gear4",1,{rotation:260})

$("#resetBtn").click(function(){
    if (gearSound2.paused) {
        gearSound2.play();
    }else{
        gearSound2.currentTime = 0
    }
	$("#tvEnlarge").animate({left: '-700px'},200);
	setTimeout(function(){
		$(".bigImages").remove();
	}, 200);
	homeSpin.to("#homeBtn",.4,{rotation:0});
	wheelSpin.to("#gear3",.4,{rotation:-90})
	wheelSpinAlt.to("#gear4",.4,{rotation:60})
	$("#tvContain").animate({bottom:"-400px"},400);
	setTimeout(function(){
		$("#homeBtnText").attr('src','Images/Home.png');
		homeSpin.to("#homeBtn",.4,{rotation:190});
		wheelSpin.to("#gear3",.4,{rotation:-290})
		wheelSpinAlt.to("#gear4",.4,{rotation:260})
		$("#tv").css('display','block');
		$("#tvBiography").css('display','none');
		$("#tvGallary").css('display','none');
		$("#tvEducation").css('display','none');
		$("#tvContact").css('display','none');
		$("#tvContain").animate({bottom:"28px"},400);
		$("#resetMessage").animate({opacity:0},500);
	}, 400);
});

$("#bio").click(function(){
	if (gearSound2.paused) {
        gearSound2.play();
    }else{
        gearSound2.currentTime = 0
    }
	homeSpin.to("#homeBtn",.4,{rotation:0});
	wheelSpin.to("#gear3",.4,{rotation:-90})
	wheelSpinAlt.to("#gear4",.4,{rotation:60})
	$("#tvContain").animate({bottom:"-400px"},400);
	setTimeout(function(){
		homeSpin.to("#homeBtn",.4,{rotation:198});
		wheelSpin.to("#gear3",.4,{rotation:-290})
		wheelSpinAlt.to("#gear4",.4,{rotation:260})
		$("#homeBtnText").attr('src','Images/Back.png');
		$("#tv").css('display','none');
		$("#tvBiography").css('display','block');
		$("#tvContain").animate({bottom:"28px"},400);
	}, 400);
});

$("#gal").click(function(){
	if (gearSound2.paused) {
        gearSound2.play();
    }else{
        gearSound2.currentTime = 0
    }
	homeSpin.to("#homeBtn",.4,{rotation:0});
	wheelSpin.to("#gear3",.4,{rotation:-90})
	wheelSpinAlt.to("#gear4",.4,{rotation:60})
	$("#tvContain").animate({bottom:"-400px"},400);
	setTimeout(function(){
		homeSpin.to("#homeBtn",.4,{rotation:198});
		wheelSpin.to("#gear3",.4,{rotation:-290})
		wheelSpinAlt.to("#gear4",.4,{rotation:260})
		$("#homeBtnText").attr('src','Images/Back.png');
		$("#tv").css('display','none');
		$("#tvGallary").css('display','block');
		$("#tvContain").animate({bottom:"28px"},400);
	}, 400);	
});

$("#designs").click(function(){
	if (rock.paused) {
        rock.play();
    }else{
        rock.currentTime = 0
    }
	$("#designs").css('color','#237BD3');
	$("#designs").css('background-color','white');
	$("#webpages").css('color','white');
	$("#webpages").css('background-color','#237BD3');
	$(".webpages").css('display','none');
	$(".images").css('display','inline-block');
});

$("#webpages").click(function(){
	if (rock.paused) {
        rock.play();
    }else{
        rock.currentTime = 0
    }
	$("#webpages").css('color','#237BD3');
	$("#webpages").css('background-color','white');
	$("#designs").css('color','white');
	$("#designs").css('background-color','#237BD3');
	$(".images").css('display','none');
	$(".webpages").css('display','inline-block');
});

$("#edu").click(function(){
	if (gearSound2.paused) {
        gearSound2.play();
    }else{
        gearSound2.currentTime = 0
    }
	homeSpin.to("#homeBtn",.4,{rotation:0});
	wheelSpin.to("#gear3",.4,{rotation:-90})
	wheelSpinAlt.to("#gear4",.4,{rotation:60})
	$("#tvContain").animate({bottom:"-400px"},400);
	setTimeout(function(){
		homeSpin.to("#homeBtn",.4,{rotation:198});
		wheelSpin.to("#gear3",.4,{rotation:-290})
		wheelSpinAlt.to("#gear4",.4,{rotation:260})
		$("#homeBtnText").attr('src','Images/Back.png');
		$("#tv").css('display','none');
		$("#tvEducation").css('display','block');
		$("#tvContain").animate({bottom:"28px"},400);
	}, 400);	
});

$("#cont").click(function(){
	if (gearSound2.paused) {
        gearSound2.play();
    }else{
        gearSound2.currentTime = 0
    }
	homeSpin.to("#homeBtn",.4,{rotation:0});
	wheelSpin.to("#gear3",.4,{rotation:-90})
	wheelSpinAlt.to("#gear4",.4,{rotation:60})
	$("#tvContain").animate({bottom:"-400px"},400);
	setTimeout(function(){
		homeSpin.to("#homeBtn",.4,{rotation:198});
		wheelSpin.to("#gear3",.4,{rotation:-290})
		wheelSpinAlt.to("#gear4",.4,{rotation:260})
		$("#homeBtnText").attr('src','Images/Back.png');
		$("#tv").css('display','none');
		$("#tvContact").css('display','block');
		$("#tvContain").animate({bottom:"28px"},400);
	}, 400);	
});

$("#image1").click(function(){
	slide.play();
	$("#clickSmall").css('color','black');
	$("#clickSmall").css('left','-45px');
	$("#imagesBig").append("<img class='bigImages' src='Images/Gallery1.jpg'>");
	$("#tvEnlarge").animate({left: '48px'},500);
});

$("#image2").click(function(){
	slide.play();
	$("#clickSmall").css('color','white');
	$("#clickSmall").css('left','-45px');
	$("#imagesBig").append("<img class='bigImages' src='Images/Gallery2.jpg'>");
	$("#tvEnlarge").animate({left: '48px'},500);
});

$("#image3").click(function(){
	slide.play();
	$("#clickSmall").css('color','black');
	$("#clickSmall").css('left','-45px');
	$("#imagesBig").append("<img class='bigImages' src='Images/Gallery3.jpg'>");
	$("#tvEnlarge").animate({left: '48px'},500);
});

$("#image4").click(function(){
	slide.play();
	$("#clickSmall").css('color','black');
	$("#clickSmall").css('left','20px');
	$("#imagesBig").append("<img class='bigImages' src='Images/Gallery4.jpg'>");
	$("#tvEnlarge").animate({left: '48px'},500);
});

$("#image5").click(function(){
	slide.play();
	$("#clickSmall").css('color','black');
	$("#clickSmall").css('left','60px');
	$("#imagesBig").append("<img class='bigImages' src='Images/Gallery5.jpg'>");
	$("#tvEnlarge").animate({left: '48px'},500);
});

$("#image6").click(function(){
	slide.play();
	$("#clickSmall").css('color','white');
	$("#clickSmall").css('left','-45px');
	$("#imagesBig").append("<img class='bigImages' src='Images/Gallery6.jpg'>");
	$("#tvEnlarge").animate({left: '48px'},500);
});

$("#web1").click(function(){
	slide.play();
	$("#clickSmall").css('color','black');
	$("#webBig").append("<iframe class='bigImages' src='Webpages/Web1/web1.html' height='650' width='1000'></iframe>");
	$("#webEnlarge").animate({top: '-26px'},500);
});

$("#web2").click(function(){
	slide.play();
	$("#clickSmall").css('color','black');
	$("#webBig").append("<iframe class='bigImages' src='Webpages/Web2/web2.html' height='650' width='1000'></iframe>");
	$("#webEnlarge").animate({top: '-26px'},500);
});

$("#web3").click(function(){
	slide.play();
	$("#clickSmall").css('color','black');
	$("#webBig").append("<iframe class='bigImages' src='Webpages/Web3/web3.html' height='650' width='1000'></iframe>");
	$("#webEnlarge").animate({top: '-26px'},500);
});

$("#webSmall").click(function(){
	slideOut.play();
	$("#webEnlarge").animate({top: '-1000px'},500);
	setTimeout(function(){
		$(".bigImages").remove();
	}, 500);
});

$("#imagesBig").click(function(){
	slideOut.play();
	$("#tvEnlarge").animate({left: '-700px'},500);
	setTimeout(function(){
		$(".bigImages").remove();
	}, 500);
});