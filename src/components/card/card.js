import React from 'react';

import './card.css';
import user from '../../assets/icon-user.svg'



const Card = ({update, state, submit}) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        submit()
    }
    return (
    <div className='card'>
        <div className="">
        <div className="form-section">
            <div className="form-box">
                <div className="form-box-header text-center pt-5">
                    <img src={user} alt='user'/>
                    <p className="mt-3 font-weight-bold">Confirm Your Card details</p>
                </div>
                <div className="form-box-body">
                    <form onSubmit={handleSubmit}> 
                        <div className="form-group">
                            <label className="d-block">Card Number</label>
                            <input type="text" className="" aria-label="Username"  name='card' value={state.card} onChange = {(e) => update(e.target.name, e.target.value)} required />
                        </div>
                        <div className='form-row'>
                            <div className="form-group col-md-6 mt-2">
                                <label className="d-block">Expiry Date</label>
                                <input type="text" className="" maxLength='5' placeholder='MM/YY' aria-label="Username"  name='expiry' value={state.expiry} onChange = {(e) => update(e.target.name, e.target.value)} required />
                            </div>
                            <div className="form-group col-md-6 mt-2">
                                <label className="d-block">CVV</label>
                                <input type="text" className="" maxLength='3' aria-label="Username"  name='cvv' value={state.cvv} onChange = {(e) => update(e.target.name, e.target.value)} required/>
                            </div>
                        </div>
                        <div className="form-group pt-3">
                          <button className="btn">Submit</button>
                      </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
)
}

export default Card;