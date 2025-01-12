
var arr = ["red", "green", "blue", "yellow"];
var check = [];
var userSequence = [];

$(document).keypress(keypressed);


$("div.btn").click(function () {
    clicked(this, check);
});

function keypressed(event) {
    if (check.length == 0) {
        $("h1").text("Level 1");
        var random = Math.floor(Math.random() * 4);
        check.push(arr[random]);
        console.log(check[0]);
        generateSound(arr[random]);
    }
}

function clicked(e, check) {
    var name = e.getAttribute("class").split(" ")[1];
    generateSound(name);
    userSequence.push(name);
    var l = userSequence.length - 1;
    if (userSequence[l] !== check[l]) {
        resetplay();
        return;
    }
    if ((l + 1) == check.length) {
        $("h1").text("Level " + (check.length + 1));
        var random = Math.floor(Math.random() * 4);
        setTimeout(function () {
            check.push(arr[random]);
            generateSound(arr[random]);
            userSequence = [];
        }, 1000);
    }
}
// asfljaef

function generateSound(colorName) {
    $("div." + colorName).addClass("pressed");
    setTimeout(function () {
        $("div." + colorName).removeClass("pressed");
    }, 100);

    var audio = new Audio("sounds/" + colorName + ".mp3");
    audio.play();
}

function resetplay() {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $("body").addClass("game-over");
    setTimeout(function () {
        $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over! Press any key to start.");
    check = [];
    userSequence = [];
    
    console.log("game over");
}
