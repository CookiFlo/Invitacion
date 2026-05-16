function abrirSobre(){

const intro=document.getElementById("intro")
const hojas=["hoja1","hoja2","hoja3","hoja4","hoja5","hoja6"]

intro.classList.add("ocultar")

setTimeout(()=>{

intro.style.display="none"

hojas.forEach(id=>{
document.getElementById(id).classList.remove("hidden")
})

setTimeout(()=>{
document.getElementById("hoja1").classList.add("mostrar")
},50)

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

function irHoja(num){

for(let i=4;i<=6;i++){
document.getElementById("hoja"+i).classList.add("hidden-lateral")
}

for(let i=4;i<=num;i++){
document.getElementById("hoja"+i).classList.remove("hidden-lateral")
}

document.getElementById("hoja3").scrollIntoView({behavior:"smooth"})
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
