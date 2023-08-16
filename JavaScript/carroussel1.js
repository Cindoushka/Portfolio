let caroussel = document.querySelector('#caroussel');
let containers = Array.from(document.querySelectorAll('.conteneursite'));
let precedent = document.querySelector('.precedent');
let suivant = document.querySelector('.suivant');

suivant.addEventListener("click", slideNext);
precedent.addEventListener("click", slidePrev);

let currentSlide = 0;

function slidePrev() {

    if (currentSlide > 0) {
    currentSlide -= 1
    }
    if ((currentSlide > 0) && (currentSlide != (containers.length - 1))) {
        precedent.classList.remove("hiddenarrow")
    } else if (currentSlide == 0) {
        precedent.classList.add("hiddenarrow")
    } else if (currentSlide == containers.length - 1) {
        suivant.classList.add("hiddenarrow")
    } else if (currentSlide < containers.length - 1) {
        suivant.classList.remove("hiddenarrow")
    }

    caroussel.style.transition = "1s linear";
    
    let slideWidth = - (containers[0].offsetWidth + 28);

    console.log(slideWidth)

    if (currentSlide >= 0) {
        containers.forEach(container => {
            container.style.transition = "1s linear";

            container.style.transform = `translateX(${slideWidth * currentSlide}px)`
    
        });
    }

   console.log(currentSlide)

}

function slideNext() {

    if (currentSlide < containers.length - 1) {
    currentSlide += 1
    }
    if ((currentSlide > 0) && (currentSlide != (containers.length - 1))) {
        precedent.classList.remove("hiddenarrow")
    } else if (currentSlide == 0) {
        precedent.classList.add("hiddenarrow")
    } else if (currentSlide == containers.length - 1) {
        suivant.classList.add("hiddenarrow")
    } 
    if (currentSlide < containers.length - 1) {
        suivant.classList.remove("hiddenarrow")
    }

    let slideWidth = - (containers[0].offsetWidth + 28);


    if (currentSlide < containers.length ) {
    containers.forEach(container => {
        container.style.transition = "1s linear";

        container.style.transform = `translateX(${slideWidth * currentSlide}px)`

        });
    } 
console.log(currentSlide)

}

