// Get the button, and when the user clicks on it, execute myFunction
document.getElementById('subtract-p55').onclick = function () {
    myFunction();
};

function myFunction() {
    let div = document.createElement('div');
    div.innerText = document.getElementById('getText').innerText;
    document.body.appendChild(div);
}
