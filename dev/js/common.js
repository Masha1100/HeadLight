document.addEventListener("DOMContentLoaded", initJs)



function initJs() {
	const d = document;
	const w = window;

	const mn_slider = d.querySelector('.mn-slider__items');
	const ml_slider = d.querySelector('.ml-slider__items');

	// Main Slider -> index.html
	if (mn_slider) {
		$(mn_slider).slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true
		})
	}
	// LEADERS FOR SALE -> index.html
	if (ml_slider) {
		$(ml_slider).slick({
			arrows: false,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true,
			responsive: [
				{
				breakpoint: 1025,
				settings: {
					slidesToShow: 3
				}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 426,
					settings: {
						vertical: true,
						slidesToShow: 1
					}
				}
			]
		})
	}
}

function autoHeight(el) {
	el.style.height = (el.scrollHeight) + "px";
}