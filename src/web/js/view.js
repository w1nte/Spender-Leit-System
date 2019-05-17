"use strict";

let audio = new Audio('./custom/ping.mp3');

let update = (dontplaysound) => {
    fetch('/api/get')
        .then(response => response.json())
        .then(data => {
            let numEl = document.getElementById('frontend-num');
            if (parseInt(numEl.innerText) !== data.counter) {
                numEl.innerText = data.counter;
                if (!dontplaysound) {
                    setTimeout(function() {
                        audio.play();
                    });
                }
            }
        });
};

let resize_frontend = () => {
    let frontendImage = document.getElementById('frontend-image');
    if (frontendImage.offsetHeight > window.innerHeight) {
        frontendImage.style.height = '100%';
        document.getElementById('frontend-inner').style.height = '100%';
    }
};

let init = () => {
    update(true);
    resize_frontend();
    setInterval(update, 1000);
};

document.addEventListener('DOMContentLoaded', init, false);