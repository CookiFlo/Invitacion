function abrirSobre(){

const intro=document.getElementById("intro")
intro.classList.add("ocultar")

setTimeout(()=>{

intro.style.display="none"

document.getElementById("hoja1").classList.remove("hidden")
document.getElementById("hoja2").classList.remove("hidden")
document.getElementById("hoja3").classList.remove("hidden")

window.scrollTo(0,0)

},300)

/* 🎵 AUTOPLAY INTELIGENTE */
const audio=document.getElementById("musica")

if(audio){
audio.muted=false
audio.play().catch(()=>{})
}
}

/* SCROLL */
function bajar(){
document.getElementById("hoja2").scrollIntoView({behavior:"smooth"})
}

function bajarA3(){
document.getElementById("hoja3").scrollIntoView({behavior:"smooth"})
}

/* NAVEGACIÓN */
function irHoja4(){document.getElementById("hoja4").classList.remove("hidden");document.getElementById("hoja4").scrollIntoView({behavior:"smooth"})}
function volverHoja3(){document.getElementById("hoja3").scrollIntoView({behavior:"smooth"})}

function irHoja5(){document.getElementById("hoja5").classList.remove("hidden");document.getElementById("hoja5").scrollIntoView({behavior:"smooth"})}
function volverHoja4(){document.getElementById("hoja4").scrollIntoView({behavior:"smooth"})}

function irHoja6(){document.getElementById("hoja6").classList.remove("hidden");document.getElementById("hoja6").scrollIntoView({behavior:"smooth"})}
function volverHoja5(){document.getElementById("hoja5").scrollIntoView({behavior:"smooth"})}

function irHoja7(){document.getElementById("hoja7").classList.remove("hidden");document.getElementById("hoja7").scrollIntoView({behavior:"smooth"})}
function volverHoja6(){document.getElementById("hoja6").scrollIntoView({behavior:"smooth"})}

function irHoja8(){document.getElementById("hoja8").classList.remove("hidden");document.getElementById("hoja8").scrollIntoView({behavior:"smooth"})}
function volverHoja7(){document.getElementById("hoja7").scrollIntoView({behavior:"smooth"})}

function irHoja9(){document.getElementById("hoja9").classList.remove("hidden");document.getElementById("hoja9").scrollIntoView({behavior:"smooth"})}
function volverHoja8(){document.getElementById("hoja8").scrollIntoView({behavior:"smooth"})}

function irHoja10(){document.getElementById("hoja10").classList.remove("hidden");document.getElementById("hoja10").scrollIntoView({behavior:"smooth"})}
function volverHoja9(){document.getElementById("hoja9").scrollIntoView({behavior:"smooth"})}

/* CONTADOR */
const fechaBoda=new Date("2027-01-15T00:00:00")

function actualizarContador(){
const ahora=new Date()
const d=fechaBoda-ahora

document.getElementById("dias").innerText=Math.floor(d/86400000)
document.getElementById("horas").innerText=Math.floor((d/3600000)%24)
document.getElementById("minutos").innerText=Math.floor((d/60000)%60)
document.getElementById("segundos").innerText=Math.floor((d/1000)%60)
}

setInterval(actualizarContador,1000)
actualizarContador()
