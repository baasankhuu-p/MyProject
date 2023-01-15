import React from "react";
const Contact = (props) => {
    return (
        <section className="contact-me section" id="contact" data-scroll-index="5">
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-7 col-sm-12">
                        <h3 className="section-title">Санал <span>Илгээх</span></h3>
                        <hr className="section-line-border" />
                        <p className="section-sub-line">
                            Үйлчилгээний дэлгэрэнгүй мэдээллийг авах бол бичиж доорх формоор
                            бичиж илгээнэ үү.
                        </p>
                    </div>
                </div>
                <div className="contact-content">
                    <div className="contact-form-outer">
                        <div className="contact-form">
                            <div className="empty-form" style={{display: 'none'}}>
                                <span>Шаардлагатай талбаруудыг бөглөнө үү</span>
                            </div>
                            <div className="email-invalid" style={{display: 'none'}}>
                                <span>Имейлээ зөв оруулна уу</span>
                            </div>
                            <div className="phone-invalid" style={{display: 'none'}}>
                                <span>Дугаараа зөв оруулна уу</span>
                            </div>
                            <div className="success-form"></div>
                            <form id="contactForm" action="javascript:void()">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="contact-form-group">
                                            <input type="text" className="contact-form-control" placeholder="Нэрээ оруулна уу" name="contact_name"
                                                id="contactName" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-form-group">
                                            <input type="text" className="contact-form-control" placeholder="И-мейл хаягаа оруулна уу"
                                                name="contact_email" id="contactEmail" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-form-group">
                                            <input className="contact-form-control" placeholder="Утасны дугаараа оруулна уу"
                                                name="contact_subject" id="contactPhone" type="number" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="contact-form-group">
                                            <select className="contact-form-control" id="customer">
                                                <option>E-Commerce & Вебсайт</option>
                                                <option>Апп UI дизайн</option>
                                                <option>Веб Дизайн</option>
                                                <option>Лого Дизайн</option>
                                                <option>Десктоп апп</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="contact-form-group">
                                            <textarea name="contact_message" placeholder="Мэдээллээ оруулна уу" id="contactMessage"
                                                className="contact-form-control" cols="30" rows="5"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="contact-form-group mb-0">
                                            <button type="submit" id="contactBtn" className="default-orange-btn">
                                                Илгээх
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact