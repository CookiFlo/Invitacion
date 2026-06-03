function abrirSobre(){

const intro = document.getElementById("intro")

intro.classList.add("ocultar")

setTimeout(()=>{

intro.style.display="none"

document.getElementById("hoja1").classList.remove("hidden")
document.getElementById("hoja2").classList.remove("hidden")
document.getElementById("hoja3").classList.remove("hidden")

document.getElementById("hoja4").classList.add("hidden")
document.getElementById("hoja5").classList.add("hidden")
document.getElementById("hoja6").classList.add("hidden")

// NUEVAS HOJAS
document.getElementById("hoja7").classList.add("hidden")
document.getElementById("hoja8").classList.add("hidden")
document.getElementById("hoja9").classList.add("hidden")
document.getElementById("hoja10").classList.add("hidden")

document.body.style.overflow="auto"

window.scrollTo(0,0)

},300)
}


/* SCROLL VERTICAL */

function bajar(){
document.getElementById("hoja2").scrollIntoView({behavior:"smooth"})
}

function bajarA3(){
document.getElementById("hoja3").scrollIntoView({behavior:"smooth"})
}


/* HOJAS 3-6 */

function irHoja4(){
document.getElementById("hoja4").classList.remove("hidden")
document.getElementById("hoja4").scrollIntoView({behavior:"smooth"})
}

function volverHoja3(){
document.getElementById("hoja3").scrollIntoView({behavior:"smooth"})
}

function irHoja5(){
document.getElementById("hoja5").classList.remove("hidden")
document.getElementById("hoja5").scrollIntoView({behavior:"smooth"})
}

function volverHoja4(){
document.getElementById("hoja4").scrollIntoView({behavior:"smooth"})
}

function irHoja6(){
document.getElementById("hoja6").classList.remove("hidden")
document.getElementById("hoja6").scrollIntoView({behavior:"smooth"})
}

function volverHoja5(){
document.getElementById("hoja5").scrollIntoView({behavior:"smooth"})
}


/* ➕ NUEVAS HOJAS */

function irHoja7(){
document.getElementById("hoja7").classList.remove("hidden")
document.getElementById("hoja7").scrollIntoView({behavior:"smooth"})
}

function volverHoja6(){
document.getElementById("hoja6").scrollIntoView({behavior:"smooth"})
}

function irHoja8(){
document.getElementById("hoja8").classList.remove("hidden")
document.getElementById("hoja8").scrollIntoView({behavior:"smooth"})
}

function volverHoja7(){
document.getElementById("hoja7").scrollIntoView({behavior:"smooth"})
}

function irHoja9(){
document.getElementById("hoja9").classList.remove("hidden")
document.getElementById("hoja9").scrollIntoView({behavior:"smooth"})
}

function volverHoja8(){
document.getElementById("hoja8").scrollIntoView({behavior:"smooth"})
}

function irHoja10(){
document.getElementById("hoja10").classList.remove("hidden")
document.getElementById("hoja10").scrollIntoView({behavior:"smooth"})
}

function volverHoja9(){
document.getElementById("hoja9").scrollIntoView({behavior:"smooth"})
}


/* CONTADOR */

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

actualizarContador()
setInterval(actualizarContador,1000)
