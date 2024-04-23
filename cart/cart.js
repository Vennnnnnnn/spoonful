// let remove = document.querySelectorAll(".remove");
// remove.addEventListener("click", AddAndRemove);
function AddAndRemove() {
    let add = document.querySelectorAll(".add");
    for (let i = 0; i < add.length; i++) {
        let nmu = document.querySelectorAll(".cart-card-num");
        nmu[i].value = parseInt(nmu[i].value)+ 1;
    }
    

    // if ()
}
let add = document.querySelectorAll(".add");
for (let i = 0; i < add.length; i++) {
    
    add[i].addEventListener("click", AddAndRemove,false);
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
