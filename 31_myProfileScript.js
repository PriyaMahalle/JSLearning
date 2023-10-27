const h2Element = document.querySelector('#h2');
h2Element.addEventListener('mouseover', ()=>{
    h2Element.style.color = 'blue';
});

const h3Element = document.querySelector('#h3');
h3Element.style.color = 'Red';

const listElemnet = document.querySelector('#list');
const removeChildEle = document.querySelector('#Technology');
listElemnet.removeChild(removeChildEle);