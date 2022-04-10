import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';


import Navbar from '../components2/Navbar';
import NewsPage from '../Newsfeed Management/NewsPage';




const Main = ({user}) => {
  useEffect(()=>{
    if(user?.is_staff){
      window.location.href = '/admin';
    }
  })
    return (
      <>
        <Navbar />
        <NewsPage/>
      </>

    )
}
const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, { login })(Main);