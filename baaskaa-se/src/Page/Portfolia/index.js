import React from "react";
import PortfoliaItem from "../../components/PortfoliaItem/PortfoliaItem";
import image1 from "../../image/project/WebSite/proj-1.png"
import image2 from "../../image/project/WebSite/proj-21.png"
import image3 from "../../image/project/Design/1.png"
import image4 from "../../image/project/Design/2.png"
import image5 from "../../image/project/Design/3.png"
import image6 from "../../image/project/Project/1.png"
import image7 from "../../image/project/Project/2.png"
import image8 from "../../image/project/Project/3.png"
import image9 from "../../image/project/Project/4.png"
const Portfolia = (props) => {
    return(
        <section
        className="section my-portfolio pb-minus-30"
        id="portfolio"
        data-scroll-index="3"
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7 col-sm-12">
              <h3 className="section-title">Бидний<span>Бүтээлүүд</span></h3>
              <hr className="section-line-border" />
              <p className="section-sub-line">
                Бид дизайны энгийн байдлыг чухалчилдаг Бидний бүтээлүүдтэй
                танилцаж үзнэ үү.
              </p>
            </div>
          </div>
          <div className="text-center">
            <div
              className="portfolio-filter d-flex align-items-center justify-content-center"
            >
              <a href="#0" data-gallery-filter="*" className="current">Бүгд</a>
              <a href="#0" data-gallery-filter=".web">E-Commerce & Вебсайт</a>
              <a href="#0" data-gallery-filter=".design">дизайн</a>
              <a href="#0" data-gallery-filter=".logo">Лого</a>
              <a href="#0" data-gallery-filter=".branding">Төсөл</a>
            </div>
          </div>
          <div className="gallery-masonary portfolio-grid row" id="masonaryGallery">
            
            <PortfoliaItem 
                filtertype="web"
                image={image1}
                url="https://davaadulam-1004.github.io/SPA_Mongolian_Tour/"
            />
            <PortfoliaItem 
                filtertype="web"
                image={image2}
                url="https://baasankhuu-p.github.io/Look-TV/"
            />
            
            <PortfoliaItem 
                filtertype="design"
                image={image3}
                url="javascript:void()"
            />
            <PortfoliaItem 
                filtertype="design"
                image={image4}
                url="javascript:void()"
            />
            <PortfoliaItem 
                filtertype="design"
                image={image5}
                url="javascript:void()"
            />
            <PortfoliaItem 
                filtertype="branding"
                image={image6}
                url="https://barilga.interactive.mn/mn"
            />
            <PortfoliaItem 
                filtertype="branding"
                image={image7}
                url="javascript:void()"
            />
            <PortfoliaItem 
                filtertype="branding"
                image={image8}
                url="javascript:void()"
            />
            <PortfoliaItem 
                filtertype="branding"
                image={image9}
                url="javascript:void()"
            />
          </div>
        </div>
      </section>
    )
}
export default Portfolia;