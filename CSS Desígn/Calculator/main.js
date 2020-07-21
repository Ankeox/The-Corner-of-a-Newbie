class Calculator{

    constructor(previousOperationText, currentOperationText){

        this.previousOperationText = previousOperationText;
        this.currentOperationText = currentOperationText;
    }

    clear() {


    }

    delete() {


    }

    appendNumber(number) {


    }

    chooseOperation(operation){


    }

    compute(){


    }

    
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButtons = document.querySelector('[data-equal]');
const deleteButtons = document.querySelector('[data-delete]');
const allClearButtons = document.querySelector('[data-all-clear]');
const currentOperationText = document.querySelector('[data-current-operantion]');
const previousOperationText = document.querySelector('[data-previous-operation]');