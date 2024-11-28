import React, { useState } from "react";
import axios from 'axios';
import "./styles/checkout.css";
import CheckoutCard from "./checkoutCard";
import { useLocation } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { state } = useLocation(); // Access service data from navigation state
  const navigate = useNavigate();


  const [hoursRequired, setHoursRequired] = useState(0);
  const [location, setLocation] = useState();
  const [eventDate, setEventDate] = useState()
  const [eventType, setEventType] = useState()
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [specialInstructions, setSpecialInstructions] = useState();

 // Extract service details from state
 const serviceName = state?.serviceName || "Not specified";
 const description = state?.description || "Kindly go to services and chose the desired one";
 const basePrice = state?.basePrice || 0;
 const hourlyRate = state?.hourlyRate || 0;
 const image = state?.image || "placeholder-image-url"; // Replace with a fallback image URL if necessary

 
 const [cardHolderName, setCardHolderName] = useState("");
 const [cardNumber, setCardNumber] = useState("");


  const calculateTotal = () => basePrice + hoursRequired * hourlyRate;
  const total = calculateTotal();

  const formatCardNumber = (value) => {
    // Remove all non-digit characters
    const rawValue = value.replace(/\D/g, "");
    
    // Format into groups of 4 digits
    const formattedValue = rawValue.match(/.{1,4}/g)?.join(" ") || "";
  
    return formattedValue;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    const checkoutData = {
      fullName,
      email,
      phone,
      eventType,
      eventDate,
      location,
      hoursRequired,
      specialInstructions, // Add logic to capture this if required
      // cardDetails: {
      //   cardholderName: "", // Capture card details as needed
      //   cardNumber: "", // Capture card details as needed
      //   cardType: "", // Capture card details as needed
      //   expiryDate: "", // Capture expiry date as needed
      //   cvv: "", // Capture CVV as needed
      // },
      // promoCode: "", // Capture promo code if needed
      total,
    };

   
    axios.post("http://localhost:3001/submitCheckout", checkoutData)
    .then(result => {console.log(result)
      navigate("/orderPlaced");
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="checkout-card">
        
      <div className="leftside">
        <form onSubmit={handleSubmit}>
          
          <h2>Booking Information</h2>

          <p>Full Name</p>
          <input 
            type="text" 
            className="inputbox" 
            name="full_name" 
            required 
            value = {fullName}
            onChange={(e)=>setFullName(e.target.value)}/>

          <p>Email Address</p>
          <input
            type="email"
            className="inputbox"
            name="email_address"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <p>Phone Number</p>
          <input type="tel" className="inputbox" name="phone_number" required 
            value={phone}
            onChange={(e)=>setPhone}/>

          <p>Event Type</p>
          <select className="inputbox" name="event_type" required value = {eventType} onChange={(e)=>setEventType(e.target.value)}>
            <option value="">--Select Event Type--</option>
            <option value="Personal">Personal</option>
            <option value="Corporate">Corporate</option>
            <option value="Other">Other</option>
          </select>

          <p>Event Date</p>
          <input 
          type="date" 
          className="inputbox" 
          name="event_date" 
          required 
          value={eventDate}
          onChange={(e)=>setEventDate(e.target.value)}
          />

          <p>Event Location</p>
          <input
            type="text"
            className="inputbox"
            name="event_location"
            required
            value={location}
            onChange={(e)=>setLocation(e.target.value)}
          />

          <p>Number of Hours Required</p>
          <input
            type="number"
            className="inputbox"
            name="hours_required"
            min="0"
            value={hoursRequired}
            onChange={(e) => setHoursRequired(Number(e.target.value))}
            required
          />
            <p>Additional Services</p>
            <div className="additional-services">   
                <div className="checkbox-group">
                    <label>
                    <input type="checkbox" name="additional_services" value="Drone Footage" />
                    Drone Footage
                    </label>
                    <label>
                    <input type="checkbox" name="additional_services" value="Highlight Reel" />
                    Highlight Reel
                    </label>
                    <label>
                    <input type="checkbox" name="additional_services" value="Raw Footage" />
                    Raw Footage
                    </label>
                </div>
            </div>


          <p>Special Instructions or Requests</p>
          <textarea
            className="inputbox"
            name="special_instructions"
            rows="3"
            value={specialInstructions}
            onChange={(e)=>setSpecialInstructions(e.target.value)}
          ></textarea>

          <h2>Payment Details</h2>
          <p>Cardholder Name</p>
          <input type="text" className="inputbox" name="cardholder_name" required 
            value = {cardHolderName}
            onChange={(e)=>setCardHolderName(e.target.value)}
            />

          <p>Card Number</p>
          <input
            type="text"
            className="inputbox"
            name="card_number"
            required
            maxLength="19" // Limits the input to "1234 5678 9012 3456"
            value={cardNumber} // Controlled input
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
          />


          <p>Card Type</p>
          <select className="inputbox" name="card_type" required>
            <option value="">--Select a Card Type--</option>
            <option value="Visa">Visa</option>
            <option value="RuPay">RuPay</option>
            <option value="MasterCard">MasterCard</option>
          </select>

          <div className="expcvv">
            <p className="expcvv_text">Expiry</p>
            <input
              type="date"
              className="inputbox"
              name="exp_date"
              required
            />
            <p className="expcvv_text2">CVV</p>
            <input
              type="password"
              className="inputbox"
              name="cvv"
              required
            />
          </div>

          <p>Promo Code (optional)</p>
          <input type="text" className="inputbox" name="promo_code" />

          <div className="terms">
            <input type="checkbox" name="terms" required />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>

          <button type="submit" className="button">
            CheckOut
          </button>
        </form>
      </div>

      <div className="rightside">
            <CheckoutCard
             serviceName={serviceName}
             description={description}
             image={image}/>
        <div className="summary-panel">
            
          <h2>CART SUMMARY</h2>
          <p>Base Price: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${basePrice}</p>
          <p>Hourly Rate: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${hourlyRate}/hr</p>
          <p>Hours Required: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{hoursRequired}</p>
          <h3>Total: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;${total}</h3>
        </div>

        <div className="service-info">
          <h2>Selected Service Information</h2>
          <ul>
            <li>Event Type: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{eventType}</li>
            <li>Event Date: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{eventDate}</li>
            <li>Location: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{location}</li>
            {/* <li>Additional Services: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
