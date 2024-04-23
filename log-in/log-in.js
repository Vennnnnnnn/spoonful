function LogIn() {
    let memAccoun = "cid101@gmail.com"
    let memPsw = "cid101101"
    let accoun = document.querySelector("#member-login-account-number").value;
    let psw = document.querySelector("#member-login-psw").value;

    if (accoun === memAccoun && psw === memPsw) {
        window.location.href = "home-0404.html"
    } else {
        alert("帳號或密碼不正確！")
    }
}
let logIn = document.querySelector(".login-button");
logIn.addEventListener("click", LogIn);