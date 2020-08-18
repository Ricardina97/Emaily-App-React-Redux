// Survey Field contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <h5>{label}</h5>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className='red-text' style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
        </div>
    );
};
