var click = 0;

function increment(e) {
    var x = e.clientX - 240;
    var y = e.clientY - 165;
    var dist = Math.sqrt(y*y + x*x);
    if(dist < 50){
        click++;
        redraw();
    }

    //console.log(click);
}
var c = document.getElementById("Canvas");
c.addEventListener('click', increment);
var ctx = c.getContext("2d");

function redraw() {
    ctx.clearRect(0,0,c.width,c.height);
    ctx.font="20px Verdana";
    //ctx.fillText("Clic: " + click,190,20);
    ctx.beginPath();
    ctx.fillStyle="red";
    ctx.arc(c.width/2, c.height/2, 50,0,2*3.14);
    ctx.fill();
}
redraw();
