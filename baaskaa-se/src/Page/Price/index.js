import React from "react";
import PriceItem from "../../components/PriceItem";
const Price = () => {
    return(
    <section className="my-prices section pb-minus-30">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7 col-sm-12">
              <h3 className="section-title">Үйлчилгээний<span>үнэ</span></h3>
              <hr className="section-line-border" />
              <p className="section-sub-line">
                үнэ болон багцуудтай танилцаж тохирсон үйлчилгээгээ авна уу.
                Баярллаа♥♥♥
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <PriceItem 
              type="Эхлэх"
              price="***.***"
              iconName="flaticon-009-target"
              className="WhiteBg"
              TxtColor="BlackTxt"
            />
            <PriceItem 
              type="Стандарт"
              price="***.***"
              iconName="flaticon-006-work"
              className="BlackBG"
              TxtColor="WhiteTxt"
            />
            <PriceItem 
              type="Мэргэжлийн"
              price="***.***"
              iconName="flaticon-026-growth"
              className="WhiteBg"
              TxtColor="BlackTxt"            
            />
          </div>
        </div>
      </section>
    )
}
export default Price;