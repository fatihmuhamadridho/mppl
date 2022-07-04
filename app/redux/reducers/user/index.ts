import { ERROR, USER_ACTION, USER_LOGIN } from "@redux/types/users";

const initialState = {
    user: null,
    isSuccess: false,
    isError: false,
    error: null
}

const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case USER_ACTION:
            return {
                ...state,
                isSuccess: false
            }
        case USER_LOGIN:
            return {
                ...state,
                isSuccess: true,
                user: action.payload
            }
        case ERROR:
            return {
                ...state,
                isError: true,
                error: action.payload
            }
        default:
            return { ...state }
    }
}