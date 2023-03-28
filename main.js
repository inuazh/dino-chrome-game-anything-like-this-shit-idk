const travis = document.getElementById("travis");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function (event) {
    jump();
});

document.addEventListener("mousedown", function (event) {
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

let isAlive = setInterval ( function(){
    let travisTop = parseInt(window.getComputedStyle(travis).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft <55 && cactusLeft > 0 && travisTop >= 160){
        alert("GAME OVER!!!")
    }
},10)