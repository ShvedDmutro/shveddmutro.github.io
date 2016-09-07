import React from 'react';

import FacebookIcon from 'react-icons/lib/fa/facebook';
import LinkedInIcon from 'react-icons/lib/fa/linkedin';
import TwiterIcon from 'react-icons/lib/fa/twitter';
import InstagramIcon from 'react-icons/lib/fa/instagram';
import GithubIcon from 'react-icons/lib/fa/github';

const SocialIcons = ({ data }) => (
    <div className="social">
        <a href={ data.facebook } className="icon icon-blue hover-animate" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
        </a>
        <a href={ data.linkedin } className="icon icon-blue hover-animate" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
        </a>
        <a href={ data.twitter } className="icon icon-blue hover-animate" target="_blank" rel="noopener noreferrer">
            <TwiterIcon />
        </a>
        <a href={ data.instagram } className="icon icon-blue hover-animate" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
        </a>
        <a href={ data.github } className="icon icon-blue hover-animate" target="_blank" rel="noopener noreferrer">
            <GithubIcon />
        </a>
    </div>
);

SocialIcons.propTypes = {
    data: React.PropTypes.object.isRequired,
};

export default SocialIcons;
