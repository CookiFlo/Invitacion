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
window.scrollTo(0,0)

},300)
}

function bajar(){
document.getElementById("hoja2").scrollIntoView({behavior:"smooth"})
}

function bajarA3(){
document.getElementById("hoja3").scrollIntoView({behavior:"smooth"})
}

function irHoja4(){
document.getElementById("hoja4").scrollIntoView({behavior:"smooth"})
}

function volverHoja3(){
document.getElementById("hoja3").scrollIntoView({behavior:"smooth"})
}

function irHoja5(){
document.getElementById("hoja5").scrollIntoView({behavior:"smooth"})
}

function volverHoja4(){
document.getElementById("hoja4").scrollIntoView({behavior:"smooth"})
}

function irHoja6(){
document.getElementById("hoja6").scrollIntoView({behavior:"smooth"})
}

function volverHoja5(){
document.getElementById("hoja5").scrollIntoView({behavior:"smooth"})
}

const fechaBoda=new Date("2027-01-15T00:00:00")

function actualizarContador(){

const ahora=new Date()
const diferencia=fechaBoda-ahora

document.getElementById("dias").innerHTML=Math.floor(diferencia/(1000*60*60*24))
document.getElementById("horas").innerHTML=Math.floor((diferencia/(1000*60*60))%24)
document.getElementById("minutos").innerHTML=Math.floor((diferencia/(1000*60))%60)
document.getElementById("segundos").innerHTML=Math.floor((diferencia/1000)%60)
}

actualizarContador()
setInterval(actualizarContador,1000)
