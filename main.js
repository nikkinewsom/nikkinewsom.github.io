

let photo = document.getElementById('photos');
let modal = document.querySelector('.modal');
let image = document.querySelector('.image');
let white = document.querySelector('.white');
let body = document.querySelector('body');
const contact = document.querySelector('.about');


photo.addEventListener('click', openModal);

function openModal() {
    modal.style.display = "block";
    image.style.position = 'unset';
    white.style.position = 'unset';
    body.style.overflow = 'hidden';
    contact.style.display = 'none';
}

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
});

function closeModal() {
    modal.style.display = 'none'
    image.style.position = 'absolute';
    white.style.position = 'relative';
    body.style.overflow = 'scroll';
};

modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});



const aboutBtn = document.getElementById('aboutBtn');

aboutBtn.addEventListener('click', openContact);

function openContact() {
    contact.style.display = 'block'
}