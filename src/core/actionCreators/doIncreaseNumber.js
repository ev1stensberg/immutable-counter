import { INCREMENT } from '../actionTypes/default'

export const doIncreaseNumber = () => (dispatch) => {
    dispatch({
    type: INCREMENT
    });
}
