function giftFall(x){
    return 2*(x - 3) * (x - 3) - 2;
}
var ift = document.getElementById('gift');
var x = 0;
var loop = setInterval(function() {debugger;
     ift.style.top = x + 'px';
     ift.style.left = x + 'px';
     x += 20;
},1000);
