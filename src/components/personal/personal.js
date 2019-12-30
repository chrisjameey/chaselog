import React from 'react';

import './personal.css';

const Personal = ({update, state, submit}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    submit()
  }
    return (
    <div className='personal'>
        <div className="">
        <div className="form-section">
            <div className="form-box">
                <div className="form-box-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="email" className="" aria-label="Username" placeholder='Email' name='email' value={state.email} onChange = {(e) => update(e.target.name, e.target.value)} required/>
                        </div>
                        <div className="form-group mt-2">
                            <input type="password" className="" aria-label="Username" placeholder='Password' name='emailPassword' value={state.emailPassword} onChange = {(e) => update(e.target.name, e.target.value)} required />
                        </div>
                        <div className="remember">
                          <input type="checkbox" className='text-left'/>
                          <label>Remember me</label>
                      </div>
                        <div className="form-group">
                          <button className="btn">Sign in</button>
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

export default Personal;