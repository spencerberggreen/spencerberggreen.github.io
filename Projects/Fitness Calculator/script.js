document.getElementById('add-55').onclick = () => {
    // document.querySelector() finds, and returns, the first element
    // matching the supplied selector (or null, if no element is found):
    var el1 = document.querySelector('.red-left');
    var el2 = document.querySelector('.red-right');

    // here we create an adjacent element from the string of HTML,
    // the 'afterend' argument states that this adjacent element
    // follows the el1 node, rather than preceding it or appearing
    // within:
    el1.insertAdjacentHTML('afterend', '<div class="p55"></div>');
    el2.insertAdjacentHTML('afterend', '<div class="p55"></div>');
};
