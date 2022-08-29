function display(value) {
  Calculator.visor.value = Calculator.visor.value + value
}

function evaluateExpression() {
  Calculator.visor.value = eval(Calculator.visor.value)
}

window.onload = function () {
  includeFile()
}