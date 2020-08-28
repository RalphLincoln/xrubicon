import React, { Component } from 'react'
import './desktopNav.css';

// IMPORTING ICONS
import { RiComputerLine } from 'react-icons/ri';
import { FaPaw, FaTimes } from 'react-icons/fa';
import { GoBeaker } from 'react-icons/go';
import { AiOutlineBarChart } from 'react-icons/ai';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default class DesktopSideNav extends Component {
    render() {
        return (
            <nav className="navbar justify-content-center shadow">
                < div className='navs pt-3' >
                    <ul>
                        <a style={{ fontSize: '14px' }} className='row p-2 tiny text-secondary mr-auto pl-4 mx-auto' href="">
                            <RiComputerLine style={{ color: '#853FA2' }} className='my-auto mr-3' />    Dashboard
                        </a>
                        <li className="nav-item list-unstyled dropdown">
                            <a style={{ fontSize: '14px' }} className="nav-link text-secondary " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FaPaw style={{ color: '#853FA2' }} className='my-auto ml-2 mr-3' />    Analytics <MdKeyboardArrowRight className='' />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <a style={{ fontSize: '14px' }} className='row p-2 text-secondary pl-4 mx-auto' href="">
                            <GoBeaker style={{ color: '#853FA2' }} className='my-auto mr-3' /> Manage Stores
                        </a>
                        <li className="nav-item list-unstyled dropdown">
                            <a style={{ fontSize: '14px' }} className="nav-link text-secondary " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <FaPaw style={{ color: '#853FA2' }} className='my-auto ml-2 mr-3' /> Manage Sales  <MdKeyboardArrowRight className='' />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item list-unstyled dropdown">
                            <a style={{ fontSize: '14px' }} className="nav-link text-secondary " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <AiOutlineBarChart style={{ color: '#853FA2' }} className='my-auto ml-2 mr-3' />  Manage Products   <MdKeyboardArrowRight className='' />
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>

                        <a style={{ fontSize: '14px' }} className='row p-2 text-secondary pl-4 mx-auto' href="">
                            <GoBeaker style={{ color: '#853FA2' }} className='my-auto mr-3' /> Manage Categories
                        </a>
                        <a style={{ fontSize: '14px' }} className='row p-2 text-secondary pl-4 mx-auto' href="">
                            <GoBeaker style={{ color: '#853FA2' }} className='my-auto mr-3' />  Manage Brands
                        </a>
                        <a style={{ fontSize: '14px' }} className='row p-2 text-secondary pl-4 mx-auto' href="">
                            <FaTimes style={{ color: '#853FA2' }} className='my-auto mr-3' /> Logout
                        </a>
                    </ul>
                </div >
            </nav >
        )
    }
}
