// функціонал слайдеру секції about-restaurant
var swiper = new Swiper('.js-swiper_about-restaurant', {
  slidesPerView: 2,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.js-swiper-button-next',
    prevEl: '.js-swiper-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

// функціонал слайдеру секції about-hotel
var swiper = new Swiper('.js-swiper_about-hotel', {
  slidesPerView: 2,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.js-swiper2-button-next',
    prevEl: '.js-swiper2-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

// функціонал слайдеру секції about-kitchent сторінки RESTAURANT
var swiper = new Swiper('.js-swiper_about-kitchen', {
  slidesPerView: 2,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.js-swiper3-button-next',
    prevEl: '.js-swiper3-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

// функціонал слайдеру секції rum-lux сторінки HOTEL
var swiper = new Swiper('.js-swiper_room-lux', {
  slidesPerView: 2,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.js-swiper4-button-next',
    prevEl: '.js-swiper4-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});


// функціонал слайдеру секції rum-2 сторінки HOTEL
var swiper = new Swiper('.js-swiper_room-2', {
  slidesPerView: 2,
  spaceBetween: 25,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.js-swiper5-button-next',
    prevEl: '.js-swiper5-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 40,
    },
  },
});

// var swiper = new Swiper('.swiper_room-hero', {
//   direction: 'horizontal',
//   slidesPerView: 1,
//   spaceBetween: 0,
//   slidesPerGroup: 1,
//   loop: true,
//   loopFillGroupWithBlank: true,
//   autoplay: {
//     delay: 3000,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next-room',
//     prevEl: '.swiper-button-prev-room',
//   },
// });
