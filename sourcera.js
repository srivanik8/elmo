// script.js
const image = document.getElementById("image");
const imageDescription = document.querySelector(".image-description");

let isTextVisible = false;

image.addEventListener("click", () => {
    if (!isTextVisible) {
        imageDescription.style.display = "block";
        image.style.display = "none"; // Hide the image
    } else {
        imageDescription.style.display = "none";
        image.style.display = "block"; // Show the image
    }
    
    isTextVisible = !isTextVisible;
});

imageDescription.addEventListener("click", () => {
    if (isTextVisible) {
        imageDescription.style.display = "none"; // Hide the text
        image.style.display = "block"; // Show the image
        isTextVisible = false;
    }
});
// script.js
function toggleImage(imageItem) {
    const image = imageItem.querySelector("img");
    const imageDescription = imageItem.querySelector(".image-description");
    
    if (image.style.display === "none") {
        image.style.display = "block";
        imageDescription.style.display = "none";
    } else {
        image.style.display = "none";
        imageDescription.style.display = "block";
    }
}
