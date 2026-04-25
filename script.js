function abrirSobre(){

document.getElementById("intro").style.display="none"

document.getElementById("hoja1").classList.remove("hidden")

document.getElementById("hoja2").classList.remove("hidden")

// activar scroll
document.body.style.overflow = "auto"

window.scrollTo(0,0)

}

// BAJAR A SECCION 2
function bajar(){
document.getElementById("hoja2").scrollIntoView({behavior:"smooth"})
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
