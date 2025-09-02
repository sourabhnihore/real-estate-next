export default function handler(req, res) {
  const listings = [
    { 
      id: '1', 
      title: '3BHK Luxury Apartment in Vijay Nagar', 
      price: '₹75 Lakhs', 
      image: '/images/hero1.png', 
      features: ['Near Metro','2 ACs','24x7 Security','Swimming Pool'] 
    },
    { 
      id: '2', 
      title: '2BHK Modern Apartment in Palasia', 
      price: '₹55 Lakhs', 
      image: '/images/hero2.png', 
      features: ['Near Schools','1 AC','24x7 Security','Gym'] 
    },
    { 
      id: '3', 
      title: '4BHK Spacious Villa in Rau', 
      price: '₹1.80 Crores', 
      image: '/images/hero3.png', 
      features: ['Private Garden','24x7 Security','Gated Community'] 
    },
    { 
      id: '4', 
      title: '2BHK Affordable Apartment in Indore East', 
      price: '₹45 Lakhs', 
      image: '/images/hero1.png', 
      features: ['Near Market','1 AC','24x7 Security','Parking'] 
    },
    { 
      id: '5', 
      title: '3BHK Penthouse in Vijay Nagar', 
      price: '₹1.20 Crores', 
      image: '/images/hero2.png', 
      features: ['Rooftop','2 ACs','Private Lift','Swimming Pool'] 
    },
    { 
      id: '6', 
      title: '1BHK Studio Apartment in Palasia', 
      price: '₹25 Lakhs', 
      image: '/images/hero3.png', 
      features: ['Near Metro','1 AC','24x7 Security'] 
    },
    { 
      id: '7', 
      title: '5BHK Villa with Garden in Rau', 
      price: '₹2.50 Crores', 
      image: '/images/hero1.png', 
      features: ['Private Garden','Swimming Pool','Gated Community','24x7 Security'] 
    },
    { 
      id: '8', 
      title: '3BHK Apartment in MR10 Road', 
      price: '₹85 Lakhs', 
      image: '/images/hero2.png', 
      features: ['Near Schools','2 ACs','Parking','Gym'] 
    },
    { 
      id: '9', 
      title: '2BHK Apartment in Chandan Nagar', 
      price: '₹50 Lakhs', 
      image: '/images/hero3.png', 
      features: ['Near Market','1 AC','24x7 Security','Park'] 
    },
    { 
      id: '10', 
      title: '4BHK Luxury Villa in Vijay Nagar', 
      price: '₹2 Crores', 
      image: '/images/hero1.png', 
      features: ['Private Garden','Swimming Pool','Gym','24x7 Security'] 
    }
  ];

  res.status(200).json(listings);
}
