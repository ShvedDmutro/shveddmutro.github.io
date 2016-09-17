export const isEmpty = (val) => {
    return val.trim() === '';
};

export const isEmail = (val) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(val);
};

export const isValidField = (value, type) => {
    if (type === 'email') {
        return isEmail(value);
    }
    return !isEmpty(value);
};

export const validateFields = (fields) => {
    const notValidFields = fields.filter((field, index) => {
        fields[index].valid = isValidField(field.value, field.type);
        return !field.valid;
    });
    return {
        valid: !notValidFields.length > 0,
        fields: fields,
    }
};

