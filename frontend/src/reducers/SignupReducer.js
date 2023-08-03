export const initialStateSignup = {
    name: { value: "", touched: false, hasError: false, error: "" },
    email: { value: "", touched: false, hasError: false, error: "" },
    password: { value: "", touched: false, hasError: false, error: "", type: "password" },
    confirmPassword: { value: "", touched: false, hasError: false, error: "" },
    formValid: false,
    userType: 1,
}

export const signupReducer = (state, action) => {
    switch (action.type) {

        case "SIGNUP_USER_TYPE":
            return {
                ...state,
                userType: Number(action.payload)
            }

        case 'SIGNUP_INPUT_FOCUSED':
            return {
                ...state,
                [action.payload]: { ...state[action.payload], touched: true }
            }


        case 'SIGNUP_INPUT_CHANGE':
            return {
                ...state,
                [action.payload.key]: {
                    ...state[action.payload.key],
                    value: action.payload.value,
                    hasError: false
                }
            }

        case 'SIGNUP_INPUT_BLUR':
            if (action.payload.value.trim().length === 0) {
                return {
                    ...state,
                    [action.payload.key]: {
                        ...state[action.payload.key],
                        hasError: true,
                        error: `${action.payload.placeholder} field is required!`
                    },
                    formValid: false
                }
            }

            if (action.payload.key === 'email' && action.payload.value.indexOf('@gmail.com') === -1) {
                return {
                    ...state,
                    [action.payload.key]: {
                        ...state[action.payload.key],
                        hasError: true,
                        error: `Email must be like user@gmail.com !`
                    },
                    formValid: false
                }
            }

            if (action.payload.key === 'password' && action.payload.value.trim().length < 8) {
                return {
                    ...state,
                    [action.payload.key]: {
                        ...state[action.payload.key],
                        hasError: true,
                        error: `${action.payload.placeholder} must be at least 8 characters long!`
                    },
                    formValid: false
                }
            }

            if (action.payload.key === 'confirmPassword' && action.payload.value !== state.password.value) {
                return {
                    ...state,
                    [action.payload.key]: {
                        ...state[action.payload.key],
                        hasError: true,
                        error: `Passwords do not match!`
                    },
                    formValid: false
                }
            }

            return {
                ...state,
                formValid: true // Set formValid to true when all validations pass
            };

        case 'SIGNUP_VALID_DATA':
            if (state[action.payload.key].hasError) return state;
            return {
                ...state,
                [action.payload.key]: {
                    ...state[action.payload.key],
                    hasError: action.payload.error,
                    error: action.payload.value
                }
            }

        case "SIGNUP_TOGGLE_PASSWORD_VISIBILITY":
            return {
                ...state,
                password: {
                    ...state.password,
                    type: state.password.type === "password" ? "text" : "password"
                }
            };

        case "SIGNUP_FORM_VALID":
            if (state.email.value.length > 0 && state.password.value.length > 0 && state.confirmPassword.value.length > 0) {
                return {
                    ...state,
                    formValid: true
                }
            }

        case 'SIGNUP_RESET':
            state = initialStateSignup;
            return state;

        default:
            return state
    }
}