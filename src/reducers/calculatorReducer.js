import {
      ADD_NUMBER,
    ADD_OPERATOR,
    BUTTONPRESS,
    CLEAR,
    CALCULATE,
    MAKE_FLOAT
} from '../constants/actionsConstants';
import { List, Stack } from 'immutable';

const initialState = {
    stack: Stack(),
    result: 0
};

const infixToRPN = (stack) => {
    var operators = Stack(),
        output = List(),
        precedence = {
            '+': 2,
            '-': 2,
            '/': 3,
            '*': 3
        };

    stack.forEach((input) => {
        if (typeof input === 'number') {
            output = output.push(input);
            return;
        }

        if (operators.size) {
            if (precedence[input] <= precedence[operators.first()]) {
                output = output.concat(operators);
                operators = Stack();
            }
        }
        operators = operators.push(input);
    });

    if (operators.size) {
        output = output.concat(operators);
    }

    return output;
}

const calculate = (inStack) => {
    var stack = [];
    var val1, val2;
    var operations = {
        '+': (a, b) => {
            return a + b;
        },
        '-': (a, b) => {
            return a - b;
        },
        '*': (a, b) => {
            return a * b;
        },
        '/': (a, b) => {
            return a / b;
        }
    };

    inStack.forEach((input) => {
        if (typeof input === 'number') {
            stack.push(input);
            return;
        }

        if (stack.length < 2) {
            throw new Error('Not enough operands');
        }

        val2 = stack.pop();
        val1 = stack.pop();
        stack.push(operations[input](val1, val2));
    });
    return stack[0];
}

const calculatorReducer = (state=initialState, action) => {
    let stack, value;
    switch(action.type) {
        case ADD_NUMBER:
            stack = state.stack;
            if (typeof stack.first() === 'number') {
                value = parseInt(`${ stack.first() }${ action.value }`, 10);
                stack = stack.pop().push(value);
            } else {
                stack = stack.push(action.value);
                value = action.value;
            }

            return {
                stack: stack,
                result: value
            };
        case MAKE_FLOAT:
            stack = state.stack;
            if(stack.last){
                if(typeof stack.last() === 'number'){
                    value = parseFloat(`${stack.last()}`, 10)
                    console.log('valuevalue',value);
                }
            }
            else{
                return state;
            }
            //console.log('last', stack.last());
            return state;
        case ADD_OPERATOR:
            stack = state.stack;
            if (typeof stack.first() !== 'number')
                return state;
            
            return {...state, stack: stack.push(action.value) };
          
        case CLEAR:
            return initialState;

        case CALCULATE:
            if (state.stack.size < 3) {
                return state;
            }
            value = calculate(infixToRPN(state.stack.reverse()));
            return { stack: Stack([value]), result: value };
        default:
            return state;
    }
};

export default calculatorReducer;