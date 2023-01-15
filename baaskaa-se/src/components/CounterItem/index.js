import React from "react";
const CounterItem = (props) => {
    return(
        <a
            href={props.url}
            className="col-md-6 col-lg-3 col-sm-6 col-xs-12"
            >
                <div className="counters-item">
                    <span className={props.icon}></span>
                    <div className="counters-body">
                    <span
                        >{props.type}
                        <h3 className="counter">{props.count}</h3>
                    </span>
                    <span>{props.name}</span>
                    </div>
                </div>
            </a>
    )
}
export default CounterItem;