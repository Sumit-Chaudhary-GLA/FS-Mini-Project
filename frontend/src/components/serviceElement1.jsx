import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/serviceElement1.css";


const ServiceElement1 = ({
    serviceName,
    description,
    checkOutDesc,
    hourlyRate,
    basePrice,
    imageForCheckout,

    img1,
    img2,
    img3,
}) => {
  const navigate = useNavigate();

  const handleBookNow = (service) => {
    navigate("/checkout", { state: service });
  };

  return (
    <div className="service-card">
      <div className="card-body">
        <div className="row g-3">
          {/* Main Image */}
          <div className="col-12 main-image">
            <img src={img1} alt="Main Service" className="img-fluid rounded" />
            <div className="text-overlay">
              <h1>{serviceName}</h1>
              <p>
                {description}
              </p>
              <button
                onClick={() =>
                  handleBookNow({
                    serviceName: serviceName,
                    description: checkOutDesc,
                    hourlyRate: hourlyRate,
                    basePrice: basePrice,
                    image: imageForCheckout,
                  })
                }
              >
                BOOK NOW
              </button>
            </div>
          </div>
          {/* Smaller Images */}
          <div className="col-6">
            <img src={img2} alt="Service 1" className="img-fluid rounded" />
          </div>
          <div className="col-6">
            <img src={img3} alt="Service 2" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceElement1;
