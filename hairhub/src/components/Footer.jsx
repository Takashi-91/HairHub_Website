
// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <footer class="bg-black text-white py-8">
            <div class="container mx-auto px-4" style="max-width: 1200px;">
                <div class="flex flex-col md:flex-row justify-between items-center w-full">
                    <div class="mb-4 md:mb-0 w-1/4">
                        <h3 class="text-xl font-bold">
                            Hairhub
                        </h3>
                        <p>
                            Connecting you with high-quality hair care services
                        </p>
                    </div>
                    <div class="flex space-x-8 w-3/4">
                        <div class="w-1/4">
                            <h4 class="font-bold mb-2">
                                Legal
                            </h4>
                            <ul>
                                <li>
                                    <a class="hover:text-gray-400" href="#">
                                        Terms of Service
                                    </a>
                                </li>
                                <li>
                                    <a class="hover:text-gray-400" href="#">
                                        Privacy Policy
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="w-1/4">
                            <h4 class="font-bold mb-2">
                                Follow us
                            </h4>
                            <ul class="flex space-x-4">
                                <li>
                                    <a class="hover:text-gray-400" href="#">
                                        <i class="fab fa-instagram">
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a class="hover:text-gray-400" href="#">
                                        <i class="fab fa-twitter">
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <a class="hover:text-gray-400" href="#">
                                        <i class="fab fa-facebook">
                                        </i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="w-1/4">
                            <h4 class="font-bold mb-2">
                                Quick links
                            </h4>
                            <ul>
                                <li>
                                    <a class="hover:text-gray-400" href="#">
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a class="hover:text-gray-400" href="#">
                                        Contact us
                                    </a>
                                </li>
                                <li>
                                    <a class="hover:text-gray-400" href="#">
                                        Blog
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="w-1/4">
                            <h4 class="font-bold mb-2">
                                For Your Business
                            </h4>
                            <ul>
                                <li>
                                    <a class="hover:text-gray-400" href="#">
                                        Business Resources
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
