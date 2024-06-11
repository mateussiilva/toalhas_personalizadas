// const containerImage = document.querySelector("#container-image")
// const inputTexto = document.querySelector("#inome").value
// const imagens = {
//     "black": "assets/imgs/black.jpg",
//     "green": "assets/imgs/green.jpg",
//     "orange": "assets/imgs/orange.jpg",
//     "red": "assets/imgs/red.jpg",
//     "yellow": "assets/imgs/yellow.jpg",
// }
// function mudarBackground(img) {
//     containerImage.src = imagens[img]
//     console.log(imagens.img)
// }
// function escreverNaImage() {
//     console.log(inputTexto)

// }

const containerBackgrounds = document.querySelector(".backgrounds")
const backgrounds = {

    img1: "assets/imgs/black.jpg",
    img2: "assets/imgs/green.jpg",
    img3: "assets/imgs/orange.jpg",
    img4: "assets/imgs/red.jpg",


}
for (const imgBack in backgrounds) {
    let containerMiniatura = document.createElement("div")
    let pathImage = backgrounds[imgBack]
    const miniatura = document.createElement("img")
    miniatura.classList.add("miniatura")
    miniatura.src = pathImage
    miniatura.addEventListener("click", e => {
        changeImage(pathImage)
        // alert(e)
    })
    containerMiniatura.appendChild(miniatura)
    containerBackgrounds.appendChild(containerMiniatura)
    // containerBackgrounds.
}
console.log(containerMiniatura)

// const containerBackground = document.querySelector(".backgrounds")
function changeImage(pathImage) {
    let containerImage = document.querySelector("#imageToalha")
    containerImage.src = pathImage

}
