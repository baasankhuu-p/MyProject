import React from "react";
const PortfoliaItem = (props) => {
    return(
        <div className={`col-md-6 col-lg-4 glry-item col-sm-12 ${props.filtertype}`}>
              <div className="portfolio-inner">
                <div className="portfolio-back">
                  <div className="portfolio-buttons">
                    <a
                      href={props.image}
                      className="portfolio-zoom-link"
                    >
                      <i className="fas fa-search"></i>
                    </a>
                    <a
                      href={props.url}
                    >
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <img
                  src={props.image}
                  alt="Portfolio Img"
                  className="img-fluid portfolio-img"
                />
              </div>
            </div>
    )
}
export default PortfoliaItem;