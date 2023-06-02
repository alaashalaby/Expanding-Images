let images = document.querySelectorAll(".image");


images.forEach((img) => {
    img.addEventListener("click" , () => {
        removeClass();
        img.classList.add("active");
    })
})

const removeClass = () => {
    images.forEach((img) => {
        img.classList.remove("active")
    });
};
