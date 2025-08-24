import React from 'react';
import { Element } from 'react-scroll';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBadge
} from 'mdb-react-ui-kit';
import '../css/Contact.css';

function Contact() {
    return (
        <Element name='contact' className='contact-section contact py-5' >
            <MDBContainer>
                <MDBRow className='gy-4'>
                    {/* Left Info Column */}
                    <MDBCol md='6'>
                        <div className='p-4 shadow-3 rounded-4 bg-white'>
                            <h2 className='mb-4 fw-bold text-warning-emphasis'>Get in Touch</h2>

                            <div className='d-flex mb-4'>
                                <MDBIcon icon='map-marker-alt' className='me-3 text-warning' size='lg' />
                                <div>
                                    <h5 className='fw-bold text-dark'>Our Location</h5>
                                    <p className='mb-0 text-muted'>C-403 Vandematram icon, Gota<br />Ahmedabad, gujarat 382481</p>
                                </div>
                            </div>

                            <div className='d-flex mb-4'>
                                <MDBIcon icon='phone-alt' className='me-3 text-success' size='lg' />
                                <div>
                                    <h5 className='fw-bold text-dark'>Call Us</h5>
                                    <a href='tel:+918490951618' className='mb-0 text-muted'>Reservations: +91 8490951618</a>
                                </div>
                            </div>

                            <div className='d-flex mb-4'>
                                <MDBIcon icon='envelope' className='me-3 text-danger' size='lg' />
                                <div>
                                    <h5 className='fw-bold text-dark'>Email Us</h5>
                                    <a className='mb-0 text-muted'
                                        href="mailto:jeetenpanchal84@gmail.com">jeetenpanchal84@gmail.com</a>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <h5 className='fw-bold mb-3 text-warning-emphasis'>Business Hours</h5>
                                <table className='table table-sm text-muted'>
                                    <tbody>
                                        <tr>
                                            <td>Mon - Thu</td>
                                            <td>11:00 AM - 10:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Fri - Sat</td>
                                            <td>11:00 AM - 11:00 PM</td>
                                        </tr>
                                        <tr>
                                            <td>Sunday</td>
                                            <td>10:00 AM - 9:00 PM</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </MDBCol>

                    {/* Right Map Column */}
                    <MDBCol md='6' className='my-auto'>
                        <div className='  shadow-3 rounded-4 bg-white'>
                            <div className='ratio ratio-16x9 rounded-3 overflow-hidden mb-4'>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14679.980296134572!2d72.53601863807539!3d23.097276165939544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8318f77825b3%3A0x86b70c30e0395a31!2sNIRMAN%20HOMES%2C%2022%2C%20NR%20Vandematram%20Cross%20Rd%2C%20Gota%2C%20Ahmedabad%2C%20Gujarat%20382481!5e0!3m2!1sen!2sin!4v1756017174940!5m2!1sen!2sin" width="600" height="450" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Element>
    );
}

export default Contact;
