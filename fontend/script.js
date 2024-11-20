let divs = document.querySelectorAll('.card');
divs.forEach((div) => {
    let dis = div.querySelector('.descri');
    // let cr=div.querySelector('.cross');
    div.addEventListener('click', () => {
        dis.classList.toggle("block");
        // dis.style.display="block";  
    })
        // console.log(cr);
        // cr.addEventListener('click',()=>{
        //     console.log('ok');
        //     dis.style.display="none";  
        // })
    
})