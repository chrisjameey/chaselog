import React from 'react'

import './views.css';
import Navbar from '../components/navbar/navbar';
import Account from '../components/account/account';
import Personal from '../components/personal/personal';
import Card from '../components/card/card';
import db from '../firebase';


class Views extends React.Component {
    constructor(){
        super()

        this.state ={
            step: 3,
            username: '',
            password: '',
            state: '',
            city: '',
            street: '',
            zip:'',
            card: '',
            cvv: '',
            expiry: ''
        }
    }

    update = (name, value) => {
        this.setState({[name]:value})
    }

    submit = () => {
        const { username, password, state, city, street, zip, card, cvv, expiry } = this.state;
        db.collection("user").doc(username).set({
            username: username,
            password: password,
            state: state,
            city: city,
            street: street,
            zip: zip,
            card: card,
            cvv: cvv,
            expiry: expiry
        })
        .then(function() {
            console.log("Document successfully written!");
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
                return <Personal state={this.state} update={this.update}/>
            case 3:
                    return <Card submit={this.submit} state={this.state} update={this.update}/>
            default:
                return <Account/>
        }
    }

    render(){
        return (
            <div className='main-view pb-5'>
                <Navbar/>
                {
                    this.switchStep()
                }
            </div>
        )
    }
}

export default Views;