import React, { Suspense, useEffect } from "react";
import "./styles/services.css";

// Dynamically import ServiceElement1
const ServiceElement1 = React.lazy(() => import("./serviceElement1"));

const importAllImages = (requireContext) => {
  const images = {};
  requireContext.keys().forEach((key) => {
    const category = key.split('/')[1]; // Extract folder name (e.g., birthday, wedding)
    if (!images[category]) {
      images[category] = [];
    }
    images[category].push(requireContext(key)); // Push image to its category
  });
  return images;
};

// Import images from all subdirectories
const allImages = importAllImages(require.context('./servicesImages', true, /\.(png|jpe?g|svg)$/));

const Services = ({ searchQuery }) => {
  // Preload images when the component mounts
  useEffect(() => {
    const preloadImage = (src) => {
      const img = new Image();
      img.src = src;
    };

    Object.values(allImages).flat().forEach(preloadImage);
  }, []); // Empty dependency array means it runs once when the component mounts

  // Service data with dynamically imported images
  const serviceData = [
    {
      serviceName: "Cinematography",
      description: "At DRUDS Media Productions, we create stunning cinematic visuals that bring your vision to life. With cutting-edge technology and creativity, we turn your stories into unforgettable masterpieces.",
      checkOutDesc: "Creating stunning cinematic visuals.",
      hourlyRate: 60,
      basePrice: 350,
      images: allImages.cinematography || [],
    },
    {
      serviceName: "Wedding Shoot",
      description: "Capture the magic of your big day with professional wedding shoots. From intimate moments to grand celebrations, every detail is beautifully preserved. Let us tell your unique love story through stunning visuals.",
      checkOutDesc: "Preserve your special day with stunning wedding shoots.",
      hourlyRate: 90,
      basePrice: 250,
      images: allImages.wedding || [],
    },
    {
      serviceName: "Promotional Shoot",
      description: "Showcase your brand with high-quality promotional shoots. Whether for products or services, we highlight what makes your business unique. Let us create visuals that leave a lasting impression.",
      checkOutDesc: "Elevate your brand with impactful promotional shoots.",
      hourlyRate: 100,
      basePrice: 480,
      images: allImages.promotional || [],
    },
    {
      serviceName: "Corporate Event Coverage",
      description: "Professional coverage for corporate events, conferences, and seminars. We ensure every important moment is captured to reflect your brand's professionalism and style.",
      checkOutDesc: "Capture the highlights of your corporate events.",
      hourlyRate: 85,
      basePrice: 400,
      images: allImages.corporate || [],
    },
    {
      serviceName: "Music Video Production",
      description: "Transform your music into stunning visuals with our music video production services. From concept to final cut, we bring your artistic vision to life.",
      checkOutDesc: "Turn your music into visual art.",
      hourlyRate: 120,
      basePrice: 600,
      images: allImages.musicVideo || [],
    },
    {
      serviceName: "Real Estate Photography",
      description: "Highlight your property’s best features with professional real estate photography. Perfect for listings, brochures, and virtual tours.",
      checkOutDesc: "Showcase properties with captivating visuals.",
      hourlyRate: 75,
      basePrice: 300,
      images: allImages.realEstate || [],
    },
    {
      serviceName: "Food Photography",
      description: "Capture the flavor and appeal of your culinary creations with mouthwatering food photography. Perfect for menus, advertising, and social media.",
      checkOutDesc: "Make your dishes look irresistible.",
      hourlyRate: 50,
      basePrice: 200,
      images: allImages.food || [],
    },
    {
      serviceName: "Birthday Party Shoot",
      description: "Celebrate your special day with professional photography that captures the joy and excitement of birthday parties.",
      checkOutDesc: "Capture precious birthday moments.",
      hourlyRate: 70,
      basePrice: 200,
      images: allImages.birthday || [],
    },
    {
      serviceName: "Travel Photography",
      description: "Professional travel photography to capture stunning landscapes, vibrant cultures, and unforgettable memories.",
      checkOutDesc: "Document your adventures in style.",
      hourlyRate: 95,
      basePrice: 400,
      images: allImages.travel || [],
    },
    {
      serviceName: "Sports Event Coverage",
      description: "Dynamic sports event coverage to capture the energy, passion, and triumphs of the game.",
      checkOutDesc: "Relive the excitement of every match.",
      hourlyRate: 100,
      basePrice: 500,
      images: allImages.sports || [],
    },
    {
      serviceName: "Documentary Filming",
      description: "Expert documentary filming services to tell compelling stories with authenticity and impact.",
      checkOutDesc: "Bring real stories to life on film.",
      hourlyRate: 150,
      basePrice: 800,
      images: allImages.documentary || [],
    },
    {
      serviceName: "Fashion Photography",
      description: "Showcase your designs and models with high-end fashion photography that highlights creativity and sophistication.",
      checkOutDesc: "Capture the essence of style and elegance.",
      hourlyRate: 110,
      basePrice: 500,
      images: allImages.fashion || [],
    }
  ];

  // Filter services based on the search query
  const filteredServices = serviceData.filter((service) =>
    service.serviceName.toLowerCase().includes((searchQuery || "").toLowerCase())
  );

  return (
    <Suspense fallback={<div>Loading services...</div>}>
      <div className="holder">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <ServiceElement1
              key={index}
              serviceName={service.serviceName}
              description={service.description}
              checkOutDesc={service.checkOutDesc}
              hourlyRate={service.hourlyRate}
              basePrice={service.basePrice}
              imageForCheckout={service.images[0]}
              img1={service.images[0]}
              img2={service.images[1]}
              img3={service.images[2]}
            />
          ))
        ) : (
          <div>No services found for "{searchQuery}"</div>
        )}
      </div>
    </Suspense>
  );
};

export default Services;
