import React from 'react';

import PhoneIcon from 'react-icons/lib/fa/phone';
import PaperPlaneIcon from 'react-icons/lib/fa/paper-plane';

const Footer = ({ email, phone, copyright }) => {
    const telAttr = `tel:${phone}`;
    const emailAttr = `mailto:${email}`;
    return (
        <footer className="footer">
            <div className="footer-item">
                <a href={ telAttr } className="icon-wrap hover-animate">
                    <span className="icon icon-gray hover-animate">
                        <PhoneIcon />
                    </span>
                    { phone }
                </a>
            </div>
            <div className="footer-item">
                <a href={ emailAttr } className="icon-wrap hover-animate">
                    <span className="icon icon-gray hover-animate">
                        <PaperPlaneIcon />
                    </span>
                    { email }
                </a>
            </div>
            <div className="footer-item copyright">
                { copyright }
            </div>

        </footer>
    );
};

Footer.propTypes = {
    email: React.PropTypes.string.isRequired,
    phone: React.PropTypes.string.isRequired,
    copyright: React.PropTypes.string.isRequired,
};

export default Footer;
