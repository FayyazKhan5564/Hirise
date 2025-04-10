import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: '3d-modeling',
    title: '3D Modeling',
    description: 'Professional 3D modeling services for structural steel and architectural projects using advanced software.',
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=800&auto=format&fit=crop'
  },
  {
    id: 'anchor-bolt-drawings',
    title: 'Anchor Bolt Drawings',
    description: 'Detailed anchor bolt drawings and layouts for precise foundation and structural connections.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=800&auto=format&fit=crop'
  },
  {
    id: 'advance-bill-of-material',
    title: 'Advance Bill of Material',
    description: 'Comprehensive material lists and specifications for construction projects.',
    image: 'https://images.unsplash.com/photo-1585244759837-5bb0374fd764?w=800&auto=format&fit=crop'
  },
  {
    id: '2d-erection-drawings',
    title: '2D Erection Drawings',
    description: 'Precise erection drawings for efficient construction and assembly processes.',
    image: 'https://images.unsplash.com/photo-1581092334247-ddef2a41a4f7?w=800&auto=format&fit=crop'
  },
  {
    id: '2d-shop-drawings',
    title: '2D Shop Drawings',
    description: 'Detailed shop drawings for fabrication and manufacturing purposes.',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop'
  },
  {
    id: 'fabtrol',
    title: 'Fabtrol',
    description: 'Advanced Fabtrol integration for streamlined project management and material tracking.',
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=800&auto=format&fit=crop'
  },
  {
    id: 'cnc-files',
    title: 'CNC, DXF, DSTV, KISS Files',
    description: 'Generation of various file formats for CNC machines and manufacturing processes.',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop'
  },
  {
    id: 'material-summary',
    title: 'Material Summary',
    description: 'Detailed material summaries and reports for project planning and cost estimation.',
    image: 'https://images.unsplash.com/photo-1581092160607-f6aa4589c602?w=800&auto=format&fit=crop'
  },
  {
    id: 'field-bolt-summary',
    title: 'Field Bolt Summary',
    description: 'Comprehensive bolt lists and specifications for field assembly and installation.',
    image: 'https://images.unsplash.com/photo-1581092001029-0e0b1b8f7fd7?w=800&auto=format&fit=crop'
  }
];

const ServicesContent = () => {
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p className="services-intro">Discover our comprehensive range of engineering services designed to meet your project needs.</p>
      
      <div className="services-grid">
        {services.map((service) => (
          <Link to={`/services/${service.id}`} key={service.id} className="service-card">
            <div className="service-image-container">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesContent;