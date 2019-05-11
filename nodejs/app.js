"use strict";

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('web'));

class Counter {
    constructor() {
        this.counter = 0;
    }
    set(c) {
        this.counter = c;
    }
    increment() { ++this.counter; }
    decrement() { --this.counter; }
}

let counter = new Counter();


app.get('/api/get', (req, res) => {
    res.send(counter)
});

app.get('/api/increment', (req, res) => {
    counter.increment();
    res.send(counter)
});

app.get('/api/decrement', (req, res) => {
    counter.decrement();
    res.send(counter)
});

app.get('/api/set/:c', (req, res) => {
    let n = req.params.c;
    if (n && !isNaN(n) && n.match(/^\d*$/) && n >= 0)
        counter.set(n);
    res.send(counter)
});

app.listen(8000, () => {
    console.log('RKBlutspendenVisualisierungs app listening on port 8000!')
});