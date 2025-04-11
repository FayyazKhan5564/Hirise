// import { useEffect } from "react";
// import "./Contact.css";

// const ContactContent = () => {
//   useEffect(() => {
//     const initMap = () => {
//       const map = new google.maps.Map(
//         document.getElementById("contact-map") as HTMLElement,
//         {
//           center: { lat: 20.0059, lng: 73.7897 }, // Coordinates for Nashik
//           zoom: 14,
//         }
//       );

//       new google.maps.Marker({
//         position: { lat: 20.0059, lng: 73.7897 },
//         map: map,
//         title: "HIRISE STEEL STRUCTURE DETAILING",
//       });
//     };

//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap`;
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);
//     (window as any).initMap = initMap;

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const name = (form.elements.namedItem("name") as HTMLInputElement).value;
//     const email = (form.elements.namedItem("email") as HTMLInputElement).value;
//     const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
//     const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

//     const composedMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

//     const mailtoLink = `mailto:info@hirise.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composedMessage)}`;
//     window.location.href = mailtoLink;

//     const whatsappNumber = "7558245864";
//     const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(composedMessage)}`;
//     window.open(whatsappLink, "_blank");
//   };

//   return (
//     <div style={{ paddingTop: "2px", marginTop: "12px" }}>
//       <div className="contact-page">
//         <div className="contact-container">
//           <div className="contact-form-section">
//             <h1 className="contact-title">Contact Us</h1>
//             <form className="contact-form" onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   className="form-input"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-input"
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="subject"
//                   className="form-input"
//                   placeholder="Subject"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <textarea
//                   name="message"
//                   className="form-textarea"
//                   placeholder="Your Message"
//                   rows={6}
//                   required
//                 ></textarea>
//               </div>
//               <button type="submit" className="submit-button">
//                 Send Message
//               </button>
//             </form>
//           </div>

//           <div className="contact-map-section">
//             <div id="contact-map" className="map-container"></div>
//             <div className="contact-info">
//               <h2>Our Office</h2>
//               <address>
//                 HIRISE STEEL STRUCTURE DETAILING
//                 <br />
//                 ASHOKA MARG,
//                 <br />
//                 NASHIK, 422010
//                 <br />
//                 MAHARASHTRA
//               </address>
//               <div className="contact-details">
//                 <p>
//                   <strong>Email:</strong>
//                   <a href="mailto:info@hirise.com"> info@hirise.com</a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactContent;


import { useEffect } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const ContactContent = () => {
  // useEffect(() => {
  //   const initMap = () => {
  //     const map = new google.maps.Map(
  //       document.getElementById("contact-map") as HTMLElement,
  //       {
  //         center: { lat: 20.0059, lng: 73.7897 }, // Coordinates for Nashik
  //         zoom: 14,
  //       }
  //     );

  //     new google.maps.Marker({
  //       position: { lat: 20.0059, lng: 73.7897 },
  //       map: map,
  //       title: "HIRISE STEEL STRUCTURE DETAILING",
  //     });
  //   };

  //   const script = document.createElement("script");
  //   script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&callback=initMap`;
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   (window as any).initMap = initMap;

  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const composedMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;

    const mailtoLink = `mailto:info@hirise.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composedMessage)}`;
    window.location.href = mailtoLink;

    // const whatsappNumber = "7558245864";
    // const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(composedMessage)}`;
    // window.open(whatsappLink, "_blank");
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerFormItems = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const formItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div style={{ paddingTop: "2px", marginTop: "12px" }}>
      <div className="contact-page">
        <div className="contact-container">
          <motion.div 
            className="contact-form-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <motion.h1 
              className="contact-title"
              variants={formItemVariant}
            >
              Contact Us
            </motion.h1>
            <motion.form 
              className="contact-form" 
              onSubmit={handleSubmit}
              variants={staggerFormItems}
            >
              <motion.div className="form-group" variants={formItemVariant}>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                  required
                />
              </motion.div>
              <motion.div className="form-group" variants={formItemVariant}>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Your Email"
                  required
                />
              </motion.div>
              <motion.div className="form-group" variants={formItemVariant}>
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="Subject"
                  required
                />
              </motion.div>
              <motion.div className="form-group" variants={formItemVariant}>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Your Message"
                  rows={6}
                  required
                ></textarea>
              </motion.div>
              <motion.button 
                type="submit" 
                className="submit-button"
                variants={formItemVariant}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </motion.div>

          <motion.div 
            className="contact-map-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            {/* <div id="contact-map" className="map-container"></div> */}
            <div id="contact-map"></div>

            <motion.div 
              className="contact-info"
              variants={staggerFormItems}
            >
              <motion.h2 variants={formItemVariant}>Our Office</motion.h2>
              <motion.address variants={formItemVariant}>
                HIRISE STEEL STRUCTURE DETAILING
                <br />
                ASHOKA MARG,
                <br />
                NASHIK, 422010
                <br />
                MAHARASHTRA
              </motion.address>
              <motion.div 
                className="contact-details"
                variants={formItemVariant}
              >
                <p>
                  <strong>Email:</strong>
                  <a href="mailto:info@hirise.com"> info@hirise.com</a>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;