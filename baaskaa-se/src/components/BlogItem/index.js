import React from "react";
import Blog from "../../Page/Blog";
const BlogItem = (props) => {
    return(
        <div className="item blog-item">
            <div className="blog-top">
              <a href={props.url} className="blog-img-link">
                <img src={props.image} alt={props.title} className="img-fluid" />
              </a>
            </div>
            <div className="blog-body">
              <h5 className="blog-title">
                <a href={props.image}>{props.title}</a>
              </h5>
              <a href={props.url} className="blog-author mr-3"><i className="far fa-user mr-2"></i>{props.name}</a>
              <a href={props.url} className="blog-date"><i className="far fa-clock mr-2"></i>{props.date}</a>
              <p className="blog-text">
                {props.description}
              </p>
              <a href={props.url} className="default-link">Дэлгэрэнгүй... <i className="fa fa-arrow-right"></i></a>
            </div>
        </div>
    )
}
export default BlogItem