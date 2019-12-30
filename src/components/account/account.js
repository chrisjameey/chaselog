import React from 'react';

import './account.css';

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
                <div className="form-box-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" className="" aria-label="Username" placeholder='Username' name='username' value={state.username} onChange = {(e) => update(e.target.name, e.target.value)} required/>
                        </div>
                        <div className="form-group mt-2">
                            <input type="password" className="" aria-label="Username" placeholder='Password' name='password' value={state.password} onChange = {(e) => update(e.target.name, e.target.value)} required />
                        </div>
                        <div className="remember">
                          <input type="checkbox" className='text-left'/>
                          <label>Remember me</label>
                      </div>
                        <div className="form-group">
                          <button className="btn">Next</button>
                      </div>
                      <small className='bottom-link'>Forgot Username/Password? ></small>
                      <small className='bottom-link'>Not Enrolled? Sign up Now > ></small>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default Account;