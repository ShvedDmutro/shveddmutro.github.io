import React from 'react';
import { connect } from 'react-redux';

import HomeHeader from '../components/header/HeaderHome';
import Navigation from '../components/nav/Navigation';

const Home = ({ data }) => (
    <div>
        <HomeHeader
            person={ data.person }
            social={ data.social }
        />

        <Navigation navigation={ data.navigation } />
    </div>
);

Home.propTypes = {
    data: React.PropTypes.object.isRequired,
};

export default connect(state => state)(Home);
