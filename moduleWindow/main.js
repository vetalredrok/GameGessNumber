'use strict';

const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.massage');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

showModal.forEach(value => {
    value.addEventListener('click', ()=>{
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
});
closeModal.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
document.addEventListener('keydown', function (ev) {
    console.log(ev.key);
    if (ev.key === 'Escape'){
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
    }
})