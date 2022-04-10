import React, { Fragment, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';


const Navbar = ({ logout, isAuthenticated }) => {
    const [Navigate, setNavigate] = useState(false);

    const logout_user = () => {
        logout();
        setNavigate(true);
    };

    const guestLinks = () => (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-black bg-white">
            <div className="container-fluid">
            <div className='col-10 mx-auto'>
          <button className="navbar-toggler" 
          type="button" data-bs-toggle="collapse"
           data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
             aria-expanded="false"
              aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
           </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
          <li className="nav-item">
          
          <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li className="nav-item">
          <Link className='nav-link' to='/service'>Services</Link>
         </li>
         <li className="nav-item">
          <Link className='nav-link' to='/About'>About</Link>
         </li>
        <li className="nav-item">
          <Link className='nav-link' to='/contact'>Contact</Link>
        </li>
    
        
       
      </ul>
      
    </div>
  </div>
  </div>
</nav>
        </Fragment>
    );

    const authLinks = () => (
        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">  
        <Link className='nav-link' to='/'>Home</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to='/service'>Services</Link>
        </li>
        <li className="nav-item">
        <Link className='nav-link' to='/About'>About</Link>
        </li>
        <li className="nav-item">
          <Link className='nav-link' to='/contact'>Contact</Link>
        </li>
        <li className='nav-item'>
            <a className='nav-link' to='/' onClick={logout_user}>Logout</a>
        </li>
        </ul>
    );

    return (
        <Fragment>
            <nav className='navbar navbar-expand-lg navbar-white bg-white'>
                
                <Link className='navbar-brand' to='/'>College Space</Link>
                <button 
                    className='navbar-toggler c' 
                    type='button' 
                    data-toggle='collapse' 
                    data-target='#navbarNav' 
                    aria-controls='navbarNav' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'

                >
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav'>
                        
                        {isAuthenticated ? authLinks() : guestLinks()}
                    </ul>
                </div>
                
            </nav>
            {Navigate ? <Navigate to='/' /> : <Fragment></Fragment>}
        </Fragment>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout })(Navbar);
