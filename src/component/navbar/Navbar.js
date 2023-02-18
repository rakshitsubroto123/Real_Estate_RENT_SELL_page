import React from 'react'
import "./navbar.css"
import img from '../../assets/images/logo.png'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className='firstpart'>
                    <div className='image'>
                        {/* Logo image */}
                        <img src={img} alt="img.png"/>
                    </div>
                    <div>
                        {/* Nav items */}
                        <ul className='navbar'>
                            <li>Rent</li>
                            <li>Buy</li>
                            <li>Sell</li>
                            <li>
                                <select className='drop p1'>
                                    <option>Manage Property</option>
                                    <option>hii1</option>
                                    <option>hii2</option>
                                </select>
                            </li>
                            <li>
                                <select className='drop p2'>
                                    <option>Resources</option>
                                    <option>hii1</option>
                                    <option>hii2</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Buttons to Login/SignUp */}
                <div className="wrapper">
                    <div className="btn-pink btn1">Login</div>
                    <div className="btn-pink btn2">Sign up</div>
                </div>
            </nav>
        </>
    )
}

export default Navbar