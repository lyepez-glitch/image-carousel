const clearSlides = (slides) => {
    slides.forEach((slide) => {
        slide.classList.add("hide");
        slide.classList.remove("active");
    })
}
document.addEventListener("DOMContentLoaded", (event) => {
    const slides = document.querySelectorAll(".image");
    clearSlides(slides);
    let count = 0;
    const slide1 = document.querySelector("#img1");
    slide1.classList.add("active");
    slide1.classList.remove("hide");
    setInterval(function() {
        clearSlides(slides);
        if (count >= 5) {
            count = 1;
        } else {
            count++;
        }
        let slide = document.querySelector("#img" + count);
        slide.classList.add("active");
    }, 5000);
});