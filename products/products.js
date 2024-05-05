// $(function() {
//     $(".header-search").on("input", function() {
//         searchProduct();
//     })

//     function searchProduct() {
//         let productName = $(".header-search").val().trim().toLowerCase(); // 忽略大小写

//         $(".products-list-row .products-card").each(function() {
//             let item = $(this).attr("data-item");
//             // 检查是否定义了item
//             if (item) {
//                 item = item.trim().toLowerCase(); // 忽略大小写

//                 if (productName === "") { // 如果搜索框为空，显示所有商品
//                     $(this).show();
//                 } else if (item === productName) { // 只显示与搜索关键词完全匹配的产品
//                     $(this).show();
//                 } else {
//                     $(this).hide();
//                 }
//             }
//             console.log(item)
//         });
        
//     }
// });

let search = document.querySelector('.header-search');
let count = 0;

search.addEventListener('input', function(){
    let products = document.querySelectorAll('.products-card');
    let inputValue = search.value;

    if (inputValue == '') {
        count = 0; 
        document.querySelector('.products-list-row').style.justifyContent = 'space-between';
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = 'block';
        }
    } else {
        for (let i = 0; i < products.length; i++) {
            if (inputValue === products[i].getAttribute('data-item')) {
                products[i].style.display = 'block';
                count++;
            } else {
                products[i].style.display = 'none';
            }
        }
    }

    if (count == 2) {
        document.querySelector('.products-list-row').style.justifyContent = 'flex-start';

        for (let i = 0; i < products.length; i++) {
            products[i].style.margin = '0 27px 70px 27px';
        }
    } 
});

let search_1 = document.querySelector('.search');
let count_1 = 0;

search_1.addEventListener('input', function(){
    let products = document.querySelectorAll('.products-card');
    let inputValue = search.value;

    if (inputValue == '') {
        count_1 = 0; 
        document.querySelector('.products-list-row').style.justifyContent = 'space-between';
        for (let i = 0; i < products.length; i++) {
            products[i].style.display = 'block';
        }
    } else {
        for (let i = 0; i < products.length; i++) {
            if (inputValue === products[i].getAttribute('data-item')) {
                products[i].style.display = 'block';
                count_1++;
            } else {
                products[i].style.display = 'none';
            }
        }
    }

    if (count == 2) {
        document.querySelector('.products-list-row').style.justifyContent = 'flex-start';

        for (let i = 0; i < products.length; i++) {
            products[i].style.margin = '0 27px 70px 27px';
        }
    } 
});
