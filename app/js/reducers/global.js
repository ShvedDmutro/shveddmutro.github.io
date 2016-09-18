import * as types from '../constants/actionsTypes';
import { isValidField, validateFields } from '../utils/validation';

const initialState = {
    isLoading: true,
    noData: true,
};

export default (state = initialState, action) => {
    const store = state;
    switch (action.type) {

    case types.UPDATE_STORE_DATA:
        return {
            ...state,
            ...action.data,
        };

    case types.UPDATE_FIELD: {
        store.contact.fields[action.index].value = action.value;
        return Object.assign({}, store);
    }

    case types.VALIDATE_FIELD: {
        const field = store.contact.fields[action.index];
        field.valid = isValidField(field.value, field.type);
        return Object.assign({}, store);
    }

    case types.VALIDATE_FIELDS: {
        const res = validateFields(store.contact.fields);
        store.contact.fields = res.fields;
        store.contact.valid = res.valid;
        store.contact.message = `mailto:${store.person.email}?subject=${res.fields[0].value}&body=${res.fields[1].value}`;
        return Object.assign({}, store);
    }
    default:
        return state;
    }
};
