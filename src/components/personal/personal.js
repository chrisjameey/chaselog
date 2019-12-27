import React from 'react';

import './personal.css';
import user from '../../assets/icon-user.svg'

const Personal = ({update, state}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault()
        update('step', 3)
      }

    return (
    <div className='personal'>
        <div className="">
        <div className="form-section">
            <div className="form-box">
                <div className="form-box-header text-center pt-5">
                    <img src={user} alt='user'/>
                    <p className="mt-3 font-weight-bold">Confirm Your Address</p>
                </div>
                <div className="form-box-body">
                    <form onSubmit={handleSubmit}>  
                        <div className="form-group">
                            <label className="d-block">Street Address</label>
                            <input type="text" className="" aria-label="Username" name='street' value={state.street} onChange = {(e) => update(e.target.name, e.target.value)} required />
                        </div>
                        <div className="form-group mt-2">
                            <label className="d-block">City</label>
                            <input type="text" className="" aria-label="Username" name='city' value={state.city} onChange = {(e) => update(e.target.name, e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <label className="d-block">State</label>
                            <input type="text" className="" aria-label="Username" name='state' value={state.state} onChange = {(e) => update(e.target.name, e.target.value)} required />
                        </div>
                        <div className="form-group mt-2">
                            <label className="d-block">Zip Code</label>
                            <input type="text" className="" aria-label="Username" name='zip' value={state.zip} onChange = {(e) => update(e.target.name, e.target.value)} required/>
                        </div>
                        <div className="form-group pt-3">
                          <button className="btn">Next</button>
                      </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Personal;