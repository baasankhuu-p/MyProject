import React from "react";
import EduItem from "../../components/EduItem";
const Education = () => {
    return(
        <section className="education-experience pb-minus-30 section">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-7 col-sm-12">
                        <h3 className="section-title">Бидний<span>Боловсрол</span></h3>
                        <hr className="section-line-border" />
                        <p className="section-sub-line">
                            Бидний сурч мэдсэн зүйл, туршлага..
                        </p>
                    </div>
                </div>
                <div
                    className="row justify-content-center text-center align-items-center"
                >
                    <div
                    className="resume-tab-item col-md-6 col-lg-4 col-sm-6 col-xs-12 active"
                    >
                        <div className="resume-tab-item-inner">
                            <i className="flaticon-022-learning"></i>
                            <h5>Боловсрол</h5>
                        </div>
                    </div>
                    <div className="resume-tab-item col-md-6 col-lg-4 col-sm-6 col-xs-12">
                        <div className="resume-tab-item-inner">
                            <i className="flaticon-007-thinking"></i>
                            <h5>Туршлага</h5>
                        </div>
                    </div>
                </div>
                <div className="resume-tab-content active animated fadeIn">
                    <div className="row">
                        <EduItem
                            iconName="flaticon-010-success"
                            date="2007-2019"
                            education="ЕБС"
                            paragraph="
                            Энэхүү хугацаанд бүх ерөнхий суурийн хичээлүүдээ үзсэн.
                            Увс аймгийн ЕБС-н 6-р сургуулийг төгссөн."
                        />
                        <EduItem
                            iconName="flaticon-010-success"
                            date="2019-2020"
                            education="МУИС - ХШУИС"
                            paragraph="
                            МУИС-д эхний жилдээ нарийн мэргэжлээр бус ерөнхий суурийн
                            хичээл үздэг. Компьютерийн анхан шатны мэдлэг олгох
                            зорилготой"
                        />
                        
                        <EduItem
                            iconName="flaticon-010-success"
                            date="2020-2023"
                            education="Программ хөгжүүлэгч"
                            paragraph="МУИС-н программ хангамжаар сурч эхэлсэн. Энэ хугацаанд
                            программчлалын үндэс, ОХП, Веб, Десктоп Программчлал, ПХ-н
                            Архитектур -ын талаар өргөн мэдлэгтэй болсон"
                        />
                    </div>
                </div>
                <div className="resume-tab-content animated fadeIn">
                    <div className="row">   
                        <EduItem
                            iconName="flaticon-030-deal"
                            date="2019-2020"
                            education="HTML, CSS, JS"
                            paragraph="
                            Тухайн программчлалын хэлийн судалж жижиг тооны машин,
                            санхүү тооцоолол, LookTV кино сайт болон жижиг веб
                            дизайнууд гаргаж байсан"
                        />
                        <EduItem
                            iconName="flaticon-030-deal"
                            date="2020-2021"
                            education="React-JS"
                            paragraph="
                            Тухайн программчлалын хэлийн судалж бие дааж жижиг
                            бургерийн веб аппыг хөгжүүлсэн туршлагатай"
                        />
                        
                        <EduItem
                            iconName="flaticon-030-deal"
                            date="2022-2023"
                            education="C#"
                            paragraph="
                            Тухайн программчлалын хэлийн судалж бие дааж серверээр
                            машиний хэлээр ирсэн өгөгдлүүд боловсруулж хэрэглэгчийн
                            цонхонд Газрыг зураг дээр тэмдэглэл хийх, Лабтопын Тооны
                            машин-г хийж байсан"
                        />
                        
                        <EduItem
                            iconName="flaticon-030-deal"
                            date="2022-2023"
                            education="PHP"
                            paragraph="
                            Тухайн программчлалын хэлийн судалж бие дааж жижиг санхүү
                            хөтлөх систем хийсэн. Мөн PHP Программ хөгжүүлэгч
                            мэргэжлээр 3 сар Интрактив ХХК-д ажилласан"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Education