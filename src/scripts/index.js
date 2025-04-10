import Swiper from 'swiper/bundle'

import '@/styles/style.scss'
import { constants } from '@/scripts/constants'

const swiper = new Swiper('.swiper', {
  slidesPerView: constants.slidesPerView,
  spaceBetween: constants.spaceBetweenSlides,
  grabCursor: true,

  navigation: {
    nextEl: '.next-button',
    prevEl: '.prev-button'
  }
})
