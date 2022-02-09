//Grab Single element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document.querySelector('.container'));
// console.log(document.querySelector('h1'));

//Select multiple statements
// const nodeItems = document.querySelectorAll('.item');
// console.log(document.getElementsByClassName('item'));
// const colItems = document.getElementsByTagName('li');
// nodeItems.forEach(it => console.log(it));
// colItems.forEach(it => console.log(it));
// for(let i = 0; i<colItems.length; i++){
//     console.log(colItems[i])
// }

//DOM manipulation
// const ul = document.querySelector('.items');

// ul.remove();
// const btn = document.querySelector('.btn');
// btn.style.backgroundColor = 'red';
// btn.style.color = 'white';

// btn.addEventListener('click', e => {
//     e.preventDefault();
//     ul.firstElementChild.textContent = 'HTML';
//     ul.children[1].innerText = 'CSS';
//     ul.lastElementChild.innerHTML = '<h3>JavaScript</h3>';
// })

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        const textNode = document.createTextNode(`${nameInput.value}: ${emailInput.value}`);
        li.appendChild(textNode);
        userList.appendChild(li);
        nameInput.value = '';
        emailInput.value = '';
    }
}