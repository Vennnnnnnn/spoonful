// let hamburger = document.querySelector('.header-hb');
// hamburger.addEventListener('click', function(){
//     let headerNav = document.querySelector('.header-nav');
//     let currentLeft = parseInt(headerNav.style.left);
//     headerNav.style.transition = '1s';
//     headerNav.style.left = (currentLeft === 0) ? '-555px' : '0';
// })

// 選單
let hamburger = document.querySelector('.header-hb');
let headerNav = document.querySelector('.header-nav');

hamburger.addEventListener('click', function(){
    let currentLeft = parseInt(headerNav.style.left);
    headerNav.style.transition = '1.5s';
    headerNav.style.left = (currentLeft === 0) ? '-555px' : '0';
});

// 監聽整個文檔的點擊事件
document.addEventListener('click', function(event) {
    // 檢查被點擊的元素是否位於選單內部
    if (!headerNav.contains(event.target) && event.target !== hamburger) {
        // 如果不在選單內部且不是選單按鈕，則關閉選單
        headerNav.style.transition = '1.5s';
        headerNav.style.left = '-555px';
    }
});

$(function() {
    // 點擊搜尋按鈕時的事件，保持不變
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
    });

    // 點擊 banner 時的事件，新增導覽列的設定
    $('.banner').on('click', function(event) {
        // 檢查點擊的目標是否不是 .header-icon-search
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

// $(function() {
//     $(".fa-magnifying-glass").click(function() {
//         $(".header-nav").stop().animate({
//             width: "650px",
//         }, 1500);
//         $(".header-search").animate({
//             width: "200px",
//         }, 1500, function() {
//             $(this).css("border", "1px solid #ccc");
//         });
//         $(".header-search").focus()
//     })
//     $('.banner').on('click', function(event) 
    

//     {
        
//         if (!$(event.target).closest('.header-icon-search').length) {
//             $(".header-search").stop().animate({
//                 width: "0",
//             }, 1500, function() {
//                 $(this).css("border", "none")
//             });
//             var navWidth = $(window).width() < 1200 ? "300px" : "555px";
//             $(".header-nav").stop().animate({
//                 width: navWidth,
//             }, 1500);
//         }
//     });
// });

function doFirst() {
    document.getElementById("top").addEventListener("click", toTop, false)

$(function () {
    $(window).scroll(function () {
        // let scroll_top = $(this).scrollTop()
        let scroll_top = Math.round($(this).scrollTop()) //四捨五入到整數位
        let window_height = $(window).height() // 665
        let document_height = $(document).height() // 2016

        if (scroll_top > document_height - window_height - 400) {
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
