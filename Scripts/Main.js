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
	document.getElementById('logos').style.display = "block";
	document.getElementById('logosBtn').style.color = "black";
	document.getElementById('albumArt').style.display = "none";
	document.getElementById('albumArtBtn').style.color = "white";
	document.getElementById('posters').style.display = "none";
	document.getElementById('postersBtn').style.color = "white";
	document.getElementById('videos').style.display = "none";
	document.getElementById('videosBtn').style.color = "white";
};

document.getElementById('postersBtn').onclick = function(){
	window.scrollTo(0,0);
	document.getElementById('logos').style.display = "none";
	document.getElementById('logosBtn').style.color = "white";
	document.getElementById('albumArt').style.display = "none";
	document.getElementById('albumArtBtn').style.color = "white";
	document.getElementById('posters').style.display = "block";
	document.getElementById('postersBtn').style.color = "black";
	document.getElementById('videos').style.display = "none";
	document.getElementById('videosBtn').style.color = "white";
};

document.getElementById('albumArtBtn').onclick = function(){
	window.scrollTo(0,0);
	document.getElementById('logos').style.display = "none";
	document.getElementById('logosBtn').style.color = "white";
	document.getElementById('albumArt').style.display = "block";
	document.getElementById('albumArtBtn').style.color = "black";
	document.getElementById('posters').style.display = "none";
	document.getElementById('postersBtn').style.color = "white";
	document.getElementById('videos').style.display = "none";
	document.getElementById('videosBtn').style.color = "white";
};

document.getElementById('videosBtn').onclick = function(){
	window.scrollTo(0,0);
	document.getElementById('logos').style.display = "none";
	document.getElementById('logosBtn').style.color = "white";
	document.getElementById('albumArt').style.display = "none";
	document.getElementById('albumArtBtn').style.color = "white";
	document.getElementById('posters').style.display = "none";
	document.getElementById('postersBtn').style.color = "white";
	document.getElementById('videos').style.display = "block";
	document.getElementById('videosBtn').style.color = "black";
};