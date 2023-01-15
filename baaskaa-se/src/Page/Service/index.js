import React from "react";
import ServiceItem from "../../components/ServiceItem";
const Service = () => {
    return(
        <section
            className="section my-services pb-minus-30"
            id="services"
            data-scroll-index="2"
        >
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-7 col-sm-12">
                        <h3 className="section-title">Бидний<span>Үйлчилгээ</span></h3>
                        <hr className="section-line-border" />
                        <p className="section-sub-line">
                            Мөн та хүссэн үйлчилгээгээ авах боломжтой.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <ServiceItem 
                        iconName = "flaticon-018-online-shop"
                        title = "E-Commerce & Вебсайт"
                        description = "Бид танд орчин цагын шинэ загвар бүхий вебсайтыг бүтээж өгөх болно."
                    />
                    <ServiceItem 
                        iconName = "flaticon-028-design"
                        title = "Веб Дизайн"
                        description = "Таны бүтээгдэхүүнээс хамааран бид танд хүссэн загварыг тань богино хугацаанд хийж өгөх болно"
                    />
                    <ServiceItem 
                        iconName = "flaticon-011-strategy"
                        title = "Лого Дизайн"
                        description = "Тайлбар..."
                    />
                    <ServiceItem 
                        iconName = "flaticon-024-idea"
                        title = "Апп UI дизайн"
                        description = "Тайлбар..."
                    />
                    <ServiceItem 
                        iconName = "flaticon-021-marketing"
                        title = "Десктоп апп"
                        description = "Тайлбар..."
                    />
                </div>
            </div>
         </section>
    )
}
export default Service