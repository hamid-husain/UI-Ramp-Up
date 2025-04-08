import Swiper from 'swiper'
import 'swiper/scss'

import '@/styles/style.scss'

const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  grabCursor: true,

  navigation: {
    nextEl: '.next-button',
    prevEl: '.prev-button'
  }
})
