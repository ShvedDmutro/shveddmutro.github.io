import  React from 'react';

const ContactForm = ({ labels, onSubmit }) => (
    <div>
        <div className="form-group has-error">
            <input type="text" className="form-control " placeholder={ labels.name } />
        </div>
        <div className="form-group">
            <input type="email" className="form-control" placeholder={ labels.email } />
        </div>
        <div className="form-group">
            <textarea className="form-control" rows="2" placeholder={ labels.message } />
        </div>
        <div className="form-group text-right">
            <button
                className="btn btn-color hover-animate"
                onClick={ onSubmit }
            >
                { labels.sendMessage }
            </button>
        </div>
    </div>
);

ContactForm.propTypes = {
    labels: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
};

export default ContactForm;
