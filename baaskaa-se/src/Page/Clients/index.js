import React from "react";
import image from "../../image/TopMan/120x120.webp"
import ClientsItem from "../../components/ClientsItem";
const Clients = (props) => {
    return(
        <section class="section testimonials" id="clients">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-lg-7 col-sm-12">
              <h3 class="section-title">Топ<span>ишлэл</span></h3>
              <hr class="section-line-border" />
              <p class="section-sub-line">....</p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="testimonials-carousel owl-carousel owl-theme">
                <ClientsItem 
                    image={image}
                    name="Овог Нэр"
                    status="Ноён"
                    word="Хэлсэн үгc..." />
                <ClientsItem 
                    image={image}
                    name="Овог Нэр"
                    status="Ноён"
                    word="Хэлсэн үгc..." />
                <ClientsItem 
                    image={image}
                    name="Овог Нэр"
                    status="Ноён"
                    word="Хэлсэн үгc..." />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default Clients