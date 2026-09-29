const pic = document.getElementById("bild");
const button = document.getElementById("button");

let firstpic = true;

button.addEventListener("click", function() {
    if (firstpic) {
        pic.src = "pic2.jpeg";
        firstpic = false;
    } else {
        pic.src = "pic1.jpg";
        firstpic = true;
    }
});