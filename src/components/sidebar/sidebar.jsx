import './sidebar.css';
import logo from './logo.svg';
import { FaHome, FaPhone } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function SideBar() {

    return (
        <div className='sidebar active d-none d-sm-block'>
            <header>
                <GiHamburgerMenu className="hamburger-icon" />
            </header>
            <img src={logo} alt="Logo" className='logo' />
            <ul>
                <li>
                    <Link to="/" title="Home">
                        <FaHome /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/products" title="Our Products">
                        <AiFillProduct /> Our Products
                    </Link>
                </li>
                <li>
                    <Link to="/members" title="Members">
                        <IoIosPeople /> Members
                    </Link>
                </li>
                <li>
                    <Link to="/contact" title="Contact Us">
                        <FaPhone /> Contact us
                    </Link>
                </li>
            </ul>
        </div>
    );
}
/*
<div className={showSide ? 'sidebar active' : 'sidebar shrink'}>
            <header>
                <GiHamburgerMenu onClick={() => setShowSide(!showSide)} className="hamburger-icon" />
            </header>
            {showSide && <img src={logo} alt="Logo" className='logo' />}
            <ul>
                <li>
                    <a href="/" title="Home">
                        <FaHome /> {showSide && "Home"}
                    </a>
                </li>
                <li>
                    <a href="/" title="Our Products">
                        <AiFillProduct /> {showSide && "Our Products"}
                    </a>
                </li>
                <li>
                    <a href="/" title="Members">
                        <IoIosPeople /> {showSide && "Members"}
                    </a>
                </li>
                <li>
                    <a href="/" title="Contact Us">
                        <FaPhone /> {showSide && "Contact us"}
                    </a>
                </li>
            </ul>
        </div>
        */