// $(function() {
//     let divWidth = $(".bg").width();
//     let divHeight = $(".bg").height();
    
//     moveCenter();
//     $(window).resize(function() {
//         moveCenter();
//     })

//     function moveCenter() {
//         let winWidth = $(window).width();
//         let winHeight = $(window).height();

//         $(".bg").css({
//             left: (winWidth- divWidth) / 2,
//             bottom: (winHeight - divHeight) / 2,
//         })
//     }
// })

window.addEventListener("resize", function() {
    
    var txtWidth = document.querySelector(".about-us-container").offsetWidth;
    var txtHeight = document.querySelector(".about-us-container").offsetHeight;
    
    var container = document.querySelector(".about-us-container");
    
    container.style.setProperty("--before-width", txtWidth + "px");
    container.style.setProperty("--before-height", txtHeight + "px");
});

// function resizeBackground() {
//     var containerWidth = $(".about-us-container").outerWidth();
//     var containerHeight = $(".about-us-container").outerHeight();
//     $(".about-us-container::before").css({
//         "width": containerWidth + "px",
//         "height": containerHeight + "px",
//         "background-position": "center" // 添加了这行
//     });
// }

// $(window).on("resize", function() {
//     resizeBackground();
// });

// $(document).ready(function() {
//     resizeBackground();
// });