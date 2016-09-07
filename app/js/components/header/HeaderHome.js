import React from 'react';
import SocialIcons from '../SocialIcons';

const HeaderHome = ({ person, social }) => (
    <header className="header header-home">
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-5 col-lg-5 text-center">
                    <div className="photo-box">
                        <div className="photo">
                            <img src={ person.photo } alt={ person.name } />
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-7 col-lg-7 text-center">
                    <h1 className="title-home">{ person.name }</h1>
                    <h3 className="sub-title">{ person.jobTitle }</h3>
                    <SocialIcons data={ social } />
                </div>
            </div>
        </div>
    </header>
);


HeaderHome.propTypes = {
    person: React.PropTypes.object.isRequired,
    social: React.PropTypes.object.isRequired,
};

export default HeaderHome;
