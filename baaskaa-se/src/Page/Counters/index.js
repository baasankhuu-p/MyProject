import React from "react";
import CounterItem from "../../components/CounterItem";
const Counters = (props) => {
    return(
        <section className="pb-minus-30 section" id="counters">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-7 col-sm-12">
                        <h3 className="section-title">Бидний ур<span>Чадвар</span></h3>
                        <hr className="section-line-border" />
                        <p className="section-sub-line">Some of the skills I've gained.</p>
                    </div>
                </div>
                <div className="row">
                    <CounterItem 
                        url="https://www.w3profile.com/baaskaa_software_engineer"
                        icon = "flaticon-005-trophy"
                        count="866"
                        type="Оноо"
                        name="W3Schools.com"
                    />
                    <CounterItem 
                        url="https://www.w3profile.com/baaskaa_software_engineer"
                        icon = "flaticon-005-trophy"
                        count="866"
                        type="Оноо"
                        name="W3Schools.com"
                    />
                    <CounterItem 
                        url="https://www.w3profile.com/baaskaa_software_engineer"
                        icon = "flaticon-005-trophy"
                        count="866"
                        type="Оноо"
                        name="W3Schools.com"
                    />
                    <CounterItem 
                        url="https://www.w3profile.com/baaskaa_software_engineer"
                        icon = "flaticon-005-trophy"
                        count="866"
                        type="Оноо"
                        name="W3Schools.com"
                    />
                </div>
            </div>
        </section>
    )
}
export default Counters;