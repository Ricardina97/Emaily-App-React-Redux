import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div
                    className='card light-blue lighten-5 z-depth-2'
                    key={survey._id}
                >
                    <div className='card-content'>
                        <span className='card-title'>{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className='right'>
                            Sent On:
                            {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className='card-action '>
                        <a className='indigo-text'> Answer:</a>
                        <a className='black-text'>Yes: {survey.yes}</a>
                        <a className='black-text'>No: {survey.no}</a>
                    </div>
                </div>
            );
        });
    }
    render() {
        return <div>{this.renderSurveys()}</div>;
    }
}

function mapStateToProps({ surveys }) {
    return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
