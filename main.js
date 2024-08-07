let box = document.querySelectorAll('.box');
box.forEach((color)=>{
    color.addEventListener("click", ()=>{
        document.body.style.backgroundColor = color.id;
    })
})