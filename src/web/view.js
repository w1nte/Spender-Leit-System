"use strict";

let audio = new Audio('./ping.mp3');

let update = (dontplaysound) => {
    fetch('/api/get')
        .then(response => response.json())
        .then(data => {
            let numEl = document.getElementById('num');
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

let init = () => {
    update(true);
    setInterval(update, 1000);
};

document.addEventListener('DOMContentLoaded', init, false);