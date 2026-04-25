function abrirSobre(){

document.getElementById("intro").style.display="none"

document.getElementById("hoja1").classList.remove("hidden")

document.getElementById("hoja2").classList.remove("hidden")

// activar scroll
document.body.style.overflow = "auto"

window.scrollTo(0,0)

}
