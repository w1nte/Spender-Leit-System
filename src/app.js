'use strict';

const express = require('express');
const app = express();
const Counter = require('./counter.js');


let counter = new Counter();


/**
 * Routing
 */
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


/**
 * Express Setup
 */
app.use(express.static('web'));

app.listen(8000, () => {
    console.log('RKBlutspendenVisualisierungs app listening on port 8000!')
});