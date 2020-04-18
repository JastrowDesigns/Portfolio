var tv = 'home';
var V = 1;
var color = "off";
var bio = "closed"
var gal = "closed"
var edu = "closed"
var con = "closed"

function pageLoad() {
	$("#header").animate({left: '-2px'},1000);
	$("#info").animate({left: '0px'},1000);
	setTimeout( function(){
		$("#tvContain").animate({right: '-2px'},1000);
	},500);
}

$("#mobileBio").click(function(){
	if(bio === "closed"){
		$("#bioMobile").css('display','block');
		bio = "open";
	}else if(bio === "open"){
		$("#bioMobile").css('display','none');
		bio = "closed";
	}
});

$("#mobileGal").click(function(){
	if(gal === "closed"){
		$("#galMobile").css('display','block');
		gal = "open";
	}else if(gal === "open"){
		$("#galMobile").css('display','none');
		gal = "closed";
	}
});

$("#mobileEdu").click(function(){
	if(edu === "closed"){
		$("#eduMobile").css('display','block');
		edu = "open";
	}else if(edu === "open"){
		$("#eduMobile").css('display','none');
		edu = "closed";
	}
});

$("#mobileCon").click(function(){
	if(con === "closed"){
		$("#conMobile").css('display','block');
		con = "open";
	}else if(con === "open"){
		$("#conMobile").css('display','none');
		con = "closed";
	}
});

$("#bio").click(function(){
	$("#bio").css('color','white');
	$("#bio").css('backgroundColor','#0804ad');
	$("#gal").css('color','#0804ad');
	$("#gal").css('backgroundColor','white');
	$("#edu").css('color','#0804ad');
	$("#edu").css('backgroundColor','white');
	$("#con").css('color','#0804ad');
	$("#con").css('backgroundColor','white');
	$("#tvBiography").css('display','block');
	$("#tvGallery").css('display','none');
	$("#tvEducation").css('display','none');
	$("#tvContact").css('display','none');
});

$("#gal").click(function(){
	$("#gal").css('color','white');
	$("#gal").css('backgroundColor','#0804ad');
	$("#bio").css('color','#0804ad');
	$("#bio").css('backgroundColor','white');
	$("#edu").css('color','#0804ad');
	$("#edu").css('backgroundColor','white');
	$("#con").css('color','#0804ad');
	$("#con").css('backgroundColor','white');
	$("#tvGallery").css('display','block');
	$("#tvBiography").css('display','none');
	$("#tvEducation").css('display','none');
	$("#tvContact").css('display','none');
	$(".galleryCatagory").css('display','inline-block');
});

$("#edu").click(function(){
	$("#edu").css('color','white');
	$("#edu").css('backgroundColor','#0804ad');
	$("#bio").css('color','#0804ad');
	$("#bio").css('backgroundColor','white');
	$("#gal").css('color','#0804ad');
	$("#gal").css('backgroundColor','white');
	$("#con").css('color','#0804ad');
	$("#con").css('backgroundColor','white');
	$("#tvEducation").css('display','block');
	$("#tvBiography").css('display','none');
	$("#tvGallery").css('display','none');
	$("#tvContact").css('display','none');
});

$("#bigImageClose").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','inline');
		$("#tvContain").css('width','65vw');
		$("#tvContain").css('height','90vh');
		$("#tvGallery").css('display','inline');
		$("#bigImageClose").css('display','none');
		$("#tvContain").css('backgroundImage','none');
		$("#ozAlts").css('display','none');
		$("#arrowL").css('display','none');
		$("#arrowR").css('display','none');
		$("#colorBTN").css('display','none');
		$("#bcBTN").css('display','none');
		$("#lhBTN").css('display','none');
		$("#enBTN").css('display','none');
		$(".bookBTNS").css('display','none');
		$(".brochure").css('display','none');
		$(".boxes").css('display','none');
		$(".chaos").css('display','none');
		$("#clown").css('display','none');
		$("#clown").get(0).pause();
		$("#clown").get(0).currentTime = 0;
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});

$("#image1").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery1.jpg)');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
	$("#backBTN").css('display','none');
});

$("#image2").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery2A.jpg)');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
		$("#ozAlts").css('display','inline');
		$("#lilLion").css('transform','rotate(20deg)');
		$("#lilScarecrow").css('transform','rotate(0deg)');
		$("#lilTinman").css('transform','rotate(0deg)');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});

