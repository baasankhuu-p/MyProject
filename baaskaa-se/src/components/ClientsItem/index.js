import React from "react";
const ClientsItem = (props) => {
    return(
        <div class="item">
          <div class="testimonials-item">
            <div class="testimonials-header">
              <img
                src={props.image}
                alt={props.name}
                class="img-fluid top-man"
              />
            </div>
            <div class="testimonials-body">
              <h5>{props.name}</h5>
              <span>{props.status}</span>
              <p>{props.word}</p>
              <div class="testimonial-rating">
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
    )
}
export default ClientsItem;