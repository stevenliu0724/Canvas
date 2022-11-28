var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;
var r = 30;
var dx = Math.random() - 0.5 * 5;
var dy = Math.random() - 0.5 * 5;

//Star object
function star (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

star.prototype.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI *2, false);
    c.fillStyle = "rgba(255, 0, 0, 0.5";
    c.fill();
    c.stroke();
    c.closePath;
}

star.prototype.update = function() {
    this.draw();
}

//Implementation
var stars
function init() {
    stars = []

    for (i = 0; i < 1; i++) {
        stars.push(new star(canvas.width / 2, 30, 30, 'blue'));
    }
}

//Animation
function animation() {
    requestAnimationFrame(animation);
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    stars.foreach(Star => {
        star.update();
    });
}

init()
animation()