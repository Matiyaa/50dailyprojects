const  toggles = document.querySelectorAll('.toggle');
const  good = document.querySelector('#good');
const  cheap = document.querySelector('#cheap');
const  fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

function doTheTrick(toggle) {
    if(good.checked && cheap.checked && fast.checked) {
        if(toggle === good) {
            fast.checked = false;
        }
        if(toggle === cheap) {
            good.checked = false;
        }
        if(toggle === fast) {
            cheap.checked = false;
        }
    }
}
