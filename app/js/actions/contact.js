import * as types from '../constants/actionsTypes';

const updateField = (index, value) => ({
    type: types.UPDATE_FIELD,
    index,
    value,
});

const validateField = (index) => ({
    type: types.VALIDATE_FIELD,
    index,
});

const validateFields = () => ({
    type: types.VALIDATE_FIELDS,
});

export {
    updateField,
    validateField,
    validateFields,
};

