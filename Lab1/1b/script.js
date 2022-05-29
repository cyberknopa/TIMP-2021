var password = "h2a45" //пароль

button.onclick = function () { //функция для кнопки
  if (button.style.backgroundColor == 'black') {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
  } else {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
  }
}
function lock() { //функция запретов
  function closed() {return false;}
  window.oncontextmenu = closed; //запрет пкм
  window.onselectstart = closed; //запрет выделения
  window.ondragstart = closed; //запрет пертягивания
  window.localStorage.setItem('blocked', true);
}

document.addEventListener('keyup', (event) => { //запрет скриншота
  if (event.key == 'PrintScreen') {
    var locked = window.localStorage.getItem('blocked')
    if (locked == "true") {
      navigator.clipboard.writeText('Ты не испытал удачу'); //метод для clipboard
    }
  }
});

function unlock() { //функция разблокировки
  function opened() {return true;}
  window.oncontextmenu = opened;
  window.onselectstart = opened;
  window.ondragstart = opened;
  window.localStorage.setItem('blocked', false);
}

window.onload = function(){ //загуржаем страницу
  var locked = window.localStorage.getItem('blocked')
  if (locked == "true") { lock(); }
  else if (locked == null) { lock(); }
}

function Keycheck(key) { //функция для правильного ввода
  return (key >= 'a' && key <= 'z')  ||(key >= '0' && key <= '9')  || key == 'ArrowLeft' || key == 'ArrowRight' || key == 'Delete' || key == 'Backspace'; //пароль цифры и кнопки стирания
}

function Passcheck(){ //шифрование и проверка
  var input = document.getElementById('pas').value;
  var str = input.split("");
  for(var i = 0; i < str.length; i++) {
    if(str[i] == "1") {str[i] = "h"; }
    if(str[i] == "3") {str[i] = "a"; }
  }
  if (str.join('') != password) {
    alert("Не повезло, не повезло")
    lock()
  } else {
    alert("Повезло")
    unlock();
  }
}
