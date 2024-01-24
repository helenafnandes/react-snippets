'use strict';

// store selections in variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');

const openModal = function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < btnsShowModal.length; i++){
    btnsShowModal[i].addEventListener('click', openModal);
}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//btnCloseModal.addEventListener('click', closeModal());
// it's not about calling the function
// if it has the (), the function will be called when the js executes this line

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
    //console.log('Any key was pressed');

    // when an event happens, it created an object
    // and we can access info of this event in the event handler function (here!)

    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})