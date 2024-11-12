var one = document.querySelector(".leven-1")
var two = document.querySelector(".twelve-2")
var three = document.querySelector(".thireteen-3")
var four = document.querySelector(".fourteen-4")

var one1 = document.querySelector(".leven")
var two1 = document.querySelector(".twelve")
var three1 = document.querySelector(".thirteen")
var four1 = document.querySelector(".fourteen")


function aba() {
    one1.style.display = "block"
    two1.style.display = "none"
    three1.style.display = "none"
    four1.style.display = "none"

}
function abb() {
    two1.style.display = "block"
    one1.style.display = "none"
    three1.style.display = "none"
    four1.style.display = "none"
}
function abc() {
    two1.style.display = "none"
    one1.style.display = "none"
    three1.style.display = "block"
    four1.style.display = "none"
}
function abd() {
    two1.style.display = "none"
    one1.style.display = "none"
    three1.style.display = "none"
    four1.style.display = "block"
}

var six = document.querySelector(".layout")
var seven = document.querySelector(".sign-in")
var eight = document.querySelector(".log-box")
var nine = document.querySelector(".twenty1")

function abe(event) {
    six.style.display = "block"
    seven.style.display = "block"
    event.preventDefault()
}
function abf(event) {
    eight.style.display = "block"
    seven.style.display = "none"
    event.preventDefault()
}

function abg(event) {
    eight.style.display = "block"
    seven.style.display = "none"
    event.preventDefault()
}
document.getElementById('x-mark').addEventListener('click', function () {
    seven.style.display = 'none'
    six.style.display = 'none'
})
const num = document.querySelector('.num');

document.querySelector('.add').addEventListener('click', function (event) {
    num.value = parseInt(num.value) + 1;
    event.preventDefault();
});

document.querySelector('.sub').addEventListener('click', function (event) {
    num.value = parseInt(num.value) - 1;
    event.preventDefault();

});

