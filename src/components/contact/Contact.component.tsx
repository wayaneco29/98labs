import React from 'react';

import Container from '../container/Container.component';
import Animate from '../Animate';

import { FaFacebook } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillGoogleCircle } from 'react-icons/ai';

import './contact.styles.css';
//     width: 80%;
//     margin: 0px auto;
//     background: rgb(238, 238, 238);
//     position: relative;
//     top: -55px;
//     border-radius: 10px;
//     box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px 0px;

const Contact = () => {
    const [datas, setDatas] = React.useState({
        email: "",
        name: "",
        message: ""
    });

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLInputElement>):void => {
        const { name, value } = event.target;
        setDatas({
            ...datas,
            [name]: value
        })
    } 

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setDatas({
            ...datas,
            name: "",
            email: "",
            message: ""
        })
    }

    return (
        <div id="contact">
            <Container>
                <div className="contact-inner">
                    <div className="title-container">
                        <Animate name="fadeInUp" className="title">
                            contact us
                        </Animate>
                    </div>
                    <div className="contact-content">
                        <Animate name="fadeIn">
                            <form name="fadeIn" className="form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="email" id="email" name="email" className="input-field focus" onChange={handleChange} value={datas.email}/>
                                    <label htmlFor="email" className={`label ${datas.email ? "shrink-to-top" : ""}`}>Email</label>
                                </div>
                                <div className="form-group">
                                    <input type="text" id="name" name="name" className="input-field focus" onChange={handleChange} value={datas.name}/>
                                    <label htmlFor="" className={`label ${datas.name ? "shrink-to-top" : ""}`}>Name</label>
                                </div>
                                <div className="form-group">
                                    <textarea className="textarea focus" name="message" onChange={handleChange} value={datas.message}/>
                                    <label htmlFor="" className={`label ${datas.message ? "shrink-to-top" : ""}`}>Message</label>
                                </div>
                                <div className="form-group direction-row">
                                    <button type="submit" className="btn">Send.</button>
                                </div>
                            </form>
                        </Animate>
                        <Animate name="fadeIn" className="or-separator"><span className="dashed">-</span> OR <span className="dashed">-</span></Animate>
                        <Animate name="fadeIn" className="links-container">
                            <a href="https://web.facebook.com/98Labs/?_rdc=1&_rdr" rel="noopener noreferrer" target="_blank" className="links facebook"><FaFacebook /></a>
                            <a href="https://twitter.com/98labs?lang=en" rel="noopener noreferrer" target="_blank" className="links twitter"><AiFillTwitterCircle /></a>
                            <a href="mailto:info@98labs.com" rel="noopener noreferrer" target="_self" className="links gmail"><AiFillGoogleCircle /></a>
                        </Animate>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact;