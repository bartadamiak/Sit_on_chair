const box1 = document.querySelector('.main-news .row .col-1-3:nth-child(1)');
console.log(box1);
const box2 = document.querySelector('.main-news .row .col-1-3:nth-child(2)');
console.log(box2);
const margarita_bg = document.querySelector('.margarita_bg');
console.log(margarita_bg);
const margarita = document.querySelector('.margarita');
console.log(margarita);
const clair_bg = document.querySelector('.clair_bg');
console.log(clair_bg);
const clair = document.querySelector('.clair');
console.log(clair)

box2.addEventListener('mouseenter', function (event) {
    margarita_bg.classList.add('visible');
    margarita.classList.add('visible')
});
box2.addEventListener('mouseleave', function (event) {
    margarita_bg.classList.remove('visible');
    margarita.classList.remove('visible')
});

box1.addEventListener('mouseenter', function (event) {
    clair_bg.classList.add('visible');
    clair.classList.add('visible')
});
box1.addEventListener('mouseleave', function (event) {
    clair_bg.classList.remove('visible');
    clair.classList.remove('visible')
});

