import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


import slider from './components/slider'
import dropdown from './components/dropdown'

// burger

const burger = document.querySelectorAll('.header_burger')
const mobileMenu = document.querySelector('.mobile-menu')
const closeBtn = document.querySelectorAll('.close')
const arrayBurger = [...burger]
const arrayClose = [...closeBtn]

arrayBurger.forEach(el => {

  el.addEventListener('click', ev => {
    mobileMenu.classList.remove('scale-down-bl')
    mobileMenu.classList.add('mobile-menu--show')
    mobileMenu.classList.add('scale-up-left')
  })
})
arrayClose.forEach(el=> {
  el.addEventListener('click', ev => {
    mobileMenu.classList.remove('scale-up-left')
    mobileMenu.classList.toggle('scale-down-bl');
    mobileMenu.classList.remove('mobile-menu--show')
  })
})

