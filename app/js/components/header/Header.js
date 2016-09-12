import React from 'react';
import { Link } from 'react-router';

import CloseIcon from 'react-icons/lib/md/clear';

const Header = ({ icon, title, subTitle }) => (
    <header className="header">
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-8 col-sm-10 col-lg-11">
                    <div className="nav-item-box profile small">
                        {icon}
                    </div>
                    <h2 className="title">{ title }</h2>
                    <h4 className="desc">{ subTitle }</h4>
                </div>
                <div className="col-xs-4 col-sm-2 col-lg-1 text-right">
                    <div className="close-btn">
                        <Link to="/">
                            <CloseIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

Header.propTypes = {
    icon: React.PropTypes.element.isRequired,
    title: React.PropTypes.string.isRequired,
    subTitle: React.PropTypes.string.isRequired,
};

export default Header;
