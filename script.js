let menu = document.querySelector(".fixed-menu");

menu.addEventListener("click", function(event) {
    let clickTarget = event.target;
    let activeBtn = document.querySelector(".active")

    if (clickTarget.classList.contains("nav-link")) {
        activeBtn.classList.remove("active");
        clickTarget.classList.add("active")
    }
})