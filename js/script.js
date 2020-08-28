function Move() {
    var elem = document.getElementById('Animation');

    var posx;
    var posy;

    posy = getRandomIntInclusive(0, window.innerHeight - 50);
    posx = getRandomIntInclusive(0, window.innerWidth - 50);

    setInterval(frame, 10);
    function frame() {
        if (posy >= window.innerHeight - 50) {
            posy = getRandomIntInclusive(0, window.innerHeight - 50);
        } else if (posx >= window.innerWidth - 50) {
            posx = getRandomIntInclusive(0, window.innerWidth - 50);
        } else {
            posx++;
            posy++;
            elem.style.top = posy + 'px';
            elem.style.left = posx + 'px';
        }
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //Максимум и минимум включаются
}

document.addEventListener("DOMContentLoaded", Move);
