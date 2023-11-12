
window.addEventListener('DOMContentLoaded', () => {

	const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
		let swiper;

		breakpoint = window.matchMedia(breakpoint);

		const enableSwiper = function (className, settings) {
			swiper = new Swiper(className, settings);

			if (callback) {
				callback(swiper);
			}
		}

		const checker = function () {
			if (breakpoint.matches) {
				return enableSwiper(swiperClass, swiperSettings);
			} else {
				if (swiper !== undefined) swiper.destroy(true, true);
				return;
			}
		};

		breakpoint.addEventListener('change', checker);
		checker();
	}

	resizableSwiper(
		'(max-width: 1460px)',
		'.banner__swiper',
		{
			loop: true,
			autoplay: {
				delay: 3000,
				reverseDirection: true,
			},
			breakpoints: {
				// when window width is >= 320px
				320: {
					slidesPerView: 2,
					spaceBetween: 20
				},
				// when window width is >= 480px
				424: {
					slidesPerView: 3,
					spaceBetween: 30
				},
				// when window width is >= 640px
				768: {
					slidesPerView: 4,
					spaceBetween: 40
				}
			}
		},
	);
});

