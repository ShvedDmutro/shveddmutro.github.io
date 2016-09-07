import React, { Component } from 'react';
import { connect } from 'react-redux';

import Footer from '../components/Footer';

import { fetchData } from '../actions/global';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(fetchData());
    }

    componentWillReceiveProps(props) {
        document.body.className = props.data.isLoading ? 'isLoading' : '';
    }

    render() {
        if (this.props.data.noData) return false;

        return (
            <main className="wrapper">
                { this.props.children }

                <Footer
                  email={ this.props.data.person.email }
                  phone={ this.props.data.person.phone }
                  copyright={ this.props.data.copyright }
                />
            </main>
        );
    }
}

App.propTypes = {
    data: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func,
    children: React.PropTypes.element,
};

// const selector = state => ({
// data: state
// });

export default connect(state => state)(App);
