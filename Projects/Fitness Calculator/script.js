document.getElementById('add-55').onclick = () => {
    // store plate positions as variables
    var el1 = document.querySelector('.red-left');
    var el2 = document.querySelector('.red-right');

    // create an element AFTER the plate position
    el1.insertAdjacentHTML('afterend', '<div class="l55"></div>');
    el2.insertAdjacentHTML('afterend', '<div class="r55"></div>');
};

document.getElementById('subtract-55').onclick = () => {
    // create variables that specify which plates to remove
    var leftPlate = document.querySelector('.l55');
    var rightPlate = document.querySelector('.r55');
    // delete the targeted plates
    leftPlate.remove();
    rightPlate.remove();
};

document.getElementById('barbell-weight').onclick = () => {};
