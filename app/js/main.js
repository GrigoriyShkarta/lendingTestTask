const navElement = document.querySelectorAll('.nav-left-item');
const banners = document.querySelector('.banners-wrapper');
const prevFirst = document.querySelector('#prevFirst');
const nextFirst = document.querySelector('#nextFirst');
const bannersArray = document.querySelectorAll('.banner')

navElement.forEach(function(element) {
	element.addEventListener('click', function() {
	  navElement.forEach(function(el) {
			el.classList.remove('active');
	  	});
	  	this.classList.add('active');
	});
});

let slideIndex = 0;
const slideWidth = bannersArray[0].clientWidth;

function goToSlide(index) {
	banners.style.transform = `translateX(-${slideWidth * index}px)`;
	slideIndex = index;
};

function showPrevSlide() {
	if (slideIndex === 0) {
	  	goToSlide(bannersArray.length - 1);
	} else {
	  	goToSlide(slideIndex - 1);
	}
};

function showNextSlide() {
	console.log(slideIndex, bannersArray);
	if (slideIndex === bannersArray.length - 1) {
	  goToSlide(0);
	} else {
	  goToSlide(slideIndex + 1);
	}
};

prevFirst.addEventListener('click', showPrevSlide);
nextFirst.addEventListener('click', showNextSlide);