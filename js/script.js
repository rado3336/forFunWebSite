'use strict'
let clickAndLook = document.querySelector('.clickAndLook');
console.log("dawdwdawawd");
clickAndLook.addEventListener('click', () =>
{
    // event.preventDefault();
    console.log('dawdwaawddawd');
    window.scrollBy(0, 180);
})

// window.addEventListener('scroll', () => {
	
//     let top = this.scrollY,
//     left = this.scrollX;
//     console.log(`Y: ${top}, X: ${left}`)
// });

// function click(x, y)
// {
//     var ev = new MouseEvent('click', {
//         'view': window,
//         'bubbles': true,
//         'cancelable': true,
//         'screenX': x,
//         'screenY': y
//     });

//     var el = document.elementFromPoint(x, y);
//     console.log(el); //print element to console
//     el.dispatchEvent(ev);
// }
// click(400, 400);