// import React from 'react';
// import { useParams, Link } from 'react-router-dom';

// const services = {
//   '3d-modeling': {
//     title: '3D Modeling',
//     description: 'Our 3D modeling service provides comprehensive solutions for structural steel and architectural projects. We utilize cutting-edge software to create detailed, accurate models that help visualize your project before construction begins.',
//     features: [
//       'Detailed 3D structural models',
//       'Clash detection',
//       'Visualization renders',
//       'BIM integration'
//     ],
//     image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop'
//   },
//   'anchor-bolt-drawings': {
//     title: 'Anchor Bolt Drawings',
//     description: 'Precise anchor bolt drawings for foundation and structural connections. Our detailed plans ensure accurate installation and proper structural integrity.',
//     features: [
//       'Foundation layouts',
//       'Bolt specifications',
//       'Installation details',
//       'Connection designs'
//     ],
//     image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop'
//   },
//   // Add similar detailed information for other services
// };

// const ServiceDetail = () => {
//   const { serviceId } = useParams();
//   const service = serviceId ? services[serviceId as keyof typeof services] : null;

//   if (!service) {
//     return (
//       <div className="service-detail-error">
//         <h2>Service Not Found</h2>
//         <p>The requested service could not be found.</p>
//         <Link to="/services" className="back-link">Return to Services</Link>
//       </div>
//     );
//   }

//   return (
//     <div className="service-detail">
//       <Link to="/services" className="back-link">← Back to Services</Link>
      
//       <div className="service-detail-content">
//         <div className="service-detail-image">
//           <img src={service.image} alt={service.title} />
//         </div>
        
//         <div className="service-detail-info">
//           <h1>{service.title}</h1>
//           <p className="service-detail-description">{service.description}</p>
          
//           <div className="service-features">
//             <h2>Key Features</h2>
//             <ul>
//               {service.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//           </div>
          
//           <Link to="/contact" className="contact-button">
//             Request This Service
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceDetail;


import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = {
  '3d-modeling': {
    title: '3D Modeling',
    description: 'Our 3D modeling service provides comprehensive solutions for structural steel and architectural projects. We utilize cutting-edge software to create detailed, accurate models that help visualize your project before construction begins.',
    features: [
      'Detailed 3D structural models',
      'Clash detection',
      'Visualization renders',
      'BIM integration'
    ],
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop'
  },
  'anchor-bolt-drawings': {
    title: 'Anchor Bolt Drawings',
    description: 'Precise anchor bolt drawings for foundation and structural connections. Our detailed plans ensure accurate installation and proper structural integrity.',
    features: [
      'Foundation layouts',
      'Bolt specifications',
      'Installation details',
      'Connection designs'
    ],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop'
  },
  // Add similar detailed information for other services
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceId ? services[serviceId as keyof typeof services] : null;

  if (!service) {
    return (
      <motion.div 
        className="service-detail-error"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Service Not Found</h2>
        <p>The requested service could not be found.</p>
        <Link to="/services" className="back-link">Return to Services</Link>
      </motion.div>
    );
  }

  return (
    <motion.div 
      className="service-detail"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/services" className="back-link">← Back to Services</Link>
      </motion.div>
      
      <div className="service-detail-content">
        <motion.div 
          className="service-detail-image"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={service.image} alt={service.title} />
        </motion.div>
        
        <motion.div 
          className="service-detail-info"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {service.title}
          </motion.h1>
          <motion.p 
            className="service-detail-description"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {service.description}
          </motion.p>
          
          <motion.div 
            className="service-features"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2>Key Features</h2>
            <ul>
              {service.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link to="/contact" className="contact-button">
              Request This Service
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;