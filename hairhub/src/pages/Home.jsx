import React from 'react';
import './Home.css';
import salonImage from '../images/salonImage.png';


const Home = () => {
    return (
        <section class="body">
            <div class="hero">
                <h1>
                    Connecting You to Quality Hair Care – Anytime, Anywhere
                </h1>
                <p>
                    Discover, Compare, And Book Appointments With Trusted Hair Care Professionals In Your Area.
                </p>
                <a class="btn" href="#">
                    Explore our services
                </a>
            </div>
            <div class="section">
                <div class="title-1">
                    <div class="horizontal-divider-3"></div>
                    <div class="title-section-1">
                        <h2>
                            Learn more about HairHub
                        </h2>
                        <div class="horizontal-divider-4"></div>
                    </div>
                </div>
                <div class="features">
                    <div class="feature">
                        <img alt="Find your perfect style icon" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-6nf47D8eDuI77Af1xBxBJTsZ.png?st=2024-09-08T17%3A43%3A59Z&amp;se=2024-09-08T19%3A43%3A59Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-08T07%3A37%3A05Z&amp;ske=2024-09-09T07%3A37%3A05Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=IvCCPzV8yB/KsqhLysrM4gNx53/izicamxo9KsxC89U%3D" width="100" />
                        <h3>
                            Find your perfect style
                        </h3>
                        <p>
                            Discover nearby salons and barbershops. Use our search or enable location services to find the perfect match.
                        </p>
                    </div>
                    <div class="divider-vertical"></div>
                    <div class="feature">
                        <img alt="Book an appointment icon" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-QNYrraA7oEBc0cxekzpP0I6s.png?st=2024-09-08T17%3A43%3A53Z&amp;se=2024-09-08T19%3A43%3A53Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-07T21%3A30%3A27Z&amp;ske=2024-09-08T21%3A30%3A27Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=TgnsaMgdt%2BkeLnv%2BPQ5cADzsTErULihy9uhaxqw%2BYoc%3D" width="100" />
                        <h3>
                            Book an appointment
                        </h3>
                        <p>
                            Schedule your appointment. Choose from high quality hair barbers and stylists and get ready for your new look.
                        </p>
                    </div>
                    <div class="divider-vertical"></div>
                    <div class="feature">
                        <img alt="Enjoy your new look icon" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-SeSDUYgy5IZ6i7REnPjmEeRH.png?st=2024-09-08T17%3A43%3A55Z&amp;se=2024-09-08T19%3A43%3A55Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-08T04%3A30%3A47Z&amp;ske=2024-09-09T04%3A30%3A47Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=VIYel/p4jS5vrnZ/nPUSUZaJTrUBQ5nrpreBidNxPpM%3D" width="100" />
                        <h3>
                            Enjoy your new look
                        </h3>
                        <p>
                            Relax and enjoy. Complete your booking and let our professionals do the rest.
                        </p>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="title-2">
                    <div class="horizontal-divider-1"></div>
                    <div class="title-section">
                        <h2>
                            Join the HairHub community
                        </h2>
                    </div>
                </div>
                <div class="horizontal-divider-2"></div>
                <div class="community">
                    <div class="card">
                        <img alt="Salon image" height="200" src={salonImage} width="200" />
                        <div class="dtls-card">
                            <h3>
                                As a salon
                            </h3>
                            <p>
                                Showcase your skills and grow your clientele with HairHub.
                            </p>
                            <a class="btn" href="#">
                                Partner with Us
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <img alt="Barbershop image" height="200" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-9luiNkwwFjfxsKDw8cdTEQIZ.png?st=2024-09-08T17%3A43%3A53Z&amp;se=2024-09-08T19%3A43%3A53Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-07T21%3A30%3A08Z&amp;ske=2024-09-08T21%3A30%3A08Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=owoS4PD7JAWER%2BMEEkc99tI5FzQGip2gPRt1F5xPM%2B4%3D" width="200" />
                        <div class="dtls-card-2">
                            <h3>
                                As a barbershop
                            </h3>
                            <p>
                                Partner with HairHub for online bookings, promotions, and more.
                            </p>
                            <a class="btn" href="#">
                                Partner with Us
                            </a>
                        </div>
                    </div>
                    <div class="card">
                        <img alt="Customer image" height="200" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-RcpoXHkzChYnDbFAyeQ8tamr/user-ehrvabJ3DufsCu8YJ7PqY5gl/img-J1qyU1EApgAYYau9bAuphlF1.png?st=2024-09-08T17%3A43%3A58Z&amp;se=2024-09-08T19%3A43%3A58Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-09-08T05%3A39%3A15Z&amp;ske=2024-09-09T05%3A39%3A15Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=6rCF46bAsJcUIKxcAAXr5pNE5pHlc0H8PTPrjVd/hMQ%3D" width="200" />
                        <div class="dtls-card-3">
                            <h3>
                                As a customer
                            </h3>
                            <p>
                                Experience top-notch hair services with HairHub's expert stylists.
                            </p>
                            <a class="btn" href="#">
                                Explore Services
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Home;
