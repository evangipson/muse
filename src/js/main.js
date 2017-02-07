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
     * Controls the classes applied to the form
     * for front-end goodness.
     * @param {HTMLElement} input
     */
    let handleFormAnimation = function() {
        document.addEventListener("keyup", addFilledClassToInputs);
    }
    /**
     * Helper function for handleFormAnimation,
     * will check all text inputs for any value,
     * then add the .filled class (or remove it)
     * based on precense of a value.
     */
    let addFilledClassToInputs = function() {
        // Grab each input
        let inputList = document.getElementsByTagName("input");
        for(let input in inputList) {
            if(inputList[input].value !== "") {
                inputList[input].classList.add("filled");
            }
            else {
                inputList[input].classList.remove("filled");
            }
        }
    }
    /**
     * Function for initialization of the MUSE module
     */
    museModule.init = function() {
        handleFormAnimation();
    }
    // Give back the module
    return museModule;
})(); // Using an IIFE here for closure

// Create a story as soon as we have
// the DOMContentLoaded event fire off.
document.addEventListener("DOMContentLoaded", function() {
    MUSE.init();
});