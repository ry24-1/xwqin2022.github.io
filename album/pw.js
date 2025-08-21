(function() {
    var password = prompt("本相册受密码保护，请键入以阅览:");
    if (password === "998244353") {
        document.getElementById("protect").style.display = "block";
    } else {
        alert("Incorrect password. Access denied.");
        window.location.href = "/album/";
    }
})();