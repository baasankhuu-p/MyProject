import React from "react";
import TeamItem from "../../components/TeamItem";
import User1 from "../../image/team/450x450.png"
const Teams = (props) => {
    return(
        <section className="section" id="my-team">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-7 col-sm-12">
              <h3 className="section-title">Бидний<span>Хамтрагчид</span></h3>
              <hr className="section-line-border" />
            </div>
          </div>
          <div className="my-team-slider owl-carousel owl-theme">
            <TeamItem 
                image={User1}
                name="Овог Нэр"
                status="Мэргэжил"
                url_fc="javascript:void()"
                url_tw="javascript:void()"
                url_ins="javascript:void()"/>
            <TeamItem 
                image={User1}
                name="Овог Нэр"
                status="Мэргэжил"
                url_fc="javascript:void()"
                url_tw="javascript:void()"
                url_ins="javascript:void()"/>
          </div>
        </div>
      </section>
    )
}
export default Teams