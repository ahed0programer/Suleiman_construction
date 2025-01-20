import './sidebar.css';
import logo from './logo.png';
import { FaHome, FaPhone } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
        <div className={` d-none d-sm-block sidebar active`}>
            <img src={logo} alt="Logo" className="logo" />
            <ul>
                <li>
                    <Link to="/" title="Home">
                        <FaHome /> الرئيسة
                    </Link>
                </li>
                <li>
                    <Link to="/products" title="Our Products">
                        <AiFillProduct /> منتجاتنا
                    </Link>
                </li>
                <li>
                    <Link to="/members" title="Members">
                        <IoIosPeople /> الأعضاء
                    </Link>
                </li>
                <li>
                    <Link to="/contact" title="Contact Us">
                        <FaPhone /> اتصل بنا
                    </Link>
                </li>
            </ul>
           
        </div>
    );
}

