import React from "react";
import BlogItem from "../../components/BlogItem";
import image from "../../image/feedback/image.webp"
const Blog = (props) => {
    return (
        <section className="latest-blog section" id="latest-blog" data-scroll-index="4">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-7 col-sm-12">
            <h3 className="section-title">Хэлэлцүүлэг &<span>Блог</span></h3>
            <hr className="section-line-border" />
            <p className="section-sub-line">Дараах санал асуулгын хариултууд</p>
          </div>
        </div>
        <div className="blog-slider owl-carousel owl-theme">
            <BlogItem 
                url="/blog-delgerengui"
                image={image}
                title="Сэдвийн гарчиг."
                name="Овог Нэр"
                description="desc desc desc desc desc desc desc desc desc desc desc desc
                ..."
            />
            <BlogItem 
                url="/blog-delgerengui"
                image={image}
                title="Сэдвийн гарчиг."
                name="Овог Нэр"
                description="desc desc desc desc desc desc desc desc desc desc desc desc
                ..."
            />
            <BlogItem 
                url="/blog-delgerengui"
                image={image}
                title="Сэдвийн гарчиг."
                name="Овог Нэр"
                description="desc desc desc desc desc desc desc desc desc desc desc desc
                ..."
            />
        </div>
      </div>
    </section>
    )
}
export default Blog