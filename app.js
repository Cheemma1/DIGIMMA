let links=document.getElementById("navLinks");

function showMenu(){
    links.style.right="0"
};

function hideMenu(){
    links.style.right="-300px"
};

// swiper
const swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	autoHeight: false,
	centeredSlides:true,
	slidesPerView: 1,
  // Responsive breakpoints
  breakpoints: {
		640: {
      slidesPerView:2,
			  spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
			  spaceBetween: 40,
    }
  },

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
    clickable: "true",
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}

});

