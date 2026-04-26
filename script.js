function abrirSobre(){

const intro = document.getElementById("intro")
const hoja1 = document.getElementById("hoja1")
const hoja2 = document.getElementById("hoja2")
const hoja3 = document.getElementById("hoja3")
const hoja4 = document.getElementById("hoja4")

intro.classList.add("ocultar")

setTimeout(()=>{

intro.style.display="none"

hoja1.classList.remove("hidden")
hoja2.classList.remove("hidden")
hoja3.classList.remove("hidden")
hoja4.classList.remove("hidden")

setTimeout(()=>{
hoja1.classList.add("mostrar")
},50)

document.body.style.overflow = "auto"
window.scrollTo(0,0)

},300)

}

// scroll
function bajar(){
document.getElementById("hoja2").scrollIntoView({behavior:"smooth"})
}

function bajarA3(){
document.getElementById("hoja3").scrollIntoView({behavior:"smooth"})
}

function bajarA4(){
document.getElementById("hoja4").scrollIntoView({behavior:"smooth"})
}


// CONTADOR

const fechaBoda = new Date("2027-01-15T00:00:00")

function actualizarContador(){

const ahora = new Date()
const diferencia = fechaBoda - ahora

const dias = Math.floor(diferencia / (1000*60*60*24))
const horas = Math.floor((diferencia / (1000*60*60)) % 24)
const minutos = Math.floor((diferencia / (1000*60)) % 60)
const segundos = Math.floor((diferencia / 1000) % 60)

document.getElementById("dias").innerHTML = dias
document.getElementById("horas").innerHTML = horas
document.getElementById("minutos").innerHTML = minutos
document.getElementById("segundos").innerHTML = segundos

}

setInterval(actualizarContador,1000)


// SWIPE izquierda hoja3 → hoja4

let startX = 0

document.getElementById("hoja3").addEventListener("touchstart", e=>{
startX = e.touches[0].clientX
})

document.getElementById("hoja3").addEventListener("touchend", e=>{
let endX = e.changedTouches[0].clientX

if(startX - endX > 50){
document.getElementById("hoja4").scrollIntoView({behavior:"smooth"})
}
})
