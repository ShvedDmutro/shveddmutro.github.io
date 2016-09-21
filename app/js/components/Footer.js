import React from 'react';
import PhoneIcon from 'react-icons/lib/fa/phone';
import PaperPlaneIcon from 'react-icons/lib/fa/paper-plane';
import socialScripts from '../utils/social';

const Footer = ({ email, phone, copyright }) => {
    const telAttr = `tel:${phone}`;
    const emailAttr = `mailto:${email}`;

    socialScripts();

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
            <div className="footer-item social">
                <div className="facebook">
                    <div id="fb-root"></div>
                    <div
                        className="fb-like"
                        data-href="https://shveddmutro.github.io/"
                        data-width="200"
                        data-layout="button_count"
                        data-action="like"
                        data-size="small"
                        data-show-faces="false"
                        data-share="false">
                    </div>
                </div>
                <div className="github">
                    <a
                        className="github-button"
                        href="https://github.com/ShvedDmutro"
                        data-style="mega"
                        data-count-href="/ShvedDmutro/followers"
                        data-count-api="/users/ShvedDmutro#followers"
                        data-count-aria-label="# followers on GitHub"
                        aria-label="Follow @ShvedDmutro on GitHub">
                        GitHub
                    </a>
                </div>
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
