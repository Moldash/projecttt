const resultBox = document.getElementById('result')
const messages = ["Январь 2019", "Февраль 2019", "Март 2019", "Апрель 2019", "Май 2019", "Июнь 2019", "Июль 2019", "Август 2019", "Сентябрь 2019", "Октябрь 2019", "Ноябрь 2019", "Декабрь 2019"];
const length = messages.length;

const getNextIdx = (idx = 0, length, direction) => {
   switch (direction) {
     case 'next': return (idx + 1) % length;
     case 'prev': return (idx == 0) && length - 1 || idx - 1;
     default:     return idx;
   }
}

let idx; // idx is undefined, so getNextIdx will take 0 as default
const getNewIndexAndRender = (direction) => {
     idx = getNextIdx(idx, length, direction);
     result.innerHTML = messages[idx]
}

getNewIndexAndRender();

function myFunction() {
  window.open("Hello world!");
}