'use strict';

/**
 * Controls a counter
 * @type {module.Counter}
 */
module.exports = class Counter {
    constructor() {
        this.counter = 0;
    }
    set(c) {
        this.counter = c;
    }
    increment() { ++this.counter; }
    decrement() { --this.counter; }
}