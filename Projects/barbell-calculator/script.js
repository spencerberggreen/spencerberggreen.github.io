// store plate positions as variables

var rl = document.querySelector('.red-left');
var rr = document.querySelector('.red-right');
var bl = document.querySelector('.blue-left');
var br = document.querySelector('.blue-right');
var yl = document.querySelector('.yellow-left');
var yr = document.querySelector('.yellow-right');
var gl = document.querySelector('.green-left');
var gr = document.querySelector('.green-right');
var blkl = document.querySelector('.black-left');
var blkr = document.querySelector('.black-right');
var wl = document.querySelector('.white-left');
var wr = document.querySelector('.white-right');
var sbl = document.querySelector('.sblue-left');
var sbr = document.querySelector('.sblue-right');
var sgl = document.querySelector('.sgreen-left');
var sgr = document.querySelector('.sgreen-right');

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

// 15 lbs (black)

document.getElementById('add-15').onclick = () => {
    // create an element AFTER the plate position
    blkl.insertAdjacentHTML('afterend', '<div class="l15"></div>');
    blkr.insertAdjacentHTML('afterend', '<div class="r15"></div>');
    // add plates to total
    totalWeight += 30;
    updateWeight();
};

document.getElementById('subtract-15').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l15');
    var rightPlate = document.querySelector('.r15');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
    // subtract plates from total
    totalWeight -= 30;
    updateWeight();
};

// 10 lbs (white)

document.getElementById('add-10').onclick = () => {
    // create an element AFTER the plate position
    wl.insertAdjacentHTML('afterend', '<div class="l10"></div>');
    wr.insertAdjacentHTML('afterend', '<div class="r10"></div>');
    // add plates to total
    totalWeight += 20;
    updateWeight();
};

document.getElementById('subtract-10').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l10');
    var rightPlate = document.querySelector('.r10');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
    // subtract plates from total
    totalWeight -= 20;
    updateWeight();
};

// 5 lbs (small blue)

document.getElementById('add-5').onclick = () => {
    // create an element AFTER the plate position
    sbl.insertAdjacentHTML('afterend', '<div class="l5"></div>');
    sbr.insertAdjacentHTML('afterend', '<div class="r5"></div>');
    // add plates to total
    totalWeight += 10;
    updateWeight();
};

document.getElementById('subtract-5').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l5');
    var rightPlate = document.querySelector('.r5');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
    // subtract plates from total
    totalWeight -= 10;
    updateWeight();
};

// 2.5 lbs (small green)

document.getElementById('add-2-5').onclick = () => {
    // create an element AFTER the plate position
    sgl.insertAdjacentHTML('afterend', '<div class="l2-5"></div>');
    sgr.insertAdjacentHTML('afterend', '<div class="r2-5"></div>');
    // add plates to total
    totalWeight += 5;
    updateWeight();
};

document.getElementById('subtract-2-5').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l2-5');
    var rightPlate = document.querySelector('.r2-5');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
    // subtract plates from total
    totalWeight -= 5;
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
