import React from 'react';

const Brief = ({ title, cvLink, cvLabel, content }) => (
    <div>
        <h3 className="title">{ title }</h3>
        <div dangerouslySetInnerHTML={ { __html: content } } />
        <p>
            <a href={ cvLink } className="btn btn-color hover-animate" target="_blank" rel="noopener noreferrer">
                { cvLabel }
            </a>
        </p>
        <br />
    </div>
);

Brief.propTypes = {
    title: React.PropTypes.string.isRequired,
    cvLink: React.PropTypes.string.isRequired,
    cvLabel: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
};

export default Brief;
