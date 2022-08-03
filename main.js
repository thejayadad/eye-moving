


let balls = document.getElementsByClassName("ball");
document.onmousemove = function (){
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientX * 100 / window.innerWidth + "%";

    for (let i = 0; i < 2; i++){
        balls[i].style.left = x;
        balls[i].style.left = y;
        balls[i].style.transform = "translate(-"+x+", -"+y+")"
    }


}