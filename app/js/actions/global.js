import * as types from '../constants/actionsTypes';

const updateStoreData = (data) => ({
    type: types.UPDATE_STORE_DATA,
    data,
});

const fetchData = () =>
    (dispatch) => {
        const request = fetch('/app/data/data.json');
        request
            .then(response => response.json())
            .then((json) => {
                setTimeout(() => {
                    dispatch(updateStoreData(json));
                }, 500);
            });
        return request;
    };

export {
    fetchData,
    updateStoreData,
};