$("#lilLion").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery2A.jpg)');
	$("#lilLion").css('transform','rotate(20deg)');
	$("#lilScarecrow").css('transform','rotate(0deg)');
	$("#lilTinman").css('transform','rotate(0deg)');
});

$("#lilScarecrow").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery2B.jpg)');
	$("#lilLion").css('transform','rotate(0deg)');
	$("#lilScarecrow").css('transform','rotate(20deg)');
	$("#lilTinman").css('transform','rotate(0deg)');
});

$("#lilTinman").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery2C.jpg)');
	$("#lilLion").css('transform','rotate(0deg)');
	$("#lilScarecrow").css('transform','rotate(0deg)');
	$("#lilTinman").css('transform','rotate(20deg)');
});

$("#image3").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery3A.jpg)');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
		$("#arrowR").css('display','block');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});

$("#arrowR").click(function(){
	if(V === 1){
		$("#arrowL").css('display','block');
		$("#tvContain").css('backgroundImage','url(Images/Gallery3B.jpg)');
		V = 2;
	}else if(V === 2){
		$("#arrowR").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery3C.jpg)');
		V = 3;
	}
});

$("#arrowL").click(function(){
	if(V === 2){
		$("#arrowL").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery3A.jpg)');
		V = 1;
	}else if(V === 3){
		$("#arrowR").css('display','block');
		$("#tvContain").css('backgroundImage','url(Images/Gallery3B.jpg)');
		V = 2;
	}
});

$("#image4").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery4.jpg)');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});

$("#image5").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery5A.jpg)');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
		$("#colorBTN").css('display','block');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});

$("#colorBTN").click(function(){
	if (color === "off") {
		$("#tvContain").css('backgroundImage','url(Images/Gallery5B.jpg)');
		$("#colorBTN").css('backgroundImage','url(Images/ColorOn.png)');
		color = "on";
	} else if (color === "on") {
		$("#tvContain").css('backgroundImage','url(Images/Gallery5A.jpg)');
		$("#colorBTN").css('backgroundImage','url(Images/ColorOff.png)');
		color = "off";
	}
	
});

$("#image6").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery6.jpg)');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});

$("#image7").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery7A.jpg)');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
		$("#bcBTN").css('display','block');
		$("#lhBTN").css('display','block');
		$("#enBTN").css('display','block');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});

$("#bcBTN").click(function(){
		$("#tvContain").css('backgroundImage','url(Images/Gallery7B.jpg)');
		$("#bcBTN").css('color','black');
		$("#lhBTN").css('color','#0804ad');
		$("#enBTN").css('color','#0804ad');
});

$("#lhBTN").click(function(){
		$("#tvContain").css('backgroundImage','url(Images/Gallery7C.jpg)');
		$("#bcBTN").css('color','#0804ad');
		$("#lhBTN").css('color','black');
		$("#enBTN").css('color','#0804ad');
});

$("#enBTN").click(function(){
		$("#tvContain").css('backgroundImage','url(Images/Gallery7D.jpg)');
		$("#bcBTN").css('color','#0804ad');
		$("#lhBTN").css('color','#0804ad');
		$("#enBTN").css('color','black');
});

$("#image8").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery8A.jpg)');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
		$(".bookBTNS").css('display','block');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});

$("#cMock").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery8B.jpg)');
	$("#cMock").css('color','black');
	$("#cFlat").css('color','#0804ad');
	$("#pMock").css('color','#0804ad');
	$("#pFlat").css('color','#0804ad');
	$("#mMock").css('color','#0804ad');
	$("#mFlat").css('color','#0804ad');
});

$("#cFlat").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery8C.jpg)');
	$("#cMock").css('color','#0804ad');
	$("#cFlat").css('color','black');
	$("#pMock").css('color','#0804ad');
	$("#pFlat").css('color','#0804ad');
	$("#mMock").css('color','#0804ad');
	$("#mFlat").css('color','#0804ad');
});

$("#pMock").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery8D.jpg)');
	$("#cMock").css('color','#0804ad');
	$("#cFlat").css('color','#0804ad');
	$("#pMock").css('color','black');
	$("#pFlat").css('color','#0804ad');
	$("#mMock").css('color','#0804ad');
	$("#mFlat").css('color','#0804ad');
});

