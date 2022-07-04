import { ERROR, CAR_ACTION, GET_CARS, GET_ONE_CAR } from "@redux/types/cars";

const initialState = {
    cars: null,
    car: null,
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
        case GET_ONE_CAR:
            return {
                ...state,
                car: action.payload,
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