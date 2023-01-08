const div = document.querySelector('div');
const selected = document.getElementById('selContent');
const btn3 = document.getElementById('button3');
const input = document.getElementById('input');
const outsideSpace = document.getElementsByTagName('body')

// Напишите приложение которое при клике на div1, 2, 3, 4 будет выводить его имя напртов надписи Selected, на рисунке на против надписи Selected там где крестеки. ВАЖНО, для всех 3х Div будет один обработчик событий, а отличать вы их должны через атрибуты, просто отображая содержимое атрибута в вышеуказанном месте:
//     event.target.getAttribute("div-name"); // Как получить значение атрибута
//
// Как этот атрибут добавить:
//     <div div-name="Div N1 clicked">

div.addEventListener('click', (event) => {
    selected.textContent = event.target.getAttribute("div-name");
    console.log( selected.textContent );
    event.stopPropagation();
});


// При нажатии на кнопки 1 и 2 в том же поле пишите какая из кнопок была нажата, у каждой кнопки свой обработчил заданнй onClick="handler...."
//
// При нажатии на пустое поле очищайте поле с выбранным элементом.

function onClickHandlerBtn1(event) {
    selected.textContent = ' BT1 - clicked';
    event.stopPropagation();
}

function onClickHandlerBtn2 (event) {
    selected.textContent = ' BT2 - cliked';
    event.stopPropagation();
}

outsideSpace[0].addEventListener("click", (event) => {
    selected.textContent = '';
});


// При вводе текста в input пропускайте только маленькие (не заглавные) буквы.
// Кнопка ок выводит алерт с ввденным текстом, пока инпут пуст, кнопка не активна.

btn3.setAttribute('disabled', true);

input.addEventListener('input', () => {
    input.value = input.value.toLowerCase();
    input.value.length === 0 ? btn3.setAttribute('disabled', true) : btn3.removeAttribute('disabled');
})

btn3.addEventListener('click', () => {
    alert(input.value);
});


