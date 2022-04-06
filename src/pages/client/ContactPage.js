import React from 'react'
import FormContact from '../../components/client/FormContact'

const ContactPage = () => {
    return (
        <>
            <div className="m-20 grid grid-cols-2 gap-8 max-w-[1000px] my-20 mx-24">
                <FormContact />
                <div className="contact__content">
                    <h4 className="title-page text-2xl m-0">Contact</h4>
                    <div className="contact-text">
                        <div className="text__item flex pt-4">
                            <i className="bi bi-envelope-fill pr-4 text-gray-primary text-[18px]"></i>
                            <span className="text-gray-darker text-[18px]">beeshop@gmail.com</span>
                        </div>
                        <div className="text__item flex pt-4">
                            <i className="bi bi-telephone-fill pr-4 text-gray-primary text-[18px]"></i>
                            <span className="text-gray-darker text-[18px]">0912345689</span>
                        </div>
                        <div className="text__item flex pt-4">
                            <i className="bi bi-geo-alt-fill pr-4 text-gray-primary text-[18px]"></i>
                            <span className="text-gray-darker text-[18px]">Nam Tu Liem, Ha Noi</span>
                        </div>
                    </div>
                    <div className="contact-map mt-6">
                        <iframe className="radius-primary" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.9976155524155!2d105.74579812312167!3d21.037558873521878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEZQVCBQb2x5dGVjaG5pYw!5e0!3m2!1svi!2s!4v1641959023245!5m2!1svi!2s" width="100%" height="300" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}

ContactPage.propTypes = {}

export default ContactPage
