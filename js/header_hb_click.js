// $(function() {
//     $(".header-icon").click(function() {
//         $(this).slideToggle(1500, 'easeOutBack');
//     })
// })

// function toggleMenu() {
//     let nav = document.querySelector('.header-nav');
//     nav.classList.toggle('show');
// }

// let hbMenu = document.querySelector('.header-hb');
// hbMenu.addEventListener('click', toggleMenu);

// $(function() {
//     $(".header-hb").click(function() {
//         $(".header-nav").stop(true).animate({
//             left: "0",
//         }, 1500, "easeInCubic");
//     }, function() {
//         $(".header-nav").stop(true).animate({
//             left: "-555px",
//         }, 1500, "easeOutBounce");
//     });
// });

// $(function() {
//     $(".header-hb").click(function() {
//         $(".header-nav").stop(true).animate({
//             left: "0",
//         }, "easeOutBack");
//     },function() {
//         $(".header-nav").stop(true).animate({
//             left: "-555px",
//         }, "easeOutBack");
//     });
// });

$(function() {
    $(".header-hb").click(function() {
        $(".header-nav").slideToggle("slow", function() {
            if ($(this).is(":visible")) {
                $(this).css("left", "0");
            } else {
                $(this).css("left", "-100%");
            }
        });
    });
});