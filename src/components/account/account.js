import React from 'react';

import './account.css';
import user from '../../assets/icon-user.svg'

const Account = ({update, state}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    update('step', 2)
  }
    return (
    <div className='account'>
        <div className="">
        <div className="form-section">
            <div className="form-box">
                <div className="form-box-header text-center pt-5">
                    <img src={user} alt='user'/>
                    <p className="mt-3 font-weight-bold">Confirm Your Account</p>
                </div>
                <div className="form-box-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label className="d-block">Username</label>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1"><i className="far fa-user" style={{fontSize: "28px"}}></i></span>
                            </div>
                            <input type="text" className="" aria-label="Username" name='username' value={state.username} onChange = {(e) => update(e.target.name, e.target.value)} required/>
                          </div>
                        </div>
                        <div className="form-group mt-2">
                            <label className="d-block">Password</label>
                          <div className="input-group mb-3">
                            <div className="input-group-prepend">
                              <span className="input-group-text" id="basic-addon1"><i className="fas fa-user-lock" style={{fontSize: "20px"}}></i></span>
                            </div>
                            <input type="password" className="" aria-label="Username" name='password' value={state.password} onChange = {(e) => update(e.target.name, e.target.value)} required />
                          </div>
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

export default Account;