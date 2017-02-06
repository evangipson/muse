var MUSE = (function() {
    // muse runs on ECMAScript 6!
    'use strict';
    // Module
    let museModule = {};
    // Variables

    // Functions
    /**
     * Returns a number that is random within range.
     * @param {Number} min
     * @param {Number} max
     * @returns A number in the range specified. Defaults
     * to 0 - 100.
     */
    let getRandomRange = function(min = 0, max = 100) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    /**
     * Function for initialization of the MUSE module
     */
    museModule.init = function() {
        // Stuff...
    }
    // Give back the module
    return museModule;
})(); // Using an IIFE here for closure

// Create a story as soon as we have
// the DOMContentLoaded event fire off.
document.addEventListener("DOMContentLoaded", function() {
    MUSE.init();
});