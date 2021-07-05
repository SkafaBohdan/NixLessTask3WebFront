let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let inp = document.querySelector('#mail');
let span = document.querySelector('#mess');

document.querySelector('#validate1').onclick = function (e) {
    e.preventDefault();
    if (!validate(reg, inp.value)) {
        notValid(inp, span, "Проверка не пройдена");
    } else {
        valid(inp, span, "Проверка пройдена");
    }
};

function validate(regex, inp) {
    return regex.test(inp);
}

function notValid(inp, el, mess) {
    inp.classList.add('is-invalid');
    el.innerHTML = mess;
}

function valid(inp, el, mess) {
    inp.classList.remove('is-invalid');
    inp.classList.add('is-valid');
    el.innerHTML = mess;
}