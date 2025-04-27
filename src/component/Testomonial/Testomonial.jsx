import React from 'react';
import './Testimonial.css';
import TestimonialCard from '../TestmonialCard/TestmonialCard';

export default function TestimonialCarousel() {
  const testimonialsData = [
    {
      companyImg:"assets/HDFC_Bank.png",
      text: "At HDFC Bank, we needed a way to deliver consistent, high-quality training across a geographically dispersed workforce. The Wise Blend's custom eLearning solutions exceeded our expectations. Their engaging and interactive courses helped us significantly improve employee knowledge retention and boost overall training efficiency.",
      avatarSrc: "assets/aloka.webp",
      name: "Aloka Tawde",
      title: "Vice President",
      company: "L&D at HDFC Bank",
    },
    {
      companyImg:"assets/panasonic-logo.svg",
      text: "Compliance training can be dry and tedious. The Wise Blend helped us transform that experience for our employees at Panasonic. Their creative approach resulted in dynamic eLearning modules that kept our team engaged and ensured they mastered the critical legal and compliance topics.",
      avatarSrc: "assets/anupam.webp",
      name: "Anupam Lohia",
      title: "Senior Manager",
      company: "Legal & Compliance"
    },
    {
      companyImg:"assets/o9-solutions-logo.svg",
      text: "The Wise Blend became a valuable partner for o9 Solutions. Their expertise in custom eLearning development helped us create targeted training programs that perfectly aligned with our specific skills gaps. We've seen a marked improvement in employee performance and a more confident workforce, thanks to The Wise Blend's solutions.",
      avatarSrc: "assets/rakesh.webp",
      name: "Rakesh Kishore",
      title: "Sr. Manager",
       company: "Education Services"
    },
    // Add more testimonials here...
    {
      companyImg: "assets/HDFC_Bank.png",
      text: "At Finolex, we’ve always prioritized partnerships that align with our values of innovation, efficiency, and excellence. The Wise Blend has consistently delivered on all fronts. Their team brings a rare combination of creativity and precision, helping us execute with clarity and confidence. Every engagement has been thoughtfully executed, making them one of the most dependable and forward-thinking partners we’ve worked with.",
      avatarSrc: "assets/aloka.webp",
      name: "Sarita Tripathi",
      title: "CHRO, President Human Resource",
      company: "Finolex"
    },
    {
      companyImg: "assets/HDFC_Bank.png",
      text: "The Wise Blend has been instrumental in helping us bring our vision to life. Their attention to detail, collaborative spirit, and commitment to innovation has impressed us time and again. Whether it’s creating impactful experiences or turning abstract ideas into actionable outcomes, they’ve delivered with excellence. We consider them an extension of our own team—dependable, creative, and always a step ahead.",
      avatarSrc: "assets/aloka.webp",
      name: "Anil Namugade",
      title: "Founder, Chief Executive Officer",
      company: "Trigon Digipack"
    },
    {
      companyImg: "assets/HDFC_Bank.png",
      text: "Our collaboration with The Wise Blend has been marked by deep understanding and meaningful outcomes. They don’t just deliver solutions—they listen, adapt, and elevate every conversation with thoughtful insights. Their ability to quickly grasp our needs and translate them into impactful outcomes has made them a go-to partner. We’ve seen genuine value in every interaction, and they continue to exceed expectations.",
      avatarSrc: "assets/aloka.webp",
      name: "Apoorva Verma",
      title: "Head of Learning, L&D Specialist",
      company: "Oxane Partners"
    },
    {
      companyImg: "assets/HDFC_Bank.png",
      text: "The Wise Blend has been a delight to work with. Their professionalism, creativity, and strategic approach stood out from day one. We appreciated how seamlessly they integrated with our internal teams, turning ideas into impactful outcomes without missing a beat. Their commitment to quality and collaborative spirit made every phase of the journey enjoyable. It’s rare to find partners who are this aligned and proactive.",
      avatarSrc: "assets/aloka.webp",
      name: "Neha Bhopatkar",
      title: "Director, People Team",
      company: "InfoBeans"
    }
  ];

  return (
    <div className="testimonial-container">
      <div className="our-partner-3">
        <div className="our-partner-content-3">
          <div className="top-3">
            <div>Here's what our clients have to say</div>
            <div>Real Stories, Real Transformations</div>
          </div>
        </div>
      </div>
      <div className="testimonial-slider">
        {testimonialsData.map((testimonial) => (
          <TestimonialCard key={testimonial.name} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
}
