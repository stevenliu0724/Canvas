const canvas = document.getElementById("CVS");
const c = canvas.getContext("2d");
const particleArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("rezie", function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor(){
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 10 + 1;
        this.speedx = Math.random() * 3 - 1.5;
        this.speedy = Math.random() * 3 - 1.5;
    };
    
    update(){
        this.x += this.speedx;
        this.y += this.speedy;
    };

    draw(){
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI *2, false);
        c.fillStyle = "white";
        c.strokeStyle = "rgba(255, 0, 0, 0.6)";
        c.fill();
        c.stroke();
    };

};

function init(){
    for (let i = 0; i < 100; i++){
        particleArray.push(new Particle());
    };
};
init();

function handleparticle(){
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();

    };
};

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    handleparticle();
    requestAnimationFrame(animate);
};

animate();