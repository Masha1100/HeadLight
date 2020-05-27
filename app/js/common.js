document.addEventListener("DOMContentLoaded", initJs)

function maxBrandItem(brands, brands_inner) {
	let size = 0
	for (let i = 0; i < brands.length; i++) {
		if (size < brands_inner.clientWidth) {
			brands[i].style.display = 'block';
			size += brands[i].offsetWidth
		} else {
			brands[i].style.display = 'none';
		}
	}
}

function initJs() {
	const d = document;
	const w = window;

	const mn_slider = d.querySelector('.mn-slider__items');
	const ml_slider = d.querySelector('.ml-slider__items');
	const burger = d.querySelector('.header-mob__burger');
	const header_mob = d.querySelector('.header-mob__sub');
	const brands = d.querySelectorAll('.brands__items');
	const brands_inner = d.querySelector('.brands__inner');
	const brands_deploy = d.querySelector('.brands .deploy');

	function autoHeight(el) {
		el.style.height = (el.scrollHeight) + "px";
	}

	burger.addEventListener('click', ()=> {
		if(burger.classList.contains('active')){
			if(header_mob) {
				burger.classList.remove('active')
				header_mob.style.opacity = 0
				header_mob.style.zIndex = -1
				d.querySelector('body').style.overflow="auto"
			}
		} else {
			if(header_mob) {
				burger.classList.add('active')
				header_mob.style.opacity = 1
				header_mob.style.zIndex = 900
				d.querySelector('body').style.overflow="hidden"
			}
		}
	})
	brands_deploy.addEventListener('click', e => {
		if (brands_deploy.classList.contains('active')) {
			if (brands  && brands_inner) {
				maxBrandItem(brands, brands_inner)
				brands_deploy.textContent = 'Больше'
				brands_deploy.classList.remove('active');
			}
		} else {
			if (brands) {
				for (let i = 0; i < brands.length; i++) {
					brands[i].style.display = 'block';
				}
				brands_deploy.textContent = 'Меньше'
				brands_deploy.classList.add('active');
			}
		}
	})
	if (brands && brands_inner) {
		maxBrandItem(brands, brands_inner)
	}
	// Main Slider -> index.html
	if (mn_slider) {
		$(mn_slider).slick({
			arrows: false,
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
			responsive: [{
					breakpoint: 1025,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 426,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		})
	}
}
