import * as types from '../constants/actionsTypes';

const initialState = {
    isLoading: true,
    noData: true,
};

export default (state = initialState, action) => {
    switch (action.type) {
    case types.UPDATE_STORE_DATA:
        return {
            ...state,
            ...action.data,
        };
    default:
        return state;
    }
};
