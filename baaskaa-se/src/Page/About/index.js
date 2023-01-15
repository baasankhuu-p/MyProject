import React from "react"
import Profile from "../../image/pro/image1.webp"
import SocialLinks from "../../components/SocialLinks"
import Css from './style.module.css';
const About = (props) => {
    return(
        <section className="hero-banner" data-scroll-index="1">
            <div className="container h-100">
                <div className="row align-items-center">
                    <div className="col-lg-7 col-md-12 col-sm-12">
                        <div className="hero-inner">
                            <div className="hero-social">
                                <SocialLinks 
                                    url = "https://www.linkedin.com/in/baasankhuu-purev-332057235/" 
                                    iconName="fab fa-linkedin"
                                />
                                <SocialLinks 
                                    url = "javascript:void()" 
                                    iconName="fab fa-twitter"
                                />
                                <SocialLinks 
                                    url = "https://github.com/baasankhuu-p" 
                                    iconName="fab fa-github"
                                />
                                <SocialLinks 
                                    url = "https://www.instagram.com/se.baaskaa/" 
                                    iconName="fab fa-instagram"
                                />
                                <SocialLinks 
                                    url = "https://www.youtube.com/channel/UCZUF24rYBtjwXCFPtZY8vFw" 
                                    iconName="fab fa-youtube"
                                />
                            </div>
                            <h1>I'm <span id="typed-text">Developer</span></h1>
                            <p>
                            <strong>Hi</strong>, Энэ өдрийн мэнд хүргэе. Намайг Баасанхүү
                            гэдэг. Миний хобби бол код бичих, асуудал шийдвэрлэх, сагсан
                            бөмбөг, волейбол тоглох, гитар тоглох. Өөрийгөө хөгжүүлэх, аз
                            жаргалтай мөн завгүй байлгахыг илүүд үздэг. Одоогоор МУИС-ийн
                            МКУТ "Программ хангамж"-ийн 4-р курсын оюутан бөгөөд
                            бакалаврын ангид суралцаж байна.
                            </p>
                        </div>
                    </div>
                    <div
                        className={ `col-lg-5 banner-profile-img` } 
                        data-tilt
                        data-tilt-max="10"
                        data-tilt-speed="400"
                        data-tilt-perspective="1000"
                    >
                    <img
                        src={Profile}
                        alt="Hero Image"
                        width="520"
                        height="580"
                        className={`img-fluid hero-img`}
                    />
                    </div>
                </div>
            </div>
            <div className="button-group-center wow zoomIn" data-wow-delay="0.4s">
                <a href="#" className="scroll-down-btn" data-scroll-nav="2">
                    <i className="fas fa-angle-double-down"></i>
                </a>
                <a
                    href="https://www.youtube.com/watch?v=WbXKOQJNerE"
                    className="popup-youtube my-video-btn"
                >
                    <span className="fa fa-play"></span>
                </a>
            </div>
        </section>
    )
}
export default About