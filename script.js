var character = document.getElementById('character');
var block = document.getElementById('block');

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }

    setTimeout(function () {
        character.classList.remove("animate");
    }, 600);
}

setInterval(() => {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));

    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if (characterTop > 170 && blockLeft > 0 && blockLeft < 30) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("you lose");
    }
}, 10);