

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
