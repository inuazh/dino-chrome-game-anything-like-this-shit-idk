const travis = document.getElementById("travis");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
    jump();
});

function jump() {
    if (travis.classList != "jump") {
        travis.classList.add("jump")
    }
    setTimeout( function(){
        travis.classList.remove("jump")
    },900)
}