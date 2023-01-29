var swiper = new Swiper('.mySwiper', {
  slidesPerView: 2,
  spaceBetween: 40,
  slidesPerGroup: 2,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.swiper-button-next_new',
    prevEl: '.swiper-button-prev_new',
  },
});
