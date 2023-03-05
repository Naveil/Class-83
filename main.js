var lastx, lasty;
var color="Red";
var width_of_line = 2;
canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
var width = screen.width;
var newwidth = screen.width-70;
var newheight = screen.height-300;
if(width < 992){
    document.getElementById("mycanvas").width = newwidth;
    document.getElementById("mycanvas").height = newheight;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", touchstart);
function touchstart(e){
    lastx = e.touches[0].clientX - canvas.offsetLeft;
    lasty = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", touchmove);
function touchmove(e){
    currentx = e.touches[0].clientX - canvas.offsetLeft;
    currenty = e.touches[0].clientY - canvas.offsetTop;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(lastx, lasty);
    ctx.lineTo(currentx, currenty);
    ctx.stroke();
    lastx = currentx;
    lasty = currenty;
}