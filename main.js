let operation = prompt('Яку операцію калькуляції вам потрібно зробити? Додаваня - add; Віднімання - sub; Множення - mult; Ділення - div:');
operation = operation.toLowerCase();
console.log(operation);

const firstNum = parseInt(prompt('Введіть перше число!'));
const secondNum = parseInt(prompt('Введіть друге число!'));

if(operation === 'add' && firstNum >= 0 && secondNum >= 0) {
    alert(`"${firstNum} + ${secondNum} = ${firstNum + secondNum}"`);
} else if(operation === 'sub' && firstNum >= 0 && secondNum >= 0){
    alert(`"${firstNum} - ${secondNum} = ${firstNum - secondNum}"`);
} else if(operation === 'mult' && firstNum >= 0 && secondNum >= 0){
    alert(`"${firstNum} * ${secondNum} = ${firstNum * secondNum}"`);
} else if(operation === 'div' && firstNum >= 0 && secondNum >= 0){
    alert(`"${firstNum} / ${secondNum} = ${firstNum / secondNum}"`);
} else {
    alert('Спробуйте ще раз вірно ввести операцію калькуляції!');
}
