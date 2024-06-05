const containerImage = document.querySelector("#container-image")
const inputTexto = document.querySelector("#inome").value
const imagens = {
    "black": "assets/imgs/black.jpg",
    "green": "assets/imgs/green.jpg",
    "orange": "assets/imgs/orange.jpg",
    "red": "assets/imgs/red.jpg",
    "yellow": "assets/imgs/yellow.jpg",
}
function mudarBackground(img) {
    containerImage.src = imagens[img]
    console.log(imagens.img)
}
function escreverNaImage() {
    console.log(inputTexto)

}
