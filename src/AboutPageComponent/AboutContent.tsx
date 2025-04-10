import { motion } from "framer-motion";
import "./About.css";
import aboutImage1 from "../assets/images/structure_03.jpg";
import aboutImage2 from "../assets/images/structure_03.jpg";
import aboutImage3 from "../assets/images/structure_03.jpg";
import aboutImage4 from "../assets/images/structure_03.jpg";
import aboutImage5 from "../assets/images/structure_03.jpg";

const AboutContent = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div className="about-page">
      <motion.div 
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-content" variants={fadeInLeft}>
          <h3>About HIRISE</h3>
          <div className="about-text">
            <p>
              HIRISE Engineers Private Limited, founded in 2011, is a progressive firm offering comprehensive architectural,
              engineering, BIM, construction support, and building-oriented services.
            </p>
            <p>
              We are a young and aggressive firm continuously evolving and reshaping ourselves through our innovative & distinct
              approach as we always strive to stay ahead of the rapidly changing markets, advancing technologies, and expanding
              client needs. We have the cutting-edge technology required for modern-day needs with all required infrastructure in
              a spacious place.
            </p>
            <p>
              Our services comprise 2D Drawings and 3D modeling covering comprehensive BIM Services, Drafting Services, and
              Construction drawings spanning across Architectural, Structural, and MEP Domains.
            </p>
          </div>
        </motion.div>
        <motion.div className="about-image" variants={fadeInRight}>
          <img src={aboutImage1} alt="About HIRISE" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="about-section reverse"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-image" variants={fadeInRight}>
          <img src={aboutImage2} alt="Our Team" />
        </motion.div>
        <motion.div className="about-content" variants={fadeInLeft}>
          <h3>Our Team</h3>
          <div className="about-text">
            <p>
              The performance of our firm is a function of our people. Our people are empowered to develop and implement
              innovative approaches in helping clients meet their functional and aesthetic requirements.
            </p>
            <p>
              With the latest tools of technology applied to deep knowledge and experience, our architects, engineers, and
              professionals are employing realistic solutions best matched to the project needs.
            </p>
            <p>
              You will discover you are at the center of a passionate team that builds strong relationships based on trust and a
              common goal. You will enjoy the process as much as the finished product.
            </p>
            <p>
              It's people, not concrete, who form the foundation for everything we do.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-content" variants={fadeInLeft}>
          <h3>Vision</h3>
          <div className="about-text">
            <p>
              To be recognized as the best choice for Architectural & Engineering Services and to develop a long-term relationship
              with each client based on performance, reliability, honesty, fairness, and integrity.
            </p>
          </div>
        </motion.div>
        <motion.div className="about-image" variants={fadeInRight}>
          <img src={aboutImage3} alt="Our Vision" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="about-section reverse"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-image" variants={fadeInRight}>
          <img src={aboutImage4} alt="Our Mission" />
        </motion.div>
        <motion.div className="about-content" variants={fadeInLeft}>
          <h3>Mission</h3>
          <div className="about-text">
            <p>
              To provide the highest level of services, quality, and expertise that creates value for our community, clients & our
              people and to develop a long-term relationship with each client based on performance, reliability, honesty, fairness,
              and integrity.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="about-content" variants={fadeInLeft}>
          <h3>Core Values</h3>
          <div className="about-text">
            <p><strong>Quality:</strong> Our work is our reputation. Quality is the key component of everything we do.</p>
            <p><strong>Unity:</strong> Our strength is our unity. We strongly believe in our team who works collaboratively towards a common goal.</p>
            <p><strong>Being Innovative:</strong> We will always help our clients with innovative, creative & cost-effective solutions.</p>
            <p><strong>Accountability:</strong> We will embrace ownership of all our responsibilities & accept the truth that we are accountable for all our actions.</p>
            <p><strong>Trust:</strong> We will be people and a company that is trusted in the marketplace. At HIRISE, principles are held higher than profit & business goals.</p>
            <p><strong>Integrity:</strong> We will always be ethical, honest, and lawful to our clients, people & our community.</p>
            <p><strong>Client Centric:</strong> Our clients are the driving force of our organization. We are dedicated to meeting & exceeding our customers' needs & honoring the commitment made to them.</p>
          </div>
        </motion.div>
        <motion.div className="about-image" variants={fadeInRight}>
          <img src={aboutImage5} alt="Core Values" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutContent;