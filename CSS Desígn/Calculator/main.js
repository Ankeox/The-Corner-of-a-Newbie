class Calculator{

    constructor(previousOperationText, currentOperationText){

        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
        this.clear();
    }

    clear() {

        this.previousOperation = '0';
        this.currentOperation = '0';
        this.operation = undefined;
        this.updateDisplay();


    }

    delete() {
        this.currentOperation = this.currentOperation.toString().slice(0,-1);

    }

    appendNumber(number) {
        if(this.currentOperationText.innerText === '0'){ 
            this.currentOperationText.innerText=number;
            this.currentOperation=' ';
         }

        if(number==='.' && this.currentOperation.includes('.')) return;
        this.currentOperation = this.currentOperation.toString() + number.toString();

    }

    chooseOperation(operation){
       if(this.currentOperation==='0') return
       if(this.previousOperation !== '0') {
           this.calculate();
       }
        
        this.operation = operation;
        this.previousOperation = this.currentOperation + this.operation;
        this.currentOperation = '0';


    }

    calculate(){

        let calculation;
        const previous = parseFloat(this.previousOperation);
        const current = parseFloat(this.currentOperation);
        if(isNaN(previous) || isNaN(current)) return;

        switch (this.operation){

            case '+':
                calculation = previous + current;
            break

            case '-':
                calculation = previous - current;
            break

            case 'x':
                calculation = previous * current;
            break

            case '÷':
                calculation = previous / current;
            break
        }

        this.currentOperation = calculation;
        this.operation= undefined;
        this.previousOperation='0'

    }

    updateDisplay(){

        this.currentOperationText.innerText = this.currentOperation;
        this.previousOperationText.innerText = this.previousOperation;
    }

    
}

//selecting DOM elements
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButtons = document.querySelector('[data-equal]');
const deleteButtons = document.querySelector('[data-delete]');
const allClearButtons = document.querySelector('[data-all-clear]');
const currentOperationText = document.querySelector('[data-current-operation]');
const previousOperationText = document.querySelector('[data-previous-operation]');

//creating a new object calculator
const calculator = new Calculator(previousOperationText, currentOperationText);

//button event listener
numberButtons.forEach(button => {

    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay(); 
    } )
})

//All clear event
allClearButtons.addEventListener('click', () => {calculator.clear()});

//Operation Event Listener

operationButtons.forEach(button => {

    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay(); 
    } )
})

//equalButton Event Listener

equalButtons.addEventListener ( 'click', () => {

    calculator.calculate();
    calculator.updateDisplay();
})

deleteButtons.addEventListener('click', () => {calculator.delete()});