function giftFall(x) {
    return 2 * (x - 3) * (x - 3) - 2;
}
var gift = document.getElementById('gift');
var x = 0, y = 0;
var isStopMoving = false;
const movingElement = document.getElementById('gift');
document.addEventListener('DOMContentLoaded', function () {
    var container = document.body;
    var isFalling = true;
    var centerX = 0;
    var centerY = 700;
    var radius = 120;
    var speed = 0.002;
    
    // Set initial position
    function moveElementInCircle() {
        if(isStopMoving){
            return;
        }
        if (isFalling) {
            var currentTop = parseInt(getComputedStyle(movingElement).top);
            var currentLeft = parseInt(getComputedStyle(movingElement).left);
            if (currentTop < 700) {
                movingElement.style.top = (currentTop + 7) + 'px';
                movingElement.style.left = currentLeft + 'px';
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
        isStopMoving = true;
        setInterval(appearGift, 800);
        setInterval(moveDiv, 200);
        setTimeout(() => {
            hideGift();
        }, 12000);
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

function moveDiv(){
    var el = document.createElement('div');
    const rect = movingElement.getBoundingClientRect();
    el.style.position = 'absolute';
    el.style.left = rect.left + 'px';
    el.style.top = rect.top +'px';
    el.style.backgroundColor = 'black';
    el.style.width = '20px';
    el.style.height = '20px';
    el.classList.add('move-to-heart');
    document.body.appendChild(el);
}
