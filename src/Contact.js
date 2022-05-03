import React from 'react'
import contact from "./images/contact.png"
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact() {
    return (
        <>
            <div className='contact'>
                <h1 className='hsize'>Contact Us</h1>
                <div class='row'>
                    <div class='col-lg-5 col-md-5 co-12'>
                        <div class="leftpart">
                            <img src={contact}
                                width="100%"
                                className="img1"
                                alt="React Bootstrap logo"
                            />
                        </div>
                    </div>

                    <div class='col-lg-7 col-md-7 col-12'>
                        <div className='rightpart'>
                            <div class='row'>
                                <div class='col-lg-6 col-md-12 co-12'>
                                    <lable for="Name*" class="for" >Name*
                                    </lable>
                                    <input type="name" class="form-control" id="name"
                                        placeholder="Enter Your Name"></input>
                                    <lable for="email" class="for">Email ID*
                                    </lable>
                                    <input type="email ID" class="form-control" id="email"
                                        placeholder="Enter Your Email ID"></input>
                                    <lable for="Phone Number" class="for">Phone Number*
                                    </lable>
                                    <input type="Phone Number" class="form-control" id="Phone number"
                                        placeholder="Enter Your Name"></input>


                                </div>
                                <div class='col-lg-1 col-md-1 col-12'>

                                </div>
                                <div class='col-lg-5 col-md-12 col-12'>
                                    <label for="Message" class="for"
                                    >Message*</label>
                                    <textarea class="form-control" id="Message" placeholder="Enter Your Message"
                                        rows="4"  ></textarea>
                                </div>

                            </div>
                        </div>
                        <button type="button" className='submitbutton'
                        >Submit</button>
                        <button type="button" className='cancelbutton'
                        >Cancel</button>
                    </div>

                </div>

            </div>

        </>
    );
}

export default Contact;