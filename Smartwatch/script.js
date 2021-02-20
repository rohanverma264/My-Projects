var watch = document.getElementById('photo');
var red = document.getElementById('red');
var black = document.getElementById('black');
var blue = document.getElementById('blue');
var pink = document.getElementById('pink');
var purple = document.getElementById('purple');



function watchColor(color) {
    
    if(color===red){
        watch.src = 'Pics/red watch.png';
    }
    else if(color===black){
        watch.src = 'Pics/black watch.png';
    }
    else if(color===blue){
        watch.src = 'Pics/blue watch.png';
    }
    else if(color===pink){
        watch.src = 'Pics/pink watch.png';
    } 
    else if(color===purple){
        watch.src = 'Pics/purple watch.png';
    }
    
}
setInterval(clock , 1000);
function clock() {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    if(hrs < 10){
        hrs = '0' + hrs;
    }
    if(min < 10){
        min = '0' + min;
    }
    if(sec < 10){
        sec = '0' + sec;
    }
    document.getElementById('time').innerHTML = hrs + ':' + min + ':' + sec;
}