$("#pFlat").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery8E.jpg)');
	$("#cMock").css('color','#0804ad');
	$("#cFlat").css('color','#0804ad');
	$("#pMock").css('color','#0804ad');
	$("#pFlat").css('color','black');
	$("#mMock").css('color','#0804ad');
	$("#mFlat").css('color','#0804ad');
});

$("#mMock").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery8F.jpg)');
	$("#cMock").css('color','#0804ad');
	$("#cFlat").css('color','#0804ad');
	$("#pMock").css('color','#0804ad');
	$("#pFlat").css('color','#0804ad');
	$("#mMock").css('color','black');
	$("#mFlat").css('color','#0804ad');
});

$("#mFlat").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery8G.jpg)');
	$("#cMock").css('color','#0804ad');
	$("#cFlat").css('color','#0804ad');
	$("#pMock").css('color','#0804ad');
	$("#pFlat").css('color','#0804ad');
	$("#mMock").css('color','#0804ad');
	$("#mFlat").css('color','black');
});

$("#image9").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery9A.jpg)');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
		$(".brochure").css('display','block');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});

$("#brochure").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery9A.jpg)');
	$("#brochure").css('color','black');
	$("#outside").css('color','#0804ad');
	$("#inside").css('color','#0804ad');
});

$("#outside").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery9B.jpg)');
	$("#brochure").css('color','#0804ad');
	$("#outside").css('color','black');
	$("#inside").css('color','#0804ad');
});

$("#inside").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery9C.jpg)');
	$("#brochure").css('color','#0804ad');
	$("#outside").css('color','#0804ad');
	$("#inside").css('color','black');
});

$("#image10").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery10A.jpg)');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
		$(".boxes").css('display','block');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});

$("#godivaMock").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery10A.jpg)');
	$("#godivaMock").css('color','black');
	$("#bigFlat").css('color','#0804ad');
	$("#smallFlat").css('color','#0804ad');
});

$("#bigFlat").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery10B.jpg)');
	$("#godivaMock").css('color','#0804ad');
	$("#bigFlat").css('color','black');
	$("#smallFlat").css('color','#0804ad');
});

$("#smallFlat").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery10C.jpg)');
	$("#godivaMock").css('color','#0804ad');
	$("#bigFlat").css('color','#0804ad');
	$("#smallFlat").css('color','black');
});

$("#image11").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('backgroundImage','url(Images/Gallery11A.jpg)');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
		$(".chaos").css('display','block');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});

$("#chaos1").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery11A.jpg)');
	$("#chaos1").css('color','white');
	$("#chaos1").css('backgroundColor','#0804ad');
	$("#chaos2").css('color','#0804ad');
	$("#chaos2").css('backgroundColor','white');
	$("#chaos3").css('color','#0804ad');
	$("#chaos3").css('backgroundColor','white');
});

$("#chaos2").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery11B.jpg)');
	$("#chaos1").css('color','#0804ad');
	$("#chaos1").css('backgroundColor','white');
	$("#chaos2").css('color','white');
	$("#chaos2").css('backgroundColor','#0804ad');
	$("#chaos3").css('color','#0804ad');
	$("#chaos3").css('backgroundColor','white');
});

$("#chaos3").click(function(){
	$("#tvContain").css('backgroundImage','url(Images/Gallery11C.jpg)');
	$("#chaos1").css('color','#0804ad');
	$("#chaos1").css('backgroundColor','white');
	$("#chaos2").css('color','#0804ad');
	$("#chaos2").css('backgroundColor','white');
	$("#chaos3").css('color','white');
	$("#chaos3").css('backgroundColor','#0804ad');
});

$("#image12").click(function(){
	$("#tvContain").animate({right: '-100vw'},200);
	setTimeout( function(){
		$(".menuTitles").css('display','none');
		$("#bigImageClose").css('display','inline');
		$("#tvGallery").css('display','none');
		$("#tvContain").css('width','100vw');
		$("#tvContain").css('height','100vh');
		$("#clown").css('display','block');
	},200);
	$("#tvContain").animate({right: '-2px'},200);
});
