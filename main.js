canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

roverheight = 90;
roverwidth = 100;

roverXposition = 10;
roverYposition = 10;

backgroundmarsimages = ["marsimage1.jpg","marsimage2.jpg","marsimage3.jpg","marsimage4.jpeg"];
random_number = Math.floor(Math.random() * 4);
console.log(random_number);

backgroundImg =backgroundmarsimages[random_number];
console.log(backgroundImg);
roverImg = "rover.png";

function add() {
    bgImg= new Image();
    bgImg.onload= uploadbackground;
    bgImg.src = backgroundImg;

    rvImg = new Image();
    rvImg.onload = uploadrover;
    rvImg.src = roverImg;
}
function uploadbackground() {
    ctx.drawImage(bgImg , 0,0 , canvas.width , canvas.height);
}
function uploadrover() {
    ctx.drawImage(rvImg , roverXposition,roverYposition , roverwidth , roverheight);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keynumber=e.keyCode;
    console.log(keynumber);

    if (keynumber == "38") {
        up();
        console.log("up");
    }
    if (keynumber == "39") {
        right();
        console.log("right");
    }
    if (keynumber == "40") {
        down();
        console.log("down");
    }
    if (keynumber == "37") {
        left();
        console.log("left");
    }
}

function up() {
    if (roverYposition >= 1) {
        roverYposition = roverYposition - 10;
        console.log("Rover x position = "+ roverXposition + "Rover y position = "+ roverYposition);
        uploadbackground();
        uploadrover();
    }
}
function down() {
    if (roverYposition <= 500) {
        roverYposition = roverYposition + 10;
        console.log("Rover x position = "+ roverXposition + "Rover y position = "+ roverYposition);
        uploadbackground();
        uploadrover();
    }
}
function left() {
    if (roverXposition >= 1) {
        roverXposition = roverXposition - 10;
        console.log("Rover x position = "+ roverXposition + "Rover y position = "+ roverYposition);
        uploadbackground();
        uploadrover();
    }
}
function right() {

    if (roverXposition <= 700) {
        roverXposition = roverXposition + 10;
        console.log("Rover x position = "+ roverXposition + "Rover y position = "+ roverYposition);
        uploadbackground();
        uploadrover();
    }
}