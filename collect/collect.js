$(".X-btn").click(function(event) {
    event.preventDefault(); // 阻止链接的默认行为
    event.stopPropagation();
    $(this).closest(".collect-card").remove();
})

$(".fa-heart").click(function(event) {
    event.preventDefault(); // 阻止链接的默认行为
    event.stopPropagation();
    $(this).closest(".collect-card").remove();
})

