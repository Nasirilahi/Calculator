import {
    ADD_NUMBER,
    ADD_OPERATOR,
    BUTTONPRESS,
    CLEAR,
    CALCULATE,
    MAKE_FLOAT
} from '../constants/actionsConstants';

export const addNumber = (value) =>  ({ type: ADD_NUMBER, value });

export const addOperator = (value) =>({ type: ADD_OPERATOR, value });

export const makeFloat = (value) => ({ type: MAKE_FLOAT });

export const clear = () =>({ type: CLEAR }) ;

export const  calculate = () => ({ type: CALCULATE });
