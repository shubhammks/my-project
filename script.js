let divs = document.querySelectorAll('.card');
divs.forEach((div) => {
    let dis = div.querySelector('.descri');
    div.addEventListener('click', () => {
        if (dis.style.display === "none") {
            dis.style.display = "block";
        }
        else {
            dis.style.display = "none";
        }
    })
})