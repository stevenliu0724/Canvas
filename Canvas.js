var canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


var x = Math.random() * canvas.width;
var y = Math.random() * canvas.height;
var r = 30;
var dx = Math.random() - 0.5 * 5;
var dy = Math.random() - 0.5 * 5;
    
//Animation function
    
function animation() {
    requestAnimationFrame(animation);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    c.beginPath();
    c.arc(x, y, r, 0, Math.PI *2, false);
    c.fillStyle = "rgba(0, 0, 255, 0.3)";
    c.strokeStyle = "rgba(0, 0, 255, 0.7)";
    c.fill();
    c.stroke();
    
    if (x + r > innerWidth || x - r < 0) {
        dx = -dx;
    }
    
    if (y + r > innerHeight || y - r < 0) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

animation();


// create 10 random circle
// for (i=0; i<10; i++) {

//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     var r = Math.random() * 50;

//     c.beginPath();
//     c.arc(x, y, r, 0, Math.PI *2, false);
//     c.fillStyle = "rgba(255, 0, 0, 0.5)";
//     c.strokeStyle = "rgba(255, 0, 0, 0.6)";
//     c.fill();
//     c.stroke();

// }


