import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

// The amount in the Stripe Checkout stands for the amount
// of cents that you want to request the user, this means that
// 500 === 500 cents === 5 dollars
class Payments extends Component {
    render() {
        return (
            <StripeCheckout
                name='Emaily'
                description='$5 for 5 credits!'
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className='btn indigo darken-4'>Add Credits</button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);
