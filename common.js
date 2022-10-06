// common.js

document.querySelectorAll('.left').forEach(elm => {
    elm.onclick = function () {
        let div = this.parentNode.querySelector('.hscroll_wrapper div');
        div.scrollLeft -= (div.clientWidth / 2);
    };
});
document.querySelectorAll('.right').forEach(elm => {
    elm.onclick = function () {
        let div = this.parentNode.querySelector('.hscroll_wrapper div');
        div.scrollLeft += (div.clientWidth / 2);
    };
});
