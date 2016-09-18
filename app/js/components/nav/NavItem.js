import React from 'react';

import ContactIcon from 'react-icons/lib/fa/paper-plane';
import ResumeIcon from 'react-icons/lib/fa/file-text';
import ProfileIcon from 'react-icons/lib/fa/user';

const NavItem = ({ type }) => {
    let Icon;

    switch (type) {
    case 'profile':
        Icon = <ProfileIcon />;
        break;
    case 'resume':
        Icon = <ResumeIcon />;
        break;
    case 'contact':
        Icon = <ContactIcon />;
        break;
    default:
        break;
    }

    return (
        <div className="nav-icon hover-animate">
            { Icon }
        </div>
    );
};

NavItem.propTypes = {
    type: React.PropTypes.string.isRequired,
};

export default NavItem;
