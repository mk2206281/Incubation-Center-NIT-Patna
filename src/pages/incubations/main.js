/*=============== SWIPER JS ===============*/ 
// core version + navigation, pagination modules:


import Swiper from 'swiper'; 
// import "swiper/swiper-bundle.min.js";
// import { Navigation, Pagination } from 'swiper/modules';


// import Swiper and modules styles


const SwiperIncubations = () => { 

let swiperCards = new Swiper(".card__incubationcontent", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
    },
  });
}

export default SwiperIncubations;