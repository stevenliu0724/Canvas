var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");

//Star object
function star (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
}

star.prototype.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.r, 0, Math.PI *2, false);
    c.fill();
    c.stroke();
    c.closePath;
}

star.prototype.update = function() {
    this.draw();
}

//Implementation
let stars
function init() {
    stars = []

    for (i = 0; i < 2; i++) {
        stars.push(new star(canvas.width / 2, 30, 30));
    }
}

//Animation
function animation() {
    requestAnimationFrame(animation);
    c.clearRect(0, 0, canvas.width, canvas.height);
}


animation()