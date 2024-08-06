import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className='text-center text-lg-start mt-4'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4'>
                <div className='me-5 d-none d-lg-block '>
                    <h6 className='text-secondary ' >Get connected with us on <span style={{ color: "indigo", fontWeight: '700', fontSize: "18px" }}>social network</span></h6>
                </div>
                <div className='footer-Social-Links ms-lg-auto d-sm-flex flex-wrap'>
                    <a href="" className='me-4 bg-white rounded-2 p-2'>
                        <i className='fab fa-facebook-f' style={{ color: 'indigo' }}></i>
                    </a>
                    <a href="" className='me-4 p-2 bg-white  rounded-2'>
                        <i className='fab fa-twitter ' style={{ color: 'indigo' }}></i>
                    </a>
                    <a href="" className='me-4 p-2 bg-white rounded-2'>
                        <i className='fab fa-google ' style={{ color: 'indigo' }}></i>
                    </a>
                    <a href="" className='me-4 p-2 bg-white  rounded-2'>
                        <i className='fab fa-instagram ' style={{ color: 'indigo', fontWeight: '800' }}></i>
                    </a>
                    <a href="" className='me-4 p-2 bg-white  rounded-2'>
                        <i className='fab fa-linkedin' style={{ color: 'indigo' }}></i>
                    </a>
                </div>
                <hr style={{ color: "black" }} />
            </section>


            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                    <div className='row mt-3'>
                        <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <i className='fas fa-gem me-3 '></i><span style={{ color: "indigo", fontWeight: '700' }}> Company Name</span>
                            </h6>
                            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dicta, porro expedita sit quos facilis libero suscipit repellendus ipsam accusamus.</p>

                        </div>
                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4' style={{ color: "indigo", fontWeight: '700' }}>
                                Useful Links
                            </h6>
                            <p>
                                <Link to={'/'} className='text-reset'>Home</Link>
                            </p>
                            <p>
                                <Link to={'/about'} className='text-reset'>About</Link>
                            </p>
                            <p>
                                <Link to={'/policy'} className='text-reset'>Policy</Link>
                            </p>
                            <p>
                                <Link to={'/Contact'} className='text-reset'>Contact</Link>
                            </p>
                        </div>
                        <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4' style={{ color: "indigo", fontWeight: '700' }}>
                                Best Selling
                            </h6>
                            <p>
                                Laptops
                            </p>
                            <p>
                                Mobiles
                            </p>
                            <p>
                                Sunglasses
                            </p>
                            <p>
                                Shoes
                            </p>
                        </div>
                        <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4' style={{ color: "indigo", fontWeight: '700' }}>
                                Contact
                            </h6>
                            <p className='text-secondary'>
                                <i className='fas fa-home '></i>
                                Mumbai,Maharashtra
                            </p>
                            <p className='text-secondary'>
                                <i className='fas fa-envelope '></i>
                                vrajeshshetty2000@gmail.com
                            </p>
                            <p className='text-secondary'>
                                <i className='fas fa-phone  text-secondary'></i>9137118747

                            </p>
                            <p className='text-secondary'>
                                <i className='fas fa-print  text-secondary'></i>9321229689
                            </p>
                        </div>
                    </div>
                </div>

            </section>

            <div class="text-center p-4 bg-indigo-800" style={{ color: "gray" }}>
                © 2021 Copyright:Vrajesh Shetty

            </div>
        </footer>
    )
}

export default Footer
