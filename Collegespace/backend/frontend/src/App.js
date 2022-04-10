import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import ResetPassword from './containers/ResetPassword';
import ResetPasswordConfirm from './containers/ResetPasswordConfirm';

import Main from './Connections/Main';
import Layout from './hocs/Layout';
import About from './containers2/About';
import Contact from './containers2/Contact';
import Bloglayout from './Blogcomponent/Bloglayout';
import BlogDetail from './Blogcomponent/BlogDetail';
import Category from './Blogcomponent/Category';
import Footer from './components/Footer';
import Services from './containers2/Services';
import { connect } from 'react-redux';
import ServiceDetail from './containers2/ServiceDetail';
import QandA from './Connections/QandA';
import Schedulemain from './Connections/Schedulemain';

import Chatmain from './Chat System/Chatmain';
import Admin from './Admin/Admin';
import ABlog from './Admin/Adminblog';
import Question from './Admin/Question';
import Sche from './Admin/Sche';
import Profilemain from './Profilemanagement/Profilemain';




const App = ({  isAuthenticated,is_staff,user }) => (
        <Router>

            <Layout>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/About' component={About} />
                    <Route exact path='/Contact' component={Contact} />
                    <Route exact path='/service' component={Services} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    {/* <Route exact path='/admin' component={Admin} /> */}
                    <Route exact path='/adminblog' component={ABlog} />
                    <Route exact path='/adminquestion' component={Question} />
                    <Route exact path='/adminsche' component={Sche} />
                    <Route exact path='/chat' component={Chatmain} />
                    <Route exact path='/profile' component={Profilemain} />
                    {isAuthenticated &&<Route exact path='/chat' component={Chatmain} />}
                    
                    {isAuthenticated&&<Route exact path='/schedulemain' component={Schedulemain} />}
                    {isAuthenticated&&<Route exact path='/QandA' component={QandA} />} 
         
                   {(isAuthenticated&&user?.is_staff) &&<Route exact path='/admin' component={Admin} />} 

                   {isAuthenticated&&<Route exact path='/main' component={Main} />} 
                   {isAuthenticated&&<Route exact path='/bloglayout' component={Bloglayout} />} 
                   {isAuthenticated&&<Route exact path='/blog/:id' component={BlogDetail} />} 
                   {isAuthenticated&&<Route exact path='/Category/:id' component={Category} />} 
                   <Route exact path='/services/:id' component={ServiceDetail} />
                    <Route exact path='/reset-password' component={ResetPassword} />
                    <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm} />
                    <Route exact path='/activate/:uid/:token' component={Activate} />
                   
                </Switch>
            </Layout>
          
            <Footer/>
        
        </Router>
        
);

//  export default App ;    
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    is_staff: state.auth.is_staff,
    user:state.auth.user
});

export default connect(mapStateToProps)(App);
