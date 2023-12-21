function giftFall(x) {
    return 2 * (x - 3) * (x - 3) - 2;
}
// var ift = document.getElementById('gift');
var x = 0, y = 0;
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
        createNewElement();
        stopMovingElement();
    });

    moveElementInCircle();
});

function dixuong1() {
    var dixuong1 = setInterval(function () {
        ift.style.top = x + 'px';
        x += 20;
        if (x >= 900) {
            clearInterval(dixuong1);
            y += 50;
            ift.style.left = y + 'px';
            dilen1();
        }
    }, 20);
}

function dilen1() {
    var dilen1 = setInterval(function () {
        ift.style.top = x + 'px';
        x -= 20;
        if (x <= 400) {
            clearInterval(dilen1);
            y += 50;
            ift.style.left = y + 'px';
            dixuong2();
        }
    }, 20)
}
function dixuong2() {
    var dixuong2 = setInterval(function () {
        ift.style.top = x + 'px';
        x += 20;
        if (x >= 900) {
            clearInterval(dixuong2);
            y += 50;
            ift.style.left = y + 'px';
            dilen2();
        }
    }, 30);
}
function dilen2() {
    var dilen1 = setInterval(function () {
        ift.style.top = x + 'px';
        x -= 20;
        if (x <= 200) {
            clearInterval(dilen1);
            y += 50;
            ift.style.left = y + 'px';
            // dixuong2();
        }
    }, 50)
}

ift.addEventListener('mousedown', function () {

});