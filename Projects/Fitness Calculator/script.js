// store plate positions as variables

var rl = document.querySelector('.red-left');
var rr = document.querySelector('.red-right');
var bl = document.querySelector('.blue-left');
var br = document.querySelector('.blue-right');
var yl = document.querySelector('.yellow-left');
var yr = document.querySelector('.yellow-right');
var gl = document.querySelector('.green-left');
var gr = document.querySelector('.green-right');

// 55 lbs (red)

document.getElementById('add-55').onclick = () => {
    // create an element AFTER the plate position
    rl.insertAdjacentHTML('afterend', '<div class="l55"></div>');
    rr.insertAdjacentHTML('afterend', '<div class="r55"></div>');
};

document.getElementById('subtract-55').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l55');
    var rightPlate = document.querySelector('.r55');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
};

// 45 lbs (blue)

document.getElementById('add-45').onclick = () => {
    // create an element AFTER the plate position
    bl.insertAdjacentHTML('afterend', '<div class="l45"></div>');
    br.insertAdjacentHTML('afterend', '<div class="r45"></div>');
};

document.getElementById('subtract-45').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l45');
    var rightPlate = document.querySelector('.r45');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
};

// 35 lbs (yellow)

document.getElementById('add-35').onclick = () => {
    // create an element AFTER the plate position
    yl.insertAdjacentHTML('afterend', '<div class="l35"></div>');
    yr.insertAdjacentHTML('afterend', '<div class="r35"></div>');
};

document.getElementById('subtract-35').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l35');
    var rightPlate = document.querySelector('.r35');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
};

// 25 lbs (green)

document.getElementById('add-25').onclick = () => {
    // create an element AFTER the plate position
    gl.insertAdjacentHTML('afterend', '<div class="l25"></div>');
    gr.insertAdjacentHTML('afterend', '<div class="r25"></div>');
};

document.getElementById('subtract-25').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l25');
    var rightPlate = document.querySelector('.r25');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
};

document.getElementById('barbell-weight').onclick = () => {};
