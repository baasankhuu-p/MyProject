import React from "react";
const ServiceItem = (props) => {
    return(
        <div className="col-md-6 col-lg-4 service-item">
            <div className="services-box">
                <div className="services-box-icon">
                    <span className={props.iconName}></span>
                </div>
                <div className="services-box-body">
                    <h5>{props.title}</h5>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ServiceItem;