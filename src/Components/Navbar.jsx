import React from 'react'

function Navbar({cart}) {
    const {count} = cart; 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand font-weight-bold" href="#">ReactRedux</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                    
                    <div className="shopping_cart">
                        <i className="fa fa-cart-arrow-down"></i>
                        <span className="counter">{count}</span>
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    ); 
}

export default Navbar