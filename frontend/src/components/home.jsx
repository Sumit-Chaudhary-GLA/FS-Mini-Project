import React from "react";
import { Link } from "react-router-dom";
import './styles/home.css';  
import image2 from './carousal-images/2.jpg';
import image3 from './carousal-images/3.jpg';
import image4 from './carousal-images/4.jpg';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <div className="hero-section text-center text-white py-5">
                <div>
                    <h1>Welcome to DRUDS Media Productions</h1>
                    <p>Your one-stop solution for all creative media productions</p>
                    <a href="/services">Explore Our Services</a>
                </div>
            </div>

            {/* Featured Services Section */}
            
            <div className="featured-services py-5">
            <h2>Featured Services</h2>
                <div className="row">
                    <div className="col-md-4 card">
                        <img src={image2} className="card-img-top service-images" alt="Promotional Shoots" />
                        <div className="card-body">
                            <h5 className="card-title">PROMOTIONAL SHOOTS</h5>
                            <p className="card-text">Elevate your style with our exclusive range of curated promotional shoots that bring fashion to life.</p>
                        </div>
                    </div>
                    <div className="col-md-4 card">
                        <img src={image3} className="card-img-top service-images" alt="Cinematography" />
                        <div className="card-body">
                            <h5 className="card-title">CINEMATOGRAPHY</h5>
                            <p className="card-text">Transform your vision into visual masterpieces with our stunning cinematography.</p>
                        </div>
                    </div>
                    <div className="col-md-4 card">
                        <img src={image4} className="card-img-top service-images" alt="Product Shoots" />
                        <div className="card-body">
                            <h5 className="card-title">PRODUCT SHOOTS</h5>
                            <p className="card-text">Showcase your products beautifully with our expert photography and video making services.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bootstrap JS */}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </>
    );
}

export default Home;
