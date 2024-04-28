// $(function() {
//     $(".header-icon").click(function() {
//         $(this).slideToggle(1500, 'easeOutBack');
//     })
// })

function toggleMenu() {
    let nav = document.querySelector('.header-nav');
    nav.classList.toggle('show');
}

let hbMenu = document.querySelector('.header-hb');
hbMenu.addEventListener('click', toggleMenu);