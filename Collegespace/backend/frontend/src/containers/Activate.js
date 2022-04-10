import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';
import {toast} from 'react-toastify'

const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);
    toast.configure()
    const verify_account = e => {
        const uid = match.params.uid;
        const token = match.params.token;

        verify(uid, token);
        setVerified(true);
    };
    if (verified) {
        toast.success('successfully Verified')

        return <Redirect to='/' />
    }
    
    return (
        <div className='container'>
            <div 
                className='d-flex flex-column justify-content-center align-items-center'
                style={{ marginTop: '200px' }}
            >
                <h1>Please kindly verify your Account:</h1>
                <button
                    onClick={verify_account}
                    style={{ marginTop: '50px' }}
                    type='button'
                    className='btn btn-primary'
                >
                    Verify
                   
                </button>
            </div>
        </div>
    );
};

export default connect(null, { verify })(Activate);
