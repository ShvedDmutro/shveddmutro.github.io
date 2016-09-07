import React from 'react';
import { connect } from 'react-redux';

import Icon from '../components/nav/NavItem';

import Header from '../components/header/Header';

const Profile = ({ data }) => {
    const icon = <Icon type="profile" />;
    return (
        <div>
            <Header icon={ icon } title={ data.profile.title } subTitle={ data.profile.subTitle } />
        </div>
    );
};

Profile.propTypes = {
    data: React.PropTypes.object.isRequired,
};

export default connect(state => state)(Profile);
