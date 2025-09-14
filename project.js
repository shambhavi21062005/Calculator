
let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');

let expression = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.innerText;

    if (value === 'AC') {
      expression = "";
    } else if (value === '=') {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
    } else {
      expression += value;
    }

    input.value = expression;
  });
});