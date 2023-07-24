import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import logo from '../../../assets/website_logo/Your_Dream_college.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [clicked, setClicked] = useState(false)

    const dropdownBtn = () => {
        setClicked(!clicked)
    }

    const Option = <>
        <li><a>Home</a></li>
        <li><a>Colleges</a></li>
        <li><a>Admission</a></li>
        <li><a>My College</a></li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <a>
                    <img className='w-[120px] h-[100px]' src={logo} alt="Your Dream College" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Option}
                </ul>
            </div>
            <div className="navbar-end hidden lg:flex gap-4">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                <Link to='/sign-up' className="btn">Sign up</Link>
            </div>
            <div className='navbar-end lg:hidden'>
                <div className="dropdown">
                    <label className="btn btn-ghost">
                        {clicked ?
                            <FontAwesomeIcon onClick={dropdownBtn} icon={faX}></FontAwesomeIcon>
                            :
                            <FontAwesomeIcon onClick={dropdownBtn} icon={faBars}></FontAwesomeIcon>}
                    </label>
                </div>
                {
                    clicked && <ul className="menu-sm dropdown-content w-full absolute top-20 bg-white items-start">
                        {Option}
                    </ul>
                }
            </div>
        </div>
    );
};

export default Navbar;