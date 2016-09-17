import * as types from '../constants/actionsTypes';
import { isValidField, validateFields } from '../utils/validation';

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

    case types.UPDATE_FIELD:
        let mutations = state;
        mutations.contact.fields[action.index].value = action.value;
        return Object.assign({}, state, mutations);

    case types.VALIDATE_FIELD:
        let mutations1 = state;
        let field = mutations1.contact.fields[action.index];
        field.valid = isValidField(field.value, field.type);
        return Object.assign({}, state, mutations1);

    case types.VALIDATE_FIELDS:
        let mutations2 = state;
        const res = validateFields(state.contact.fields);
        mutations2.contact.fields = res.fields;
        mutations2.contact.valid = res.valid;
        mutations2.contact.message = `mailto:${state.person.email}?subject=${res.fields[0].value}&body=${res.fields[1].value}`;
        return Object.assign(
            {},
            state,
            mutations2
        );

    default:
        return state;
    }
};
