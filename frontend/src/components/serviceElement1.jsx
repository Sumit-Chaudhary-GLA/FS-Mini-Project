    import React from "react";
    import "./styles/serviceElement1.css";
    // import "bootstrap/dist/css/bootstrap.min.css";
    // import "bootstrap/dist/js/bootstrap.bundle.min.js";
    import img1 from "./servicesImages/1.jpg";
    import img2 from "./servicesImages/2.jpg";
    import img3 from "./servicesImages/3.jpg";

    const ServiceElement1 = () => {
    return (
        <div className="card service-card shadow-sm">
        <div className="card-body">
            <div className="row g-3">
            {/* Main Image */}
            <div className="col-12 main-image">
                <img src={img3} alt="Main Service" className="img-fluid rounded" />
                <div className="text-overlay">
                    <h1>CINEMATOGRAPHY</h1>
                <p>
                    At DRUDS Media Productions, we create stunning cinematic visuals that bring your vision to life. With cutting-edge technology and creativity, we turn your stories into unforgettable masterpieces
                </p>
                <button>BOOK NOW</button>
                </div>
            </div>
            {/* Smaller Images */}
            <div className="col-6">
                <img src={img1} alt="Service 1" className="img-fluid rounded" />
            </div>
            <div className="col-6">
                <img src={img2} alt="Service 2" className="img-fluid rounded" />
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ServiceElement1;
        