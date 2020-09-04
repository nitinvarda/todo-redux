import React from 'react';

const Navbar = () => {
    return (



        <nav className="navbar navbar-expand-md bg-dark navbar-dark justify-content-center" >

            <a className="navbar-brand" href="#todo"><h2>Todos</h2></a>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* 
            <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div> */}
        </nav>

    );
}

export default Navbar;
