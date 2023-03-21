const hamburguer = document.getElementById("hamburguer")

const comeco = document.getElementById("comeco")

hamburguer.addEventListener("click",()=>{
    hamburguer.classList.toggle("active")
    comeco.classList.toggle("active")
})
documen.getElementById("nav-link").forEach(n => n.addEventListener("click",()=>{
    hamburguer.classList.remove("active")
    comeco.classList.remove("active")
}) 
    
);