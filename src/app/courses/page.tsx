import './couse.css';
import React from 'react';
import CourseCard from '../card.jsx';

export default function Courses(){
return(
    <div>
<h1 className="course-head">Courses</h1>
<p className="course-para">Your Ultimate Guide to learning</p>

<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {/* First row of cards */}
  <div className="first-set">
    <CourseCard
      className="1st card"
      category="Design"
      title="UX/UI Design 201"
      description="Learn the fundamentals of UX/UI design."
      rating="5.0"
      price="400"
        imageUrl="https://via.placeholder.com/300x180"
    />
    <CourseCard
      className=""
      category="Programming"
      title="Introduction to Python"
      description="Master the basics of Python programming."
      rating="5.0"
      price="400"
      imageUrl="https://via.placeholder.com/300x180"
    />
    <CourseCard
      className=""
      category="Business"
      title="Data Analysis "
      description="Get started with data analysis and visualization."
      rating="5.0"
      price="400"
      imageUrl="https://via.placeholder.com/300x180"
    />
  </div>

  {/* Second row of cards */}
  <div className="second-set">
    <CourseCard
      className=""
      category="Art"
      title="Art Specialization"
      description="Learn all about the details of Art"
      rating="4.0"
      price="250"
      imageUrl="https://via.placeholder.com/300x180"
    />
    <CourseCard
      className=""
      category="Law"
      title="Rule of Law"
      description="Great help with your law degree"
      rating="5.0"
      price="400"
      imageUrl="https://via.placeholder.com/300x180"
    />
    <CourseCard
      className=""
      category="Tech"
      title="Introduction to Webflow"
      description="Get in the tech industry"
      rating="5.0"
      price="400"
      imageUrl="https://via.placeholder.com/300x180"
    />
     </div>
  </div>
</div>
)}