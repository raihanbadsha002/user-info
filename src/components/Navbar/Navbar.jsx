import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="/home">
                  @UserInfo
                </a>
            <form>
                <div className="input-group">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input className="text form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
            </form>

            </div>

           

            </nav>
        </div>
    );
};

export default Navbar;