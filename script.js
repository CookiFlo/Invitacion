function abrirSobre(){

const intro=document.getElementById("intro")
const hojas=document.querySelectorAll("section")

intro.classList.add("ocultar")

setTimeout(()=>{

intro.style.display="none"

hojas.forEach(h=>{
if(h.id!=="intro"){
h.classList.remove("hidden")
}
})

document.body.style.overflow="auto"

// 🔥 empezar en Hoja 1 fijo
setTimeout(()=>{
document.getElementById("hoja1").scrollIntoView({behavior:"auto"})
},50)

},300)
}

// 🔥 CORRECCIÓN IMPORTANTE: usar offsetTop

function bajar(){
window.scrollTo({
top: document.getElementById("hoja2").offsetTop,
behavior:"smooth"
})
}

function bajarA3(){
window.scrollTo({
top: document.getElementById("hoja3").offsetTop,
behavior:"smooth"
})
}

function irHoja4(){
window.scrollTo({
top: document.getElementById("hoja4").offsetTop,
behavior:"smooth"
})
}

function volverHoja3(){
window.scrollTo({
top: document.getElementById("hoja3").offsetTop,
behavior:"smooth"
})
}

function irHoja5(){
window.scrollTo({
top: document.getElementById("hoja5").offsetTop,
behavior:"smooth"
})
}

function volverHoja4(){
window.scrollTo({
top: document.getElementById("hoja4").offsetTop,
behavior:"smooth"
})
}

function irHoja6(){
window.scrollTo({
top: document.getElementById("hoja6").offsetTop,
behavior:"smooth"
})
}

function volverHoja5(){
window.scrollTo({
top: document.getElementById("hoja5").offsetTop,
behavior:"smooth"
})
}

// contador
const fechaBoda=new Date("2027-01-15T00:00:00")

function actualizarContador(){

const ahora=new Date()
const diferencia=fechaBoda-ahora

document.getElementById("dias").innerHTML=Math.max(0,Math.floor(diferencia/(1000*60*60*24)))
document.getElementById("horas").innerHTML=Math.max(0,Math.floor((diferencia/(1000*60*60))%24))
document.getElementById("minutos").innerHTML=Math.max(0,Math.floor((diferencia/(1000*60))%60))
document.getElementById("segundos").innerHTML=Math.max(0,Math.floor((diferencia/1000)%60))
}

actualizarContador()
setInterval(actualizarContador,1000)
