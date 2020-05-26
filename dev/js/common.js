document.addEventListener("DOMContentLoaded", initJs)



function initJs() {
	const d = document;
	const w = window;

	const mn_slider = d.querySelector('.mn-slider__items');
	const ml_slider = d.querySelector('.ml-slider__items');

	if (ml_slider) {
		$(ml_slider).slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			dots: true
		})
	}
	if (mn_slider) {
		$(mn_slider).slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			dots: true
		})
	}
}

function autoHeight(el) {
	el.style.height = (el.scrollHeight) + "px";
}