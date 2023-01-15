import React from "react";
const EduItem = (props) => {
    return (
    <div className="col-md-6">
        <div className="experience-item">
            <div className="experience-item-header">
                <div className="resume-univ-icon">
                    <span className={props.iconName}></span>
                </div>
                <div className="resume-univ-text">
                    <h6><i className="far fa-calendar-alt"></i>{props.date}</h6>
                    <h5>{props.education}</h5>
                </div>
            </div>
            <div className="experience-item-body">
                <p>
                    {props.paragraph}
                </p>
            </div>
        </div>
    </div>
    )
}
export default EduItem;