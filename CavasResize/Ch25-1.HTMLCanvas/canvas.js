/* 
    Angel Velazqez
     May 2 . 2025
*/ 

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = 'gold';
        c.stroke();
        // c.fillStyle = 'black';
        // c.fill();
    };

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
    
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
    
        this.x += this.dx; 
        this.y += this.dy;

        this.draw();
    };
}

var circleArray = [];

for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5 ) * 2;
    var dy = (Math.random() - 0.5) * 2;

    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate () {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();



// ************ SAMPLES ************ //

// c.fillStyle = 'gold';
/* 
 c.fillRect(100, 100, 100, 100);
 c.fillStyle = 'gold';
 c.fillRect(200, 200, 100, 100);
 c.fillStyle = 'gold';
 c.fillRect(300, 300, 100, 100);
 c.fillStyle = 'gold';
 c.fillRect(400, 400, 100, 100);
 c.fillStyle = 'gold';
 c.fillRect(500, 500, 100, 100);

 console.log(canvas);
*/

//  Line  
/*
 c.beginPath();
 c.moveTo(1000, 1000);
 c.lineTo(950,800);
 c.lineTo(500,900);
 c.lineTo(1000,1000);
 c.strokeStyle = "#ffffff";
 c.stroke();
*/

// Arc / Circle 
/* 
 c.beginPath();
 c.arc(300, 300, 30, 0, Math.PI * 2, false);
 c.strokeStyle = 'green';
 c.stroke();
*/
/*
 for (var i = 0; i < 1000; i++){
     var x = Math.random() * window.innerWidth;
     var y = Math.random() * window.innerHeight;
     c.beginPath();
     c.arc(x, y, 30, 0, Math.PI * 2, false);
     c.strokeStyle = 'darkred';
     c.stroke();
 }
*/
