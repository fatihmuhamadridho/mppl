import { ERROR, CAR_ACTION, GET_CARS, GET_ONE_CAR } from "@redux/types/cars";
import axios from "axios";

export const getAllCars = () => async(dispatch: any) => {
    try {
        dispatch({ type: CAR_ACTION });
        const res = await axios.get(`https://fatih-api.herokuapp.com/api/cpr/cars`);
        dispatch({
            type: GET_CARS,
            payload: res.data
        })
        console.log(res.data)
    } catch (error: any) {
        dispatch({
            type: ERROR,
            payload: error
        })
        console.log(error)
    }
}

export const getOneCars = (id: any) => async(dispatch: any) => {
    try {
        dispatch({ type: CAR_ACTION });
        const res = await axios.get(`https://fatih-api.herokuapp.com/api/cpr/cars/${Number(id)}`)
        dispatch({
            type: GET_ONE_CAR,
            payload: res.data
        })
        console.log(res.data)
    } catch (error: any) {
        dispatch({
            type: ERROR,
            payload: error
        })
        console.log(error) 
    }
}