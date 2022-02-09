const inputText = document.getElementById('inputText');
const addBtn = document.getElementById('addBtn');
const items = document.getElementById('items');
let text = '';


// //--Check input is valid or not and set text variable--//
inputText.addEventListener('keyup', function (e){
    text = e.target.value;
    if(text.length > 0){
        addBtn.removeAttribute('disabled');
    }else{
        addBtn.setAttribute('disabled', true);
    }
});

addBtn.addEventListener('click', function (){
    const li = document.createElement('li');
    li.innerText = text;
    items.appendChild(li);
    inputText.value = '';
});

items.addEventListener('click', function (e){
    e.target.parentNode.removeChild(e.target);
});