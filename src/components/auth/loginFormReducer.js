import {validateMobileNumber, validatePassword, validateUserName} from "../../utils/utils";

export const loginFormInitialState = {
    userName: '',
    mobileNumber: '',
    password: '',
    errors: {}
}

const loginFormReducer = function (state, action) {
    switch (action.type) {
        case 'SET_USERNAME':
            const userNameErrors = validateUserName(action.payload);
            return {
                ...state,
                userName: action.payload,
                errors: {...state.errors, userName: userNameErrors}
            }

        case 'SET_PASSWORD':
            const passwordErrors = validatePassword(action.payload);
            return {
                ...state,
                password: action.payload,
                errors: {...state.errors, password: passwordErrors}
            }

        case 'SET_MOBILE_NUMBER':
            const mobileNumberErrors = validateMobileNumber(action.payload);
            return {
                ...state,
                mobileNumber: action.payload,
                errors: {...state.errors, mobileNumber: mobileNumberErrors}
            }

        default:
            return state;
    }
}

export default loginFormReducer;