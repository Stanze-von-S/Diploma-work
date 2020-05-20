import './blocks/about.css';
import '../node_modules/swiper/js/swiper.min.js';
import '../node_modules/swiper/css/swiper.min.css';
import Swiper from 'swiper';

let mySwiper = new Swiper('.swiper-container', {
    direction: "horizontal",
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,      
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    fadeEffect: {
        crossFade: 'true'
    },
    breakpoints: {
        1000: {
            width: 1232.0675,
            spaceBetween: 16,
            slidesPerView: 3,
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
        },
        700: {
            width: 584,
            spaceBetween: 8,
            slidesPerView: 2,  
            navigation: {
              nextEl: null,
              prevEl: null,
            },          
        },
        309: {
            slidesPerView: 1,
            width: 256,
            spaceBetween: 8,
            navigation: {
              nextEl: null,
              prevEl: null,
            },   
        },
    }
});

mySwiper.navigation.update();