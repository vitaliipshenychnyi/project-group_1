var swiper = new Swiper('.swiper_about-restaurant', {
  slidesPerView: 2,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next_new',
    prevEl: '.swiper-button-prev_new',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

var swiper = new Swiper('.swiper_about-hotel', {
  slidesPerView: 2,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper2-button-next_new',
    prevEl: '.swiper2-button-prev_new',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});
