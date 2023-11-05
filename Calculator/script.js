let btns = document.querySelector('.input-buttons')
let screen = document.querySelector('.screen')
let display_expression = document.querySelector('#expression')
let display_result = document.querySelector('#result')

let expression = "",ans=0;

btns.addEventListener('click', (eventObj) => {

    if (eventObj.target.type == 'button') {

        let input = eventObj.target.getAttribute('value')

        if (input == "C") {
            clearInput();
        }

        else if (input == "=" ) {
            if(expression.length!=0){

                if(Number.isInteger(ans))
                    expression= ans
                else
                    expression= ans.toFixed(2)

                displayInput(expression)
                display_result.innerHTML=""
            }
        }

        else {

            if(input == "<" ){
                console.log(expression);

                if(expression.length<=1)
                    clearInput()

                else{
                    expression = (expression+"").slice(0,-1)
                    evaluateExpression(expression)
                }    
            }

            else{

                expression += input;  
                evaluateExpression(expression)
            }
        }

    }
})

function displayInput(input) {
    display_expression.innerHTML = input;
}

function evaluateExpression(exp) {

    try {
        displayInput(exp);
        ans = eval(exp);
        display_result.innerHTML = `${ans}`;
    } catch (error) {

    }

}

function clearInput() {
    display_expression.innerHTML = "0"
    display_result.innerHTML = ""
    expression = ""
    ans=0
}