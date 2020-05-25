document.addEventListener("DOMContentLoaded", initJs)



function initJs() {
	const d = document;
	const w = window;

	const mn_slider = d.querySelector('.mn-slider__items');

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