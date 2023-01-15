import React from "react";
import Logo from "../../image/circle-white-bg.webp"
import Nav from "../Nav";
import SocialLinks from "../SocialLinks";
const Footer = (props) => {
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                    <div className="col-md-6 col-sm-6 col-lg-3">
                        <div className="footer-widget">
                            <div className="footer-logo-wrap">
                                <a href="javascript:void()">
                                <img src={Logo}
                                    style = {{height:50}}
                                    alt="Footer Logo" 
                                />
                                </a>
                            </div>
                            <p className="footer-about-text">Сайт ....</p>
                            <div className="footer-social-links">
                                <SocialLinks 
                                    url = "https://www.linkedin.com/in/baasankhuu-purev-332057235/"
                                    iconName = "fab fa-linkedin" />
                                <SocialLinks 
                                    url = "https://github.com/baasankhuu-p"
                                    iconName = "fab fa-github" />
                                <SocialLinks 
                                    url = "javascript:void()"
                                    iconName = "fab fa-twitter" />
                                <SocialLinks 
                                    url = "https://www.instagram.com/se.baaskaa/"
                                    iconName = "fab fa-instagram" />
                                <SocialLinks 
                                    url = "https://www.youtube.com/channel/UCZUF24rYBtjwXCFPtZY8vFw"
                                    iconName = "fab fa-youtube" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3">
                        <div className="footer-widget">
                            <h6 className="footer-title">Хуудсууд</h6>
                            <ul className="footer-links">
                                <Nav 
                                    nav="1"
                                    url="javascript:void()"
                                    name = "Бидний тухай"
                                />
                                <Nav 
                                    nav="2"
                                    url="javascript:void()"
                                    name = "Үйлчилгээ"
                                />
                                <Nav 
                                    nav="3"
                                    url="javascript:void()"
                                    name = "Бүтээлүүд"
                                />
                                <Nav 
                                    nav="4"
                                    url="javascript:void()"
                                    name = "Блог"
                                />
                                <Nav 
                                    nav="5"
                                    url="javascript:void()"
                                    name = "Холбоо барих"
                                />
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-lg-3">
                        <div className="footer-widget">
                        <h6 className="footer-title">Тусламж</h6>
                        <ul className="footer-links">
                            <Nav 
                                linkclass="popup-youtube my-video-btn"
                                url="javascript:void()"
                                name = "Заавар"
                            />
                            
                            <Nav 
                                url="/404.html"
                                name = "404"
                            />
                            <Nav 
                                url="javascript:void()"
                                name = "Үйлчилгээний нөхцөл"
                            />
                        </ul>
                        </div>
                    </div>
                        <div className="col-md-6 col-sm-6 col-lg-3">
                            <div className="footer-widget sm-margin-0">
                            <h6 className="footer-title">Холбогдох</h6>
                            <ul className="footer-contact-info">
                                <li><i className="fa fa-map"></i>Монгол улс Улаанбаатар</li>
                                <li><i className="fa fa-phone"></i>+976 - 99455432</li>
                                <li>
                                <i className="fa fa-envelope"></i>purevbaasankhuu@gmail.com
                                </li>
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap">
                <div className="container">
                    <p className="copyright-text text-center">©2022 Developed Baaskaa-SE</p>
                </div>
        </div>
      </footer>
    )
}
export default Footer