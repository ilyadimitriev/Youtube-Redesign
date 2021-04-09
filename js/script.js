const start = document.addEventListener('DOMContentLoaded', () => {

	const swiper = new Swiper('.swiper-container', {
		// Optional parameters
		slidesPerView: 1,
		loop: true,
		spaceBetween: 20,
		breakpoints: {
			1900: {
				slidesPerView: 6
			},
			1600: {
				slidesPerView: 5
			},
			1300: {
				slidesPerView: 4
			},
			1100: {
				slidesPerView: 3
			},
			800: {
				slidesPerView: 2
			}
		},
	  
		// Navigation arrows
		navigation: {
		  nextEl: '.slider-button__next',
		  prevEl: '.slider-button__prev',
		}
	});

	const searcBtn = document.querySelector('.mobile-search');
	const mobileSearch = document.querySelector('.search');
	searcBtn.addEventListener('click', () => {
		mobileSearch.classList.toggle('is-open');
	});

	window.addEventListener('resize', () => {
		if (document.documentElement.scrollWidth <= 640) {
			swiper.destroy();
		}
	})

});
