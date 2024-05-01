// let remove = document.querySelectorAll(".remove");
// remove.addEventListener("click", AddAndRemove);
let add    = document.querySelectorAll(".add");
let remove = document.querySelectorAll(".remove");
let num    = document.querySelectorAll(".cart-card-num");
let price  = document.querySelectorAll(".cart-card-price");

let total = 3102;
let showTotal = document.querySelector('.cart-amount');
let showTotalAndDiscount = document.querySelector('.cart-subtotal-price');
let cartCheckoutPrice = document.querySelector('.cart-checkout-price');

let addAndRemove = [add, remove];

for (let i = 0; i < addAndRemove.length; i++) {
    for (let j = 0; j < addAndRemove[i].length; j++) {
        if (i === 0) {
            add[j].addEventListener("click", function() {
                num[j].value = parseInt(num[j].value) + 1;
                
                let addPrice = (parseInt(price[j].innerHTML.trim().split(" ")[1]) / (num[j].value - 1)) * num[j].value;

                total += parseInt(price[j].innerHTML.trim().split(" ")[1]) / (num[j].value - 1);

                showTotal.innerHTML = cartCheckoutPrice.innerHTML = showTotalAndDiscount.innerHTML = `$ ${total}`;
                // showTotalAndDiscount.innerHTML = `$ ${total}`;

                price[j].innerHTML = `$ ${addPrice}`;
            });
        } else {
            remove[j].addEventListener("click", function() {
                if (parseInt(num[j].value) <= 1) {
                    return;
                }
                num[j].value = parseInt(num[j].value) - 1;
                
                let singleItemPrice = (parseInt(price[j].innerHTML.trim().split(" ")[1]) / (parseInt(num[j].value) + 1));
                
                let subPrice = singleItemPrice * num[j].value;

                total -= singleItemPrice;
                showTotal.innerHTML = cartCheckoutPrice.innerHTML = showTotalAndDiscount.innerHTML = `$ ${total}`;

                price[j].innerHTML = `$ ${subPrice}`;
            });
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // 获取所有的 <a> 标签
    var links = document.querySelectorAll(".pointer");

    // 遍历所有的 <a> 标签，并为它们添加点击事件监听器
    links.forEach(function(link) {
        // 阻止默认行为
        link.addEventListener("click", function(event) {
            event.preventDefault();
        });
    });
});
