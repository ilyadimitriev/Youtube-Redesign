const start = document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper-container', {
		// Optional parameters
		slidesPerView: 4,
		loop: true,
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.slider-button__next',
		  prevEl: '.slider-button__prev',
		}
	  });

});
