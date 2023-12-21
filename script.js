function giftFall(x) {
    return 2 * (x - 3) * (x - 3) - 2;
}
var gift = document.getElementById('gift');
var x = 0, y = 0;
var isStopMoving = false;
document.addEventListener('DOMContentLoaded', function () {
    const movingElement = document.getElementById('gift');
    var container = document.body;
    var isFalling = true;
    var centerX = 150;
    var centerY = 550;
    var radius = 100;
    var speed = 0.002;
    
    // Set initial position
    function moveElementInCircle() {
        if(isStopMoving){
            return;
        }
        if (isFalling) {
            var currentTop = parseInt(getComputedStyle(movingElement).top);
            if (currentTop < 500) {
                movingElement.style.top = (currentTop + 2) + 'px';
            } else {
                isFalling = false;
            }
        } else {
            var time = new Date().getTime() * speed;
            var posX = centerX + radius * Math.cos(time);
            var posY = centerY + radius * Math.sin(time);
            movingElement.style.left = posX + 'px';
            movingElement.style.top = posY + 'px';
        }

        // Lặp lại hàm sau một khoảng thời gian nhất định (vd: 16ms cho hiệu suất tốt trên các trình duyệt)
        requestAnimationFrame(moveElementInCircle);
    }
    movingElement.addEventListener('click', function () {
        setInterval(appearGift, 200);
        setTimeout(() => {
            hideGift();
        }, 12000);
        isStopMoving = true;
    });

    moveElementInCircle();
});

var index = 0;
function appearGift(){
    var gifts = document.getElementsByClassName('text-bind');
    gifts[index++].style.display = 'block';
    // requestAnimationFrame(appearGift);
}
function hideGift(){
    var gifts = document.getElementsByClassName('text-bind');
    for(let i = 0; i < gifts.length; i++){
        gifts[i].classList.add('move-to-target');
    }
    // requestAnimationFrame(appearGift);
}

ift.addEventListener('mousedown', function () {

});