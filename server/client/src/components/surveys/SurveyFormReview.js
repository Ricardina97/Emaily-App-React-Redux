// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <h5>{label}</h5>
                <div>{formValues[name]}</div>
            </div>
        );
    });
    return (
        <div>
            <h4>Please confirm your entries</h4>
            {reviewFields}
            <button
                className='yellow darken-3 white-text btn-flat'
                onClick={onCancel}
            >
                Back
            </button>
            <button
                onClick={() => {
                    submitSurvey(formValues, history);
                    toast('🦄 Survey Sent!', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined
                    });
                }}
                className='green btn-flat right white-text'
            >
                Send Survey
                <i className='material-icons right'>email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
