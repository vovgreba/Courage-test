import Swiper from 'swiper';
import { Pagination, Navigation, FreeMode, Scrollbar } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import 'swiper/css';


const mySwiperContent = new Swiper('.mySwiper-content', {
  modules: [ Scrollbar],
  direction: "vertical",
  slidesPerView: "auto",
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
});



const swiper = new Swiper('.mySwiper-bg', {
  modules: [ Pagination],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  allowTouchMove: true,
});

const mySwiper = new Swiper('.mySwiper-tours', {
  modules: [Navigation],
  loop: false,
  slidesPerView: 'auto',
  mousewheel: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


