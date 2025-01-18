
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

<footer className="text-center mt-auto">
    <div className="container p-2">
       
        <div className="row mb-2">
            <div className="col-12">
                <a href="#" className="mx-2">
                    <FaFacebookF />
                </a>
                <a href="#" className="mx-2">
                    <FaTwitter />
                </a>
                <a href="#" className="mx-2">
                    <FaInstagram />
                </a>
                <a href="#" className="mx-2">
                    <FaLinkedin />
                </a>
            </div>
        </div>

        
        <div className="row mb-2">
            <div className="col-12">
                &copy; 2025 Suleiman. All Rights Reserved.
            </div>
        </div>

        
        <div className="row">
            <div className="col-12">
                <ul className="list-inline mb-0">
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
    </div>
</footer>





*/