import React from 'react';
import './navbar.css'

import Logo from '../../assets/capital-one-logo.svg'
import usa from '../../assets/usa.png'

const Navbar = () => (
    <div>
        <div className="header pt-3 pb-3">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <img src={Logo} alt='logo' width="125px"/>
                    <div className="d-flex">
                        <div className="dropdown mr-1">
                        <button type="button" className="btn dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                            <img src={usa} width="35px" alt='logo'/>
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                            <a className="dropdown-item" href="/"> United States</a>
                            <a className="dropdown-item" href="/">Canada</a>
                            <a className="dropdown-item" href="/">United Kingdom</a>
                        </div>
                        </div>
                        <div className="dropdown mr-1">
                            <button type="button" className="btn dropdown-toggle" id="dropdownMenuOffset" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-offset="10,20">
                            English
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                            <a className="dropdown-item" href="/">Espanol</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Navbar;