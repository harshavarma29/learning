import React, {PureComponent} from 'react';
import {MdLocationOn} from 'react-icons/md';
import {IoMdCall} from 'react-icons/io';
import {HiMail} from 'react-icons/hi';
import backend from 'axios';
import './styles/contact.css';

var count = 0;
class contact extends PureComponent{

    constructor() {
        super();

        this.state = {
            name: "",
            email: "",
            message: ""
        }
    }

    getValue = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    allow = () => {
        console.log("1");
        count++;
    }

    details = (event) => {
        event.preventDefault();
        console.log(this.state);

        backend.post("http://localhost:4000/contact", this.state)
        .then(res => res.data)
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }

    render() {

        return <div className="width">
                    <div className="heading center">Contact Information</div>
                    <p className="center contact-text">Don't hesitate to give us a call or send us a contact form message</p>
                    <div className="location">
                        <span className="contact-details"><MdLocationOn size={20} className="contact-icons"/>Cu-tbi, Block 3A, chandigarh University, Punjab, India</span>
                        <span className="contact-details"><MdLocationOn size={20} className="contact-icons"/>Chitora Road Near Morar Cantonment, Gram, Ratwai, Madhya Pradesh, India</span>
                    </div>
                    <div className="mobile">
                        <a href="tel:+91 8770203998" className="mobile-info"><IoMdCall size={20} className="contact-icons"/>+91 8770203998</a>
                        <a href="mailto:office@icws.in" className="mobile-info"><HiMail size={20} className="contact-icons"/>office@icws.in</a>
                    </div><br/>
                    <div className="left c-center">
                        <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16785.344195244892!2d76.56775125101306!3d30.76814254361209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ffbff4a455af5%3A0xea35dadb8a2de99c!2sINDIAN%20CUSTOMER%20WEB%20SERVICES!5e0!3m2!1sen!2sin!4v1599377103824!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div className="right">
                        <form onSubmit={this.details} className="c-center">
                            <input name="name" type="text" placeholder="Name" className="contact-input" onChange={this.getValue}/>
                            <input name="email" type="email" placeholder="Email" className="contact-input" onChange={this.getValue} required/>
                            <textarea name="message" placeholder="Your message" className="contact-input" onChange={this.getValue} rows="5"/>
                            <p onClick={this.allow} className="contact-check"><input type="checkbox"/> I have read and agree with Indain customer web services stated <a href="#" className="links">Privacy Policy</a> and <a href="t" className="links">Terms Conditions</a></p>
                            <button className="contact-input c-button">SUBMIT MESSAGE</button>
                        </form>
                    </div>
                </div>
    }
}

export default contact;