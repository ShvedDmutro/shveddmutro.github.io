import React from 'react';
import { Link } from 'react-router';

import Item from './NavItem';

const Navigation = ({ navigation }) => (
    <nav className="menu">
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    {
                        navigation.map((item, index) => (
                            <Link to={ item.type } key={ index }>
                                <div className={ `nav-item-box ${item.type}` }>
                                    {
                                        <Item type={ item.type } />
                                    }
                                    <span className="txt">{ item.title }</span>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    </nav>
);


Navigation.propTypes = {
    navigation: React.PropTypes.array.isRequired,
};

export default Navigation;
