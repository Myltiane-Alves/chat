import * as userApi from '../api/userApi';

export const updateUser = (id, formData) => async (dispatch) => {
    dispatch({ type: 'UPDATING_START'})
    try {
        const {data} = await userApi.updateUser(id, formData);
        dispatch({ type: 'UPDATING_SUCCESS', data: data})
    } catch (error) {
        dispatch({ type: 'UPDATING_FAIL'})
    }
}