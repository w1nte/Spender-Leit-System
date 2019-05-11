"use strict";

let update = () => {
    fetch('http://127.0.0.1:8000/api/get')
        .then(response => response.json())
        .then(data => {
            let numEl = document.getElementById('num');
            if (numEl.innerText !== data.counter)
                numEl.innerText = data.counter;
        });
};

let init = () => {
    update();

    document.getElementById('increment').addEventListener('click', () => {
        fetch('http://127.0.0.1:8000/api/increment').then(update);
    });

    document.getElementById('decrement').addEventListener('click', () => {
        fetch('http://127.0.0.1:8000/api/decrement').then(update);
    });

    document.getElementById('reset').addEventListener('click', () => {
        if (confirm("Möchten Sie wirklich den Zähler zurücksetzen?"))
            fetch('http://127.0.0.1:8000/api/set/0').then(update);
    });
};

document.addEventListener('DOMContentLoaded', init, false);