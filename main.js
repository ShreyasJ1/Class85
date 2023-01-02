canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

var mars_images=["mars.jpg","mars2.jpg","mars3.jpg","mars4.jpg","mars5.jpg"];
random_number=Math.floor(Math.random()*5);
rover_width = 100;
rover_height = 90;
rover_x = 10;
rover_y = 10; 

background_image = mars_images[random_number];
console.log("background image = "+background_image);
rover_image = "rover.png";

function add() {
    background_img = new Image();
    background_img.onLoad = uploadBackground;
    background_img.src = background_image;

    rover_img = new Image();
    rover_img.onLoad = uploadRover;
    rover_img.src = rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(rover_img, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (keypressed == '38') {
        up();
        console.log('Up arrow key is pressed')
    }
    if (keypressed == '40') {
        down()
        console.log('Down arrow key is pressed');
    }
    if (keypressed == '37') {
        left()
        console.log('left arrow key is pressed');
    }
    if (keypressed == '39') {
        right()
        console.log('right arrow key is pressed');
    }
}
function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("when up arrow is pressed , x =" + rover_x + "and y = ", rover_y);
        uploadBackground();
        uploadRover();

    }
}
function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("when down arrow is pressed , x =" + rover_x + "and y = ", rover_y);
        uploadBackground();
        uploadRover();

    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("when left arrow is pressed , x =" + rover_x + "and y = ", rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("when right arrow is pressed , x =" + rover_x + "and y = ", rover_y);
        uploadBackground();
        uploadRover();

    }
}
