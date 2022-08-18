/*
class User{
    constructor(a,c)
    {
        this.a=a;
        this.c=c;
    }

    as(){
        this.ggg='gg';
        return (this.ggg , this.a);
    }
}


let zed = new User('fff','sssssss');

console.log(zed);

*/

class Calculator{
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement= previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
        this.clear()
    }

    clear(){
        this.currentoperand=''
        this.previousoperand=''
        this.operation=undefined
    }

    appendNumber(a)
    {   
        if(a=== '.'&& this.currentoperand.includes('.')) return
        this.currentoperand=this.currentoperand.toString() + a.toString()
    }



    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentoperand
        if(this.operation !== null)
        {
            this.previousOperandTextElement.innerText = `${this.previousoperand} ${this.operation}`
        }
    }
    
    chooseOperation(operation){
        if(this.currentoperand==='') return
        if(this.previousoperand !== ''){
            this.compute()
        }
        this.operation=operation
        this.previousoperand=this.currentoperand
        this.currentoperand=''
    }

    compute()
    {
        let coputation
        const prev = parseFloat(this.previousoperand)
        const current = parseFloat(this.currentoperand)
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                coputation=prev+current
                break
            case '*':
                coputation=prev*current
                break
            case '/':
                coputation=prev/current
                break
            case '-':
                coputation=prev-current
                break
            default:
                return
        }
       this.currentoperand=coputation
       this.operation = undefined
       this.previousoperand=''
    }

    delete(){
        this.currentoperand=this.currentoperand.toString().slice(0,-1)
    }
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(b => {
    b.addEventListener('click', () => {
      calculator.appendNumber(b.innerText)
      calculator.updateDisplay()
    })
  })

  operationButtons.forEach(b => {
    b.addEventListener('click', () => {
      calculator.chooseOperation(b.innerText)
      calculator.updateDisplay()
    })
  })

  equalsButton.addEventListener('click', butt =>{
    calculator.compute()
    calculator.updateDisplay()
  } )

  allClearButton.addEventListener('click', butt =>{
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', butt =>{
    calculator.delete()
    calculator.updateDisplay()
})