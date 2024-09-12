import React from "react";
import "./Contact.css";
const Contact = () => {
    return (
        <>
            <div class="navbar">
                <div class="logo">
                    <i class="fas fa-cut"></i>
                    <span>HairHub</span>
                </div>
                <div class="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Features</a>
                    <a href="#">About Us</a>
                    <a href="#">Blog</a>
                </div>
                <button class="join-btn">Join Waitlist</button>
            </div>
            <div class="section">
                <h2>Join our waitlist</h2>
                <hr />
                <p>
                    Be the first to know about our launch and receive exclusive offers
                </p>
                <div class="form-container">
                    <img
                        alt="A hairdresser cutting a client's hair in a modern salon"
                        height="400"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-V7HNEm4cOnLaNUvlPl5zQXKL.png?st=2024-09-08T18%3A33%3A21Z&amp;se=2024-09-08T20%3A33%3A21Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-07T21%3A41%3A40Z&amp;ske=2024-09-08T21%3A41%3A40Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=zLlj3tjQj1/a%2BNL8trCBCz3Ys4vWZp/RWd/SDnWrPpE%3D"
                        width="600"
                    />
                    <form>
                        <label>Your Name</label>
                        <input placeholder="Enter Your Full Name" type="text" />
                        <label>Your Email</label>
                        <input placeholder="Enter Your Email Address" type="email" />
                        <label>Your Message</label>
                        <textarea placeholder="How can we assist you?"></textarea>
                        <button type="submit">Join Now</button>
                    </form>
                </div>
            </div>
            <div class="section">
                <h2>Contact Us</h2>
                <hr />
                <div class="form-container">
                    <img
                        alt="A chair with hairdressing tools and a ring light"
                        height="400"
                        src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-UTmjcVCfXJJ3SGsprVlAU5b7.png?st=2024-09-08T18%3A33%3A22Z&amp;se=2024-09-08T20%3A33%3A22Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-07T21%3A46%3A15Z&amp;ske=2024-09-08T21%3A46%3A15Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=PDDnVm7VwNlMBxQ%2BZc3%2BeKF7VSNh%2BK3p76FtHckwnaQ%3D"
                        width="600"
                    />
                    <form>
                        <label>Your Name</label>
                        <input placeholder="Enter Your Full Name" type="text" />
                        <label>Your Email</label>
                        <input placeholder="Enter Your Email Address" type="email" />
                        <label>Your Message</label>
                        <textarea placeholder="How can we assist you?"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div class="footer">
                <div class="footer-section">
                    <h4>Hairhub</h4>
                    <p>Connecting you with high-quality hair care services</p>
                </div>
                <div class="footer-section">
                    <h4>Legal</h4>
                    <a href="#">Terms of Service</a>
                    <a href="#">Privacy</a>
                </div>
                <div class="footer-section">
                    <h4>Follow us</h4>
                    <div class="social-icons">
                        <a href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-facebook"></i>
                        </a>
                    </div>
                </div>
                <div class="footer-section">
                    <h4>Quick links</h4>
                    <a href="#">About Us</a>
                    <a href="#">Contact us</a>
                    <a href="#">Blog</a>
                </div>
                <div class="footer-section">
                    <h4>For Your Business</h4>
                    <a href="#">Business Resources</a>
                </div>
            </div>
        </>
    );
};

export default Contact;
