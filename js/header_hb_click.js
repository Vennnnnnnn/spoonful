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


let hamburger = document.querySelector('.header-hb');
hamburger.addEventListener('click', function(){
    let headerNav = document.querySelector('.header-nav');
    let currentLeft = parseInt(headerNav.style.left);
    headerNav.style.transition = '1s';
    headerNav.style.left = (currentLeft === 0) ? '-555px' : '0';
})


// $(function() {
//     $(".header-hb").click(function() {
//         $(".header-nav").slideToggle("slow", function() {
//             if ($(this).is(":visible")) {
//                 $(this).css("left", "0");
//             } else {
//                 $(this).css("left", "-100%");
//             }
//         });
//     });
// });

$(function() {
    $(".fa-magnifying-glass").click(function() {
        $(".header-nav").stop().animate({
            width: "650px",
        }, 1500);
        $(".header-search").animate({
            width: "200px",
        }, 1500, function() {
            $(this).css("border", "1px solid #ccc");
        });
        $(".header-search").focus()
    })
    $('.banner').on('click', function(event) 
    

    {
        
        if (!$(event.target).closest('.header-icon-search').length) {
            $(".header-search").stop().animate({
                width: "0",
            }, 1500, function() {
                $(this).css("border", "none")
            });
            var navWidth = $(window).width() < 1200 ? "300px" : "555px";
            $(".header-nav").stop().animate({
                width: navWidth,
            }, 1500);
        }
    });
});

function doFirst() {
    document.getElementById("top").addEventListener("click", toTop, false)

$(function () {
    $(window).scroll(function () {
        // let scroll_top = $(this).scrollTop()
        let scroll_top = Math.round($(this).scrollTop()) //四捨五入到整數位
        let window_height = $(window).height() // 665
        let document_height = $(document).height() // 2016

        if (scroll_top > document_height - window_height - 600) {
            $('#top').css({
                opacity: 1,
                transition: '1s',
            })
        } else {
            $('#top').css({
                opacity: 0,
                transition: '0.5s'
            })
        }
    })
})
}
function toTop(e) {
    e.preventDefault();
    $("html,body").animate(
        {
            scrollTop: 0,
        },
        600
    );
}

window.addEventListener('load', doFirst)


// $(function () {
//     $(window).scroll(function() {
//         let scroll_top = Math.round($(this).scrollTop()); // Math.round() 四捨五入
//         let window_height = $(window).height();
//         let document_height = $(document).height();
        
//         if (scroll_top == document_height - window_height) {
//             $(".footer-top-arrw").css({
//                 opacity: 1,
//                 transition: "1s",
//             })
//         } else {
//             $(".footer-top-arrw").css({
//                 opacity: 0,
//             })
//         }

//         // console.log(scroll_top); // 視窗滾動的高度
//         // console.log(window_height); // window 的高度
//         // console.log(document_height); // 內容的高度 ?

//         $(".footer-top-arrw").click(function(e) {
//             e.preventDefault();
//             $("html, body").animate(
//                 {
//                     scrollTop: 0
                    
//                 }, 
//                 600
//             ); // 平滑滾動到頂部並偏移10px
//         });
//     })
// })	
