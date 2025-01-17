import './sidebar.css';
import logo from './logo.svg';
import { FaHome, FaPhone } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function SideBar() {
    const [showSide, setShowSide] = useState(true);

    return (
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
    );
}
