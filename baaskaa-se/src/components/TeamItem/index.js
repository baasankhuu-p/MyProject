import React from "react";
import SocialLinks from "../SocialLinks";
const TeamItem = (props) => {
    return(
        <div className="item">
              <div className="team-card">
                <div className="team-card-header">
                  <img
                    src={props.image}
                    alt={props.name}
                    className="img-fluid shadow-md"
                  />
                </div>
                <div className="team-card-body">
                  <div className="team-text">
                    <h5>{props.name}</h5>
                    <span>{props.status}</span>
                  </div>
                  <div className="social-links text-center">
                    <SocialLinks
                        url={props.url_fc}
                        iconName="fab fa-facebook-f" />
                    <SocialLinks
                        url={props.url_tw}
                        iconName="fab fa-twitter" />
                    <SocialLinks
                        url={props.url_ins}
                        iconName="fab fa-instagram" />
                  </div>
                </div>
              </div>
            </div>
    )
}
export default TeamItem;