import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './footer.css'

export default function Footer() {
    return (
        <div className="app">
            <div className="content">
                {/* Your main content goes here */}
            </div>

            <footer className=" text-white text-center py-4 mt-auto">
                <div className="container">
                    <p className="mb-2">&copy; 2025 Suleiman. All Rights Reserved.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="#" className="text-white text-decoration-none">
                                Privacy Policy
                            </a>
                        </li>
                        <li className="list-inline-item">|</li>
                        <li className="list-inline-item">
                            <a href="#" className="text-white text-decoration-none">
                                Terms of Service
                            </a>
                        </li>
                        <li className="list-inline-item">|</li>
                        <li className="list-inline-item">
                            <a href="#" className="text-white text-decoration-none">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <div className="mt-3">
                        <a href="#" className="text-white mx-2">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-white mx-2">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-white mx-2">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-white mx-2">
                            <FaLinkedin />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
