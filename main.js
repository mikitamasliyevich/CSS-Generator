var rangeTL = document.getElementById('tlr'),
    rangeTr = document.getElementById('trr'),
    rangeBl = document.getElementById('blr'),
    rangeBr = document.getElementById('brr');


var resultTl = document.getElementById('result-tlr')
resultTr = document.getElementById('result-trr')
resultBl = document.getElementById('result-blr')
resultBr = document.getElementById('result-brr')

var btn = document.getElementById('btn')
format = document.getElementById('format');

var inputs = document.querySelectorAll('input'),
    cube = document.getElementById('cube');
cube.style.borderRadius = 'opx'

function changeRadius() {
    resultTl.innerHTML = rangeTL.value
    resultTr.innerHTML = rangeTr.value
    resultBl.innerHTML = rangeBl.value
    resultBr.innerHTML = rangeBr.value

    cube.style.borderRadius = rangeTL.value + 'px ' + rangeTr.value + 'px ' +
        rangeBr.value + 'px ' + rangeBl.value + 'px '
};

for (node of inputs) {
    console.log(node);
    node.addEventListener('input', changeRadius);
}

btn.addEventListener('click', function () {
    format.innerText = 'border-radius:' + cube.style.borderRadius + ';'
})