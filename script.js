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

hoja1.classList.add("mostrar")

document.body.style.overflow="auto"

},300)

}

function bajar(){
document.getElementById("hoja2").scrollIntoView({behavior:"smooth"})
}

function bajarA3(){
document.getElementById("hoja3").scrollIntoView({behavior:"smooth"})
}

function bajarA4(){
document.getElementById("hoja4").classList.add("mostrar4")
}

const fechaBoda = new Date("2027-01-15T00:00:00")

function actualizarContador(){

const ahora = new Date()
const diferencia = fechaBoda - ahora

document.getElementById("dias").innerHTML =
Math.floor(diferencia / (1000*60*60*24))

document.getElementById("horas").innerHTML =
Math.floor((diferencia / (1000*60*60)) % 24)

document.getElementById("minutos").innerHTML =
Math.floor((diferencia / (1000*60)) % 60)

document.getElementById("segundos").innerHTML =
Math.floor((diferencia / 1000) % 60)

}

actualizarContador()
setInterval(actualizarContador,1000)
