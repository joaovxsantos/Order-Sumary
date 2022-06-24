let cancel = document.querySelector("#p5")
let botao = document.querySelector("button")


cancel.addEventListener("mouseover", color)
botao.addEventListener("mouseover", color2)


function color() {
    cancel.style = "color: hsl(245, 90%, 69%)"
    cancel.removeEventListener("mouseover", color)
    cancel.addEventListener("mouseout", colorPadrao)

}

function colorPadrao() {
    cancel.style = "color: hsl(245, 75%, 52%)"
    cancel.removeEventListener("mouseout", colorPadrao)
    cancel.addEventListener("mouseover", color)
}


function color2() {
    botao.style = "background-color: hsl(245, 90%, 69%)";
    botao.removeEventListener("mouseover", color2)
    botao.addEventListener("mouseout", colorPadrao2)
}

function colorPadrao2() {
    botao.style = "background-color: hsl(245, 75%, 52%)"
    botao.removeEventListener("mouseout", colorPadrao2)
    botao.addEventListener("mouseover", color2);

}
