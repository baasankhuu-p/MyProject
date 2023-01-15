import React from "react";
import "./style.css"
const PriceItem = (props) => {
    return(
        <div className="col-md-4">
            <div
                className={`price-table text-center ${props.className}`}
            >
                <div className="price-top-inner">
                    <h5 className={`${props.TxtColor}`}>{props.type}</h5>
                    <span className={`${props.iconName} price-icon`}></span>
                </div>
                <div className="price-text">
                    <span className={`${props.TxtColor}`}>{props.price}</span>
                </div>
                <ul className="price-value-list">
                    <li>..........</li>
                    <li>..........</li>
                    <li>..........</li>
                    <li>..........</li>
                </ul>
                <a href="javascript:void()" className="default-orange-btn"
                >Үйлчилгээ авах
                </a>
            </div>
        </div>
    )
}
export default PriceItem;