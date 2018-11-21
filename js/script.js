///////////////////////////// NEWS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const box1 = document.querySelector('.main-news .row .col-1-3:nth-child(1)');

const box2 = document.querySelector('.main-news .row .col-1-3:nth-child(2)');

const margarita_bg = document.querySelector('.margarita_bg');

const margarita = document.querySelector('.margarita');

const clair_bg = document.querySelector('.clair_bg');

const clair = document.querySelector('.clair');


box2.addEventListener('mouseenter', function (event) {
    margarita_bg.classList.add('invisible');
    margarita.classList.add('invisible')
});
box2.addEventListener('mouseleave', function (event) {
    margarita_bg.classList.remove('invisible');
    margarita.classList.remove('invisible')
});

box1.addEventListener('mouseenter', function (event) {
    clair_bg.classList.add('invisible');
    clair.classList.add('invisible')
});
box1.addEventListener('mouseleave', function (event) {
    clair_bg.classList.remove('invisible');
    clair.classList.remove('invisible')
});

//////////////////////////////////////////// SLIDER \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var next = document.querySelector('.banner-next');
var prev = document.querySelector('.banner-prev');
var slider_chair = document.querySelectorAll('.slider_chair');
console.log(slider_chair)

slider_chair[0].classList.add('visible')
var counter = 0;

next.addEventListener('click', function (event) {
    slider_chair[counter].classList.remove('visible');
    if (counter >= slider_chair.length - 1) {
        counter = 0;
    }
    else {
        counter ++;
    }
    slider_chair[counter].classList.add('visible');

});

prev.addEventListener('click', function (event) {
    slider_chair[counter].classList.remove('visible');
    if (counter == 0) {
        counter = slider_chair.length - 1;
    }
    else {
        counter--;
    }
    slider_chair[counter].classList.add('visible');


});



