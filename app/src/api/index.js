import axios from 'axios';
import * as actions from './actionsApi';


const api = ({ dispatch }) => (next) => async (action) => {
    if(action.type !== actions.apiCallBegan.type) {
        return next(action);
    }

    const { url, method, data, onSuccss, onError, onStart } = action.payload;

    if (onStart) {
        dispatch({ type: onStart });
    }

    next(action)

    try {
        const response = await axios.request({
            baseURL: 'http://localhost:3333/',
            url,
            method,
            data
        });

        dispatch(actions.apiCallSuccess(response.data));

        if(onSuccss) {
            dispatch({ type: onSuccss, payload: response.data });
        }
    } catch (error) {
        dispatch(actions.apiCallFailure(error));

        if(onError) {
            dispatch({ type: onError, payload: error.message });
        
        }
    }
}

export default api;