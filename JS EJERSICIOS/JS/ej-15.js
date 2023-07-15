window.onload = function () {
    let btn = document.querySelector(".datos1");

    const changeColor = () => {
        btn.style.color = "red";
    }

    btn.onclick = function () {
        changeColor();
    }

}