import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    return (
        <div>
            <ToastContainer />
            <SurveyList />
            <div className='fixed-action-btn'>
                <Link
                    to='/surveys/new'
                    className='btn-floating btn-large cyan pulse'
                >
                    <i className='material-icons'>add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
