const canvas = document.getElementById("netCanvas")
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const numPoints = 30 ;
const points = [];
const mouse ={ x: canvas.width / 2, y: canvas.height / 2};
class Point{
    constructor (x,y) {
        this.x = x;
        this.y = y;
        this.originX = x;
        this.originX = y;
        this.size = 3;
        this.angle = Math.random() * Math.PI * 2;
    }
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
    }
    update(){
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const  force = Math.min(200 / dist, 8);
        this.x += Math.cos(angle) * force;
        this.y += Math.sin(angle) * force;
        this.x += (this.originX - this.x) * 0.05;
        this.y += (this.originY - this.y) * 0.05;
        this.draw();
    }
}
function createPoints(){
    const gridSize = Math.min(canvas.width, canvas.height)
    for ( let i = 0; i < numPoints; i++){
        for(let j=0; j < numPoints;  j++){
            const x = i * gridSize + canvas.width /6;
            const y = j * gridSize + canvas.height /6;
            points.push(new Points (x,y))
        }
    }
}
function connectPoints(){
    ctx.strokerStyle = "rgba(25, 255, 255, 0.6)";
    ctx.LineWidth = 1;
    for (let i=0; i < points.length; i++){
        for(let j = 1; j < points.length; j++){
            const dx = points[i].x - points[j].x;
            const dy = points[j].y - points[i].y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if(distance < 100) {
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y)
                ctx.moveTo(points[j].x, points[j].y)
                ctx.strokerStyle()
            }
        }
    }
}