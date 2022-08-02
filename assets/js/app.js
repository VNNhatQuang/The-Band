// SLIDER
const slider = document.querySelector("#slider");
const textHeading = document.querySelector(".text-heading");
const textDescription = document.querySelector(".text-description");

var arrSliders = [
    "url('./assets/img/slider/slider1.jpg') top center / cover no-repeat",
    "url('./assets/img/slider/slider2.jpg') top center / cover no-repeat",
    "url('./assets/img/slider/slider3.jpg') top center / cover no-repeat"
];
var arrHeadSliders = ["Chicago", "Los Angeles", "New York"];
var arrDescSliders = ["Thank you, Chicago - A night we won't forget.", "We had the best time playing at Venice Beach!", "The atmosphere in New York is lorem ipsum."];
var index = 0;

setInterval(function() {
    Object.assign(slider.style, {
        background: arrSliders[index],
    });
    textHeading.innerHTML = arrHeadSliders[index];
    textDescription.innerHTML = arrDescSliders[index];

    index++;
    if (index > arrSliders.length - 1) index = 0;
}, 3000)




// MODAL TICKET
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')

// Hàm hiển thị modal mua vé (thêm class open vào modal)
function showBuyTickets() {
    modal.classList.add('open');
}

// Hàm ẩn modal mua vé (gỡ bỏ class open của modal đi)
function hideBuyTickets() {
    modal.classList.remove('open');
}

// Lặp qua từng thẻ button và nghe hành vi click
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

// Nghe hành vi click vào button close
modalClose.addEventListener('click', hideBuyTickets);

modal.addEventListener('click', hideBuyTickets);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});






// MOBILE MENU HEADER
const menuBtn = document.querySelector(".mobile-menu-btn");
const nav = document.querySelector("#nav");
const main = document.getElementById("main");

menuBtn.onclick = function() {
    nav.classList.toggle("overflow");
}

main.onclick = function() {}

console.log(main)