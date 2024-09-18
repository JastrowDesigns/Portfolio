document.getElementById('homeBtn').onclick = function(){
	document.getElementById('gallaryMenu').classList.remove("GalMenuOpen");
	document.getElementById('home').style.display = "block";
	document.getElementById('homeBtn').style.color = "grey";
	document.getElementById('gallary').style.display = "none";
	document.getElementById('gallaryBtn').style.color = "white";
	document.getElementById('contact').style.display = "none";
	document.getElementById('contactBtn').style.color = "white";
};

document.getElementById('gallaryBtn').onclick = function(){
	document.getElementById('gallaryMenu').classList.add("GalMenuOpen");
	document.getElementById('logosBtn').style.color = "black";
	document.getElementById('home').style.display = "none";
	document.getElementById('homeBtn').style.color = "white";
	document.getElementById('gallary').style.display = "block";
	document.getElementById('gallaryBtn').style.color = "grey";
	document.getElementById('contact').style.display = "none";
	document.getElementById('contactBtn').style.color = "white";
};

document.getElementById('contactBtn').onclick = function(){
	document.getElementById('gallaryMenu').classList.remove("GalMenuOpen");
	document.getElementById('home').style.display = "none";
	document.getElementById('homeBtn').style.color = "white";
	document.getElementById('gallary').style.display = "none";
	document.getElementById('gallaryBtn').style.color = "white";
	document.getElementById('contact').style.display = "block";
	document.getElementById('contactBtn').style.color = "grey";
};

document.getElementById('logosBtn').onclick = function(){
	window.scrollTo(0,0);
	var logos = document.getElementsByClassName('logos');
	for (var i = 0; i < logos.length; i++) {
	  logos[i].style.display = "flex";
	}
	document.getElementById('logosBtn').style.color = "black";

	var albumArts = document.getElementsByClassName('albumArt');
	for (var i = 0; i < albumArts.length; i++) {
		albumArts[i].style.display = "none";
	}
	document.getElementById('albumArtBtn').style.color = "white";

	var posters = document.getElementsByClassName('posters');
	for (var i = 0; i < posters.length; i++) {
		posters[i].style.display = "none";
	}
	document.getElementById('postersBtn').style.color = "white";

	var videos = document.getElementsByClassName('videos');
	for (var i = 0; i < videos.length; i++) {
		videos[i].style.display = "none";
	}
	document.getElementById('videosBtn').style.color = "white";
};


document.getElementById('postersBtn').onclick = function(){
	window.scrollTo(0,0);
	var logos = document.getElementsByClassName('logos');
	for (var i = 0; i < logos.length; i++) {
	  logos[i].style.display = "none";
	}
	document.getElementById('logosBtn').style.color = "white";

	var albumArts = document.getElementsByClassName('albumArt');
	for (var i = 0; i < albumArts.length; i++) {
		albumArts[i].style.display = "none";
	}
	document.getElementById('albumArtBtn').style.color = "white";

	var posters = document.getElementsByClassName('posters');
	for (var i = 0; i < posters.length; i++) {
		posters[i].style.display = "flex";
	}
	document.getElementById('postersBtn').style.color = "black";

	var videos = document.getElementsByClassName('videos');
	for (var i = 0; i < videos.length; i++) {
		videos[i].style.display = "none";
	}
	document.getElementById('videosBtn').style.color = "white";
};


document.getElementById('albumArtBtn').onclick = function(){
	window.scrollTo(0,0);
	var logos = document.getElementsByClassName('logos');
	for (var i = 0; i < logos.length; i++) {
	  logos[i].style.display = "none";
	}
	document.getElementById('logosBtn').style.color = "white";

	var albumArts = document.getElementsByClassName('albumArt');
	for (var i = 0; i < albumArts.length; i++) {
		albumArts[i].style.display = "flex";
	}
	document.getElementById('albumArtBtn').style.color = "black";

	var posters = document.getElementsByClassName('posters');
	for (var i = 0; i < posters.length; i++) {
		posters[i].style.display = "none";
	}
	document.getElementById('postersBtn').style.color = "white";

	var videos = document.getElementsByClassName('videos');
	for (var i = 0; i < videos.length; i++) {
		videos[i].style.display = "none";
	}
	document.getElementById('videosBtn').style.color = "white";
};


document.getElementById('videosBtn').onclick = function(){
	window.scrollTo(0,0);
	var logos = document.getElementsByClassName('logos');
	for (var i = 0; i < logos.length; i++) {
	  logos[i].style.display = "none";
	}
	document.getElementById('logosBtn').style.color = "white";

	var albumArts = document.getElementsByClassName('albumArt');
	for (var i = 0; i < albumArts.length; i++) {
		albumArts[i].style.display = "none";
	}
	document.getElementById('albumArtBtn').style.color = "white";

	var posters = document.getElementsByClassName('posters');
	for (var i = 0; i < posters.length; i++) {
		posters[i].style.display = "none";
	}
	document.getElementById('postersBtn').style.color = "white";

	var videos = document.getElementsByClassName('videos');
	for (var i = 0; i < videos.length; i++) {
		videos[i].style.display = "block";
	}
	document.getElementById('videosBtn').style.color = "black";
};


document.getElementById('uxBtn').onclick = function(){
	window.scrollTo(0,0);
	var logos = document.getElementsByClassName('logos');
	for (var i = 0; i < logos.length; i++) {
	  logos[i].style.display = "none";
	}
	document.getElementById('logosBtn').style.color = "white";

	var albumArts = document.getElementsByClassName('albumArt');
	for (var i = 0; i < albumArts.length; i++) {
		albumArts[i].style.display = "none";
	}
	document.getElementById('albumArtBtn').style.color = "white";

	var posters = document.getElementsByClassName('posters');
	for (var i = 0; i < posters.length; i++) {
		posters[i].style.display = "none";
	}
	document.getElementById('postersBtn').style.color = "white";

	var videos = document.getElementsByClassName('videos');
	for (var i = 0; i < videos.length; i++) {
		videos[i].style.display = "none";
	}
	document.getElementById('videosBtn').style.color = "white";

	var ux = document.getElementsByClassName('ux');
	for (var i = 0; i < videos.length; i++) {
		ux[i].style.display = "flex";
	}
	document.getElementById('uxBtn').style.color = "black";
};