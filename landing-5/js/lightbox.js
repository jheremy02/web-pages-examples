const imgItems= document.querySelectorAll('.image-gallery')
const imgLightElement=document.querySelector('.image-light')
const addImgElement= document.querySelector('.add-image')
const closeElement=document.querySelector('.close')
const hamburguer = document.querySelector(".hamburguer")

console.log(imgItems)

imgItems.forEach((imgItem)=>{
    imgItem.addEventListener('click',(event)=>{
        console.log("Hello")
        showImage(imgItem.getAttribute('src'))
        hamburguer.style.display="none"

    })
})


imgLightElement.addEventListener('click',(event)=>{
    if (event.target!=addImgElement) {
    imgLightElement.classList.toggle('showLight')
    addImgElement.classList.toggle("showImage")
    hamburguer.style.display="block"
    }
})

function showImage(srcImage) {
    addImgElement.src=srcImage;
    imgLightElement.classList.toggle('showLight')
    addImgElement.classList.toggle("showImage")
}