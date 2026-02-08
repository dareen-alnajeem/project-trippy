import React from 'react';
import './Footer.css';
import {
    FaFacebookSquare,
    FaInstagramSquare,
    FaBehanceSquare,
    FaTwitterSquare
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-col-brand">
                <h2>Trippy</h2>
                <p>Choose your favourite destination.</p>
            </div>

            {/* icons */}
            <div className="icons">
                <FaFacebookSquare />
                <FaInstagramSquare />
                <FaBehanceSquare />
                <FaTwitterSquare />
            </div>

            <div className="footer-container">
                <div className="footer-col">
                    <h3>Project</h3>
                    <ul>
                        <li>Changelog</li>
                        <li>Status</li>
                        <li>License</li>
                        <li>All Versions</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Community</h3>
                    <ul>
                        <li>GitHub</li>
                        <li>Issues</li>
                        <li>Project</li>
                        <li>Twitter</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Help</h3>
                    <ul>
                        <li>Support</li>
                        <li>Troubleshooting</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h3>Others</h3>
                    <ul>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>License</li>
                    </ul>
                </div>
            </div>

        </footer>
    );
};

export default Footer;