var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menu-item");
const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menuIcon = document.querySelector(".menu-icon");
const body = document.querySelector(".content");

function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(
    function(menuItem) {
        menuItem.addEventListener("click", toggleMenu);
    }
)
$(document).ready(function() {
    $(window).scroll(function() {
        $('.header-inner').toggleClass("active", ($(window).scrollTop() > 20));
        $('.menu').toggleClass("active", ($(window).scrollTop() > 20));
        $('.menu-icon').toggleClass("logo-active", ($(window).scrollTop() > 20));
        $('.close-icon').toggleClass("logo-active", ($(window).scrollTop() > 20));
        $('.logo').toggleClass("logo-active", ($(window).scrollTop() > 20));
        $('.nav-item').toggleClass("active", ($(window).scrollTop() > 20));
    });
});

var inputsTel = document.querySelectorAll('input[type="tel"]');

Inputmask({
    "mask": "+38(099) 999-99-99",
    showMaskOnHover: false
}).mask(inputsTel)


jQuery.validator.addMethod("phoneUK", function(value, element) {
    return /^((?!_).)*$/gi.test(value);
}, "Не правильно введений номер телефону");


$("#basic-form").validate({
    rules: {
        name: {
            required: true,
            minlength: 3
        },
        phone: {
            required: true,
            phoneUK: true
        },
        email: {
            required: true,
            email: true
        },
    },
    messages: {
        name: {
            required: "Будь ласка, введіть ім'я",
            minlength: "! Введіть мінімум 3 символи "
        },
        phone: {
            required: "Будь ласка, введіть номер телефону",
        },
        email: {
            required: "Будь ласка, введіть електронну пошту",
            email: "Електронна пошта  за зразком: abc@domain.tld"
        },

    },
    validClass: "has-valid",
    errorClass: "has-error",
});



function myFunction(event){
x=event.target
console.log(x)
let classList = document.querySelector('input.form-control').classList.contains('has-valid');
console.log(x.className)

if (event.target.classList === true){
    let success= document.querySelector('.has-success')
    success.classList.add('has-valid')
    console.log(success.classList)
    success.style.display="inline"
}

}




$(document).on('click', '[data-toggle="modal"]', function() {
    var target = $(this).attr('data-target');
    console.log(target);
    $(target).addClass('show');
    return false;
});

$('.modal .close').on('click', function() {
    $(this).closest('.modal').removeClass('show');
    return false;
})

const selectSingle = document.querySelector('select');
const selectSingle_title = selectSingle.querySelector('.jselect__display ');
const selectSingle_labels = selectSingle.querySelectorAll('.jselect__display ');

selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}


