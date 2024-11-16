import React from "react";
import './card.css'
function CourseCard ({ className,category, title, description, rating,price,imageUrl}){
    return(
        <div className={`course-card ${className}`}>
            <img src={imageUrl} alt={title} className="course-image"></img>
            <div className="course-content">
                <p className="course-category">{category}</p>
                <h2 className="course-title">{title}</h2>
                <p className="course-description">{description}</p>
                <div className="course-footer">
                    <span className="course-rating">⭐{rating}</span>
                    <button className="enroll-button">Enroll Now</button>
                    <span className="course-price">${price}</span>
                </div>

            </div>
        </div>
    )
}
export default CourseCard;