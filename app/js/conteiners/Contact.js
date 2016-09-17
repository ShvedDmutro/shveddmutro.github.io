import React, { Component } from 'react';
import Icon from '../components/nav/NavItem';
import Header from '../components/header/Header';
import { connect } from 'react-redux';
import ContactInfo from '../components/contact/ContactInfo';
import ContactForm from '../components/contact/ContactForm';

import { updateField, validateField, validateFields } from '../actions/contact';

class Contact extends Component {

    onSubmit(event) {
        this.validateForm();
        if (!this.props.data.contact.valid) {
            event.preventDefault();
        }
    }

    onFieldChange(index, value) {
        this.props.dispatch(updateField(index, value));
    }

    onFieldBlur(index) {
        this.props.dispatch(validateField(index));
    }

    validateForm() {
        this.props.dispatch(validateFields());
    }

    render() {
        const icon = <Icon type="contact" />;
        const contactData = this.props.data.contact;
        const info = this.props.data.person;
        const labels = this.props.data.labels;

        return (
            <div>
                <Header icon={ icon } title={ contactData.title } subTitle={ contactData.subTitle } />

                <section className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-lg-6">
                                <h3 className="title">Contact info</h3>
                                <ContactInfo
                                    data={ info }
                                    labels={ labels }
                                    social={ this.props.data.social }
                                />
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-6">
                                <br className="visible-sm visible-xs" />
                                <h3 className="title">Contact form</h3>
                                <ContactForm
                                    fields={ contactData.fields }
                                    labels={ labels }
                                    message={ this.props.data.contact.message }
                                    onSubmit={ this.onSubmit.bind(this) }
                                    onFieldChange= { this.onFieldChange.bind(this) }
                                    onFieldBlur= { this.onFieldBlur.bind(this) }
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default connect(state => state)(Contact);
