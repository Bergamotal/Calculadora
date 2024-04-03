function appendNumber(num) {
    document.getElementById('display').value += num;
}

function appendOperator(op) {
    document.getElementById('display').value += op;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    var displayValue = document.getElementById("display").value;
    document.getElementById("display").value = displayValue.substring( 0, displayValue.length - 1)
}    

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
    }
}