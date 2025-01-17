
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './footer.css'

export default function Footer() {
    return (
        <footer className="text-center mt-auto">
        <div className="container p-2">
            <div>
                <a href="#" className="mx-3">
                    <FaFacebookF />
                </a>
                <a href="#" className="mx-3">
                    <FaTwitter />
                </a>
                <a href="#" className="mx-3">
                    <FaInstagram />
                </a>
                <a href="#" className="mx-3">
                    <FaLinkedin />
                </a>
            </div>
            <div>&copy; 2025 Suleiman. All Rights Reserved.</div>
            <div>
                <ul className="list-inline">
                    <li className="list-inline-item">
                        <a href="#" className="text-decoration-none">
                            Privacy Policy
                        </a>
                    </li>
                    <li className="list-inline-item">|</li>
                    <li className="list-inline-item">
                        <a href="#" className="text-decoration-none">
                            Terms of Service
                        </a>
                    </li>
                    <li className="list-inline-item">|</li>
                    <li className="list-inline-item">
                        <a href="#" className="text-decoration-none">
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
    
    );
}
/*




*/