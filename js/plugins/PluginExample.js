/**
 * JavaScript DOM or jQuery plugins can go in this folder
 * Here's an example of one that just toggles a class of an element
 */

;(function(window){

    function toggleClass(elementId, classToAdd){
        document.getElementById(elementId).classList.toggle(classToAdd);
    }

    let ClassModifier = {
        toggleClass: toggleClass
    }

    window.ClassModifier = ClassModifier;

})(window);