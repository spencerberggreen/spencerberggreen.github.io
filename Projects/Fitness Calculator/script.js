// store plate positions as variables

var rl = document.querySelector('.red-left');
var rr = document.querySelector('.red-right');
var bl = document.querySelector('.blue-left');
var br = document.querySelector('.blue-right');
var yl = document.querySelector('.yellow-left');
var yr = document.querySelector('.yellow-right');
var gl = document.querySelector('.green-left');
var gr = document.querySelector('.green-right');

// weight
let barbellWeight = 45;
let totalWeight = 45;

const updateWeight = () => {
    const totalWeightDisplay = document.getElementById('total-weight');
    totalWeightDisplay.innerHTML = totalWeight;
    const barbellWeightDisplay = document.getElementById('barbell-weight');
    barbellWeightDisplay.innerHTML = barbellWeight;
};

// 55 lbs (red)

document.getElementById('add-55').onclick = () => {
    // create an element AFTER the plate position
    rl.insertAdjacentHTML('afterend', '<div class="l55"></div>');
    rr.insertAdjacentHTML('afterend', '<div class="r55"></div>');
    // add plates to total
    totalWeight += 110;
    updateWeight();
};

document.getElementById('subtract-55').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l55');
    var rightPlate = document.querySelector('.r55');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
    // subtract plates from total
    totalWeight -= 110;
    updateWeight();
};

// 45 lbs (blue)

document.getElementById('add-45').onclick = () => {
    // create an element AFTER the plate position
    bl.insertAdjacentHTML('afterend', '<div class="l45"></div>');
    br.insertAdjacentHTML('afterend', '<div class="r45"></div>');
    // add plates to total
    totalWeight += 90;
    updateWeight();
};

document.getElementById('subtract-45').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l45');
    var rightPlate = document.querySelector('.r45');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
    // subtract plates from total
    totalWeight -= 90;
    updateWeight();
};

// 35 lbs (yellow)

document.getElementById('add-35').onclick = () => {
    // create an element AFTER the plate position
    yl.insertAdjacentHTML('afterend', '<div class="l35"></div>');
    yr.insertAdjacentHTML('afterend', '<div class="r35"></div>');
    // add plates to total
    totalWeight += 70;
    updateWeight();
};

document.getElementById('subtract-35').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l35');
    var rightPlate = document.querySelector('.r35');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
    // subtract plates from total
    totalWeight -= 70;
    updateWeight();
};

// 25 lbs (green)

document.getElementById('add-25').onclick = () => {
    // create an element AFTER the plate position
    gl.insertAdjacentHTML('afterend', '<div class="l25"></div>');
    gr.insertAdjacentHTML('afterend', '<div class="r25"></div>');
    // add plates to total
    totalWeight += 50;
    updateWeight();
};

document.getElementById('subtract-25').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l25');
    var rightPlate = document.querySelector('.r25');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
    // subtract plates from total
    totalWeight -= 50;
    updateWeight();
};

// barbell

document.getElementById('subtract-bar').onclick = () => {
    barbellWeight -= 5;
    totalWeight -= 5;
    updateWeight();
};

document.getElementById('add-bar').onclick = () => {
    barbellWeight += 5;
    totalWeight += 5;
    updateWeight();
};
