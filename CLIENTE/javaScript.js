document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = window.location.pathname;
  const menuItems = document.querySelectorAll(".navbar-item");

  menuItems.forEach((item) => {
    if (item.href.includes(currentLocation)) {
      item.classList.add("active");
    }
  });
});

document.querySelectorAll("button, .navbar-item").forEach((btn) => {
  btn.addEventListener("mousedown", function () {
    this.classList.add("btn-clicked");
  });
  btn.addEventListener("mouseup", function () {
    this.classList.remove("btn-clicked");
  });
});



/* CAPACITACIONES */
var swiper = new Swiper('.swiper-container', {
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	// init: false,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},

  
	breakpoints: {
	  620: {
		slidesPerView: 1,
		spaceBetween: 20,
	  },
	  680: {
		slidesPerView: 2,
		spaceBetween: 40,
	  },
	  920: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1240: {
		slidesPerView: 4,
		spaceBetween: 50,
	  },
	} 
    });