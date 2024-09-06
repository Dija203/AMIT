let menu = document.querySelector('.menu')

let vertical_menu = document.querySelector('.vertical-menu')


let main_image = document.querySelector('#main-image')

let img1 = document.querySelector('#img1')
let img2 = document.querySelector('#img2')
let img3 = document.querySelector('#img3')
let img4 = document.querySelector('#img4')

menu.addEventListener('click', () => {
  
    let display = window.getComputedStyle(vertical_menu).display;

    // let rect = window.innerWidth;
    // console.log(rect)

    console.log(screen.availHeight)
    console.log(screen.height)
    console.log(window.innerHeight)

    if (display === 'none' ){
        vertical_menu.setAttribute("style", "display: block;")
    } else {
        vertical_menu.setAttribute("style", "display: none;")
    }
})

img1.onclick = () => {
    main_image.src = img1.src
}

img2.onclick = () => {
    main_image.src = img2.src
}

img3.onclick = () => {
    main_image.src = img3.src
}

img4.onclick = () => {
    main_image.src = img4.src
}