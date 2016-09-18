import React from 'react';
import Field from '../form/Field';

const ContactForm = ({ fields, message, labels, onSubmit, onFieldChange, onFieldBlur }) => (
    <div>
        {
            fields.map((field, index) => (
                <Field
                    key={ index }
                    data={ field }
                    index={ index }
                    onChange={ onFieldChange }
                    onBlur={ onFieldBlur }
                />
            ))
        }

        <div className="form-group text-right">
            <a
                className="btn btn-color hover-animate"
                onClick={ onSubmit }
                href={ message }
            >
                { labels.sendMessage }
            </a>
        </div>
    </div>
);

ContactForm.propTypes = {
    fields: React.PropTypes.array.isRequired,
    message: React.PropTypes.string.isRequired,
    labels: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onFieldChange: React.PropTypes.func.isRequired,
    onFieldBlur: React.PropTypes.func.isRequired,
};

export default ContactForm;
