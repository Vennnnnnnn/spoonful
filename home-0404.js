// function toggleMenu() {
//     let nav = document.querySelector('.header-nav');
//     nav.classList.toggle('show');
// }

// let hbMenu = document.querySelector('.header-hb');
// hbMenu.addEventListener('click', toggleMenu);

// $(function() {
//     $(window).load(function() {
//         $(".detail-pic").clone().appenTo(".detail-container");
//     })

// })


let detail = document.querySelector('.detail');

detail.addEventListener('click', function () {
    // alert(123)
});

let pictures = ['./pic/注重細節/12-w367-h462.jpg',
    './pic/注重細節/13-w367-h462.jpg',
    './pic/注重細節/7 (2)-w367-h462.jpg',
    './pic/注重細節/4-fotor-w367-h462.jpg']

let index = 0;

// setInterval(function() {
//     generatePictureElement();
// }, 3000); 


function generatePictureElement() {
    const container = document.getElementsByClassName('detail-container')[0];
    const picture = document.createElement('div');
    picture.classList.add('detail-pic');
    const img = document.createElement('img');

    img.style.width = 376 + 'px';
    img.style.height = 462 + 'px';

    img.src = pictures[index];

    index++;

    if (index > 3) {
        index = 0;
    }

    img.alt = 'Dynamic Image';
    picture.appendChild(img);
    container.appendChild(picture);
}

function removeChildPic() {
    const container = document.querySelector('.detail-container');
    const firstElement = container.querySelector('.detail-pic');
    if (firstElement) {
        container.removeChild(firstElement);
    }
}

let moveSite = 0;

// setInterval(function() {
//     moveSite--;
//     moveTranslate(moveSite);  
// }, 20);

// const detailPics = document.querySelectorAll('.detail-pic');
// setInterval(function() {
//     const container = document.querySelector('.detail-container');

//     detailPics.forEach(detailPic => {
//         const clonedDetailPic = detailPic.cloneNode(true); 
//         container.appendChild(clonedDetailPic);
//     });
// }, 15000);


function moveTranslate(moveSite) {
    const elements = document.querySelectorAll('.detail-pic');
    elements.forEach(element => {
        element.style.transform = `translateX(${moveSite}px)`;
    });
}

document.addEventListener('DOMContentLoaded', function () {
    let links = document.querySelectorAll('.product-card');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            if (link.getAttribute('href') == '#') {
                e.preventDefault();
            }
        });
    });
});

// jQuery(document).ready(function ($) {
//     "use strict";
//     //  TESTIMONIALS CAROUSEL HOOK
//     $('.detail-container').owlCarousel({
//         loop: true,
//         center: true,
//         items: 3,
//         margin: 0,
//         autoplay: true,
//         dots: true,
//         autoplayTimeout: 8500,
//         smartSpeed: 450,
//         responsive: {
//             0: {
//                 items: 1
//             },
//             768: {
//                 items: 2
//             },
//             1170: {
//                 items: 3
//             }
//         }
//     });
// });