import 'whatwg-fetch';

import * as types from '../constants/actionsTypes';

const updateStoreData = (data) => ({
    type: types.UPDATE_STORE_DATA,
    data,
});

const fetchData = () =>
    (dispatch) => {
        const request = fetch('/data/data.json');
        request
            .then(response => response.json())
            .then((json) => {
                setTimeout(() => {
                    dispatch(updateStoreData(json));
                }, 300);
            });
        return request;
    };

export {
    fetchData,
    updateStoreData,
};

