// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Navigation, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import image3 from '../assets/images/structure_03.jpg';
// import { Building2, PenTool, FileSpreadsheet, Ruler } from 'lucide-react';

// const services = [
//   {
//     icon: <Building2 size={40} />,
//     title: '3D Modeling',
//     description: 'Advanced 3D modeling services using state-of-the-art software for precise structural visualization.'
//   },
//   {
//     icon: <PenTool size={40} />,
//     title: '2D Shop Drawings',
//     description: 'Detailed shop drawings with comprehensive specifications for accurate fabrication.'
//   },
//   {
//     icon: <FileSpreadsheet size={40} />,
//     title: 'Material Summary',
//     description: 'Precise material summaries and bills of materials for efficient project planning.'
//   },
//   {
//     icon: <Ruler size={40} />,
//     title: 'Anchor Bolt Drawings',
//     description: 'Detailed anchor bolt plans and templates for precise foundation work.'
//   }
// ];

// const team = [
//   {
//     name: 'ABC',
//     position: 'Lead Structural Engineer',
//     image: ''
//   },
//   {
//     name: 'DEF',
//     position: 'Senior Steel Detailer',
//     image: ''
//   },
//   {
//     name: 'GHI',
//     position: 'Project Manager',
//     image: ''
//   },
//   {
//     name: 'XYZ',
//     position: 'Quality Manager',
//     image: ''
//   }
// ];

// const HeroSection = () => {
//   return (
//     <div style={{ padding: '2rem', width: '100%', marginTop: '100px' }}>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={1}
//         autoplay={{
//           delay: 2000,
//           disableOnInteraction: false,
//         }}
//         navigation
//         // pagination={{ clickable: true }}
//         className="hero-swiper"
//       >
//         <SwiperSlide>
//           <img src={image3} alt="Image 1" style={{ width: '100%', borderRadius: '10px' }} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image3} alt="Image 2" style={{ width: '100%', borderRadius: '10px' }} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image3} alt="Image 3" style={{ width: '100%', borderRadius: '10px' }} />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img src={image3} alt="Image 4" style={{ width: '100%', borderRadius: '10px' }} />
//         </SwiperSlide>
//       </Swiper>

//       <div className='text-container'>
//         <p>
//           <strong>HIRISE STEEL STRUCTURE DETAILING</strong> is a steel detailing provider consisting of steel detailers, modelers, checkers, quality managers, and project managers, aimed to create a better detailing experience for our partners. To meet the needs of our clients, we focus on providing quality shop drawing packages on time. In addition, we strictly adhere to our client's standards and the AISC code of standard practice to ensure a smooth project.
//           <br /><br />
//           We specialize in structural (beams, columns, braces) and miscellaneous (stairs, railings) steel structures in various industries. We use SDS2 and Tekla software and can provide model files, BIM coordination capabilities, and electronic files (CNC, KSS) for your shop's needs.
//           <br /><br />
//           We are fully remote and available with team members in every US timezone, so we can be responsive and ready to field your questions/concerns. Our team is loaded with shop, field and design experience, so we understand your issues.
//           <br /><br />
//           We want to create a better detailing experience for our clients by delivering high-quality shop drawings on time!
//         </p>
//       </div>

//       <div className="services-section">
//         <h2 className="section-title">Our Services</h2>
//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div key={index} className="service-card">
//               <div className="service-icon">{service.icon}</div>
//               <h3 className="service-title">{service.title}</h3>
//               <p className="service-description">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="team-section">
//         <h2 className="section-title">Our Team</h2>
//         <div className="team-grid">
//           {team.map((member, index) => (
//             <div key={index} className="team-member">
//               <div className="member-image">
//                 <img src={member.image} alt={member.name} />
//               </div>
//               <h3 className="member-name">{member.name}</h3>
//               <p className="member-position">{member.position}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image3 from '../assets/images/structure_03.jpg';
import { Building2, PenTool, FileSpreadsheet, Ruler } from 'lucide-react';

const services = [
  {
    icon: <Building2 size={40} />,
    title: '3D Modeling',
    description: 'Advanced 3D modeling services using state-of-the-art software for precise structural visualization.'
  },
  {
    icon: <PenTool size={40} />,
    title: '2D Shop Drawings',
    description: 'Detailed shop drawings with comprehensive specifications for accurate fabrication.'
  },
  {
    icon: <FileSpreadsheet size={40} />,
    title: 'Material Summary',
    description: 'Precise material summaries and bills of materials for efficient project planning.'
  },
  {
    icon: <Ruler size={40} />,
    title: 'Anchor Bolt Drawings',
    description: 'Detailed anchor bolt plans and templates for precise foundation work.'
  }
];

const team = [
  {
    name: 'ABC',
    position: 'Lead Structural Engineer',
    image: ''
  },
  {
    name: 'DEF',
    position: 'Senior Steel Detailer',
    image: ''
  },
  {
    name: 'GHI',
    position: 'Project Manager',
    image: ''
  },
  {
    name: 'XYZ',
    position: 'Quality Manager',
    image: ''
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const HeroSection = () => {
  return (
    <div style={{ padding: '2rem', width: '100%', marginTop: '100px' }}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation
          className="hero-swiper"
        >
          <SwiperSlide>
            <img src={image3} alt="Image 1" style={{ width: '100%', borderRadius: '10px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Image 2" style={{ width: '100%', borderRadius: '10px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Image 3" style={{ width: '100%', borderRadius: '10px' }} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={image3} alt="Image 4" style={{ width: '100%', borderRadius: '10px' }} />
          </SwiperSlide>
        </Swiper>
      </motion.div>

      <motion.div
        className='text-container'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ duration: 0.6 }}
      >
        <p>
          <strong>HIRISE STEEL STRUCTURE DETAILING</strong> is a steel detailing provider consisting of steel detailers, modelers, checkers, quality managers, and project managers, aimed to create a better detailing experience for our partners. To meet the needs of our clients, we focus on providing quality shop drawing packages on time. In addition, we strictly adhere to our client's standards and the AISC code of standard practice to ensure a smooth project.
          <br /><br />
          We specialize in structural (beams, columns, braces) and miscellaneous (stairs, railings) steel structures in various industries. We use SDS2 and Tekla software and can provide model files, BIM coordination capabilities, and electronic files (CNC, KSS) for your shop's needs.
          <br /><br />
          We are fully remote and available with team members in every US timezone, so we can be responsive and ready to field your questions/concerns. Our team is loaded with shop, field and design experience, so we understand your issues.
          <br /><br />
          We want to create a better detailing experience for our clients by delivering high-quality shop drawings on time!
        </p>
      </motion.div>

      <motion.div
        className="services-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="section-title"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="team-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2
          className="section-title"
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          Our Team
        </motion.h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="team-member"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="member-image">
                <img src={member.image || `https://ui-avatars.com/api/?name=${member.name}&background=2563eb&color=fff`} alt={member.name} />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <p className="member-position">{member.position}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;