import { ERROR, CAR_ACTION, GET_CARS } from "@redux/types/cars";

const initialState = {
    cars: [],
    isSuccess: false,
    isError: false,
    error: null
}

const carReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CAR_ACTION:
            return {
                ...state,
                isSuccess: false
            }
        case GET_CARS:
            return {
                ...state,
                cars: action.payload,
                isSuccess: true
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

export default carReducer;