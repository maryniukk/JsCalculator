const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus') 

plusBtn.onclick = function () {
  action = '+'
}
minusBtn.onclick = function () {
  action = '-'
}
submitBtn.onclick = function () {
  if (action == '+') {
    const sum = Number(input1.value) + Number(input2.value)
    printResult(sum)
  }
  else if (action == '-'){
    const sum = Number(input1.value) - Number(input2.value)
    printResult(sum)
    }
  }

  function computeNumbersWithAction (inp1, inp2,actionSymbol){
    const num1 = Number (inp1.value)
  }

function printResult (result) {
  if (result < 0) {
    resultElement.style.color = 'red'
  }
    else {
      resultElement.style.color = 'green'
    }
    resultElement.textContent = result 
}



