import { connect } from 'react-redux';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    // Verify what to show, if the user is logged in then it should see it's credits,
    // If it's logged out then it should show sign in with google
    renderContent() {
        switch (this.props.auth) {
            // Still loggin, still deciding
            case null:
                return;
            // logged out, show Log in with google tag
            case false:
                return (
                    <li>
                        <a href='/auth/google'>Login With Google</a>
                    </li>
                );
            // logged in
            default:
                return [
                    <li key='1'>
                        <Payments />
                    </li>,
                    <li key='2' style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key='3'>
                        <a href='/api/logout'>Logout</a>
                    </li>
                ];
        }
    }
    render() {
        return (
            <nav>
                <div className='nav-wrapper light-blue darken-1'>
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className='left brand-logo'
                        style={{ marginLeft: '5px' }}
                    >
                        Emaily
                    </Link>
                    <ul className='right'>{this.renderContent()}</ul>
                </div>
            </nav>
        );
    }
}
function mapStateToProps({ auth }) {
    return { auth };
}
export default connect(mapStateToProps)(Header);
