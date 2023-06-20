const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", (e) => {

    const x = (e.pageX - btn.offsetLeft);
    const y = (e.pageY - btn.offsetTop);

    btn.style.setProperty("--XPos", x + "px");
    btn.style.setProperty("--YPos", y + "px");

})