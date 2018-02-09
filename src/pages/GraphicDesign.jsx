import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Carousel from '../components/Carousel.jsx';
import './GraphicDesign.css';

import p1 from '../images/aiga-650x459.jpg';
import p2 from '../images/la-650x459.jpg';
import p3 from '../images/magellan-650x459.jpg';
import p4 from '../images/sunset-650x459.jpg';
import p5 from '../images/telesign-650x459.jpg';
import p6 from '../images/village-650x459.jpg';

import d1 from '../images/guidelines.png';
import d2 from '../images/digital.png';
import d3 from '../images/packaging.png';

import e1 from '../images/experience-la.jpg';
import e2 from '../images/experience-london.jpg';
import e3 from '../images/experience-rome.jpg';
import e4 from '../images/experience-dubai.jpg';
import e5 from '../images/experience-staffordshire.jpg';

import bb1 from '../images/brand-building.png';

import b1 from '../images/logo-playboy.jpg';
import b2 from '../images/logo-magellan-jets.jpg';
import b3 from '../images/logo-la-cold.jpg';
import b4 from '../images/logo-swell.jpg';
import b5 from '../images/logo-espresso.jpg';
import b6 from '../images/logo-saturnbath.jpg';
import b7 from '../images/logo-moet.jpg';
import b8 from '../images/logo-dca.jpg';
import b9 from '../images/logo-ticketmaster.jpg';
import b10 from '../images/logo-nespresso.jpg';
import b11 from '../images/logo-akzonobel.jpg';
import b12 from '../images/logo-barclays.jpg';



class GraphicDesign extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div className="content-wrap container-fluid">
                    <section className="intro">
                        <strong><p className="name"> Afshin Valinejad</p></strong>
                        <h1 className="describe">Freelance Graphic Designer and Branding Consultant
                            <br></br>based in Tehran.</h1>
                    </section>
                    <section className="row portfolio">
                        <div className="col-sm-12 col-md-6 col-lg-4 pax">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p3} alt=""/>
                                <p className="img__description">This image looks super neat.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 pax">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p1} alt=""/>
                                <p className="img__description">This image looks super neat.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 pax">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p2} alt=""/>
                                <p className="img__description">This image looks super neat.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 pax">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p4} alt=""/>
                                <p className="img__description">This image looks super neat.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 pax">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p5} alt=""/>
                                <p className="img__description">This image looks super neat.</p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4 pax">
                            <div className="img__wrap thumbnail">
                                <img className="img__img" src={p6} alt=""/>
                                <p className="img__description">This image looks super neat.</p>
                            </div>
                        </div>

                        <div className="trigger_load_more portfolio_load_more" data-total-items="32" data-type="portfolio">
                            <a className="be-shortcode mediumbtn be-button tatsu-button alt-bg alt-bg-text-color" href="#">Load More</a>
                        </div>


                    </section>
                    <section className="services">
                        <section className="intro">
                            <strong><p className="name"> SERVICES</p></strong>
                            <h2 className="describe">Full-service creative solution for brand design, digital content and
                                <br/>packaging development.</h2>
                        </section>
                        <section className="row services-wrapper">

                            <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                <div className="brand-design ">
                                    <a href="#"><img src={d1} alt=""/></a>
                                        <h3>BRAND DESIGN</h3>
                                        <p style={{ color: 'rgb(0, 240, 220)' }}>Brand strategy, creative direction and production for printed and online projects.</p>
                                        <li>Brand Creation</li>
                                        <li>Art Direction</li>
                                        <li>Brand Strategy</li>
                                        <li>Advertising</li>
                                        <li>Brand Guidelines</li>
                                        <li>Environment Design</li>
                                        <li>Artwork Production</li>
                                        <li>Print Management</li>
                                        <br/><br/>
                                        <a href="#"><p>VIEW BRAND PORTFOLIO ></p></a>



                                </div>

                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                <div className="brand-design ">
                                    <a href="#"><img src={d2} alt=""/></a>
                                        <h3>BRAND DESIGN</h3>
                                        <p  style={{ color: 'rgb(0, 240, 220)' }}>Brand strategy, creative direction and production for printed and online projects.</p>
                                        <li style={{ color: 'white' }}>Brand Creation</li>
                                        <li style={{ color: 'white' }}>Art Direction</li>
                                        <li style={{ color: 'white' }}>Brand Strategy</li>
                                        <li style={{ color: 'white' }}>Advertising</li>
                                        <li style={{ color: 'white' }}>Brand Guidelines</li>
                                        <li style={{ color: 'white' }}>Environment Design</li>
                                        <li style={{ color: 'white' }}>Artwork Production</li>
                                        <li style={{ color: 'white', textDecoration: 'none' }}>- Print Management</li>
                                        <p style={{ color: 'white' }}>-  Artwork Production</p>
                                        <br/><br/>
                                        <a href="#"><p style={{ color: 'white', textDecoration: 'none'  }}>VIEW BRAND PORTFOLIO ></p></a>


                                </div>

                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-4 servax">
                                <div className="brand-design ">
                                    <a href="#"><img src={d3} alt=""/> </a>

                                        <h3>BRAND DESIGN</h3>
                                        <p style={{ color: 'rgb(0, 240, 220)' }}>Brand strategy, creative direction and production for printed and online projects.</p>
                                        <li>Brand Creation</li>
                                        <li>Art Direction</li>
                                        <li>Brand Strategy</li>
                                        <li>Advertising</li>
                                        <li>Brand Guidelines</li>
                                        <li>Environment Design</li>
                                        <li>Artwork Production</li>
                                        <li>Print Management</li>
                                        <br/><br/>
                                        <a href="#"><p>VIEW BRAND PORTFOLIO ></p></a>

                                </div>

                            </div>
                        </section>

                    </section>
                    <section className="about">
                        <section className="intro">
                            <strong><p className="name"> ABOUT</p></strong>
                            <h1 className="describe">My name is David Cox, a British freelance Graphic Designer, Branding Consultant and Packaging Designer based in Los Angeles. I have over 25 years experience working with the world’s leading brands and have developed more than 200 brands while collaborating with some of the best design agencies around the globe.</h1>
                            <br/>
                            <p>DOWNLOAD RESUME ></p>
                        </section>
                        <section className="about">
                            <div className="row">
                                <div className="col-sm-6 col-md-6 city-image" >
                                    <img src={e1} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-6 city-text">
                                    <h5> Los Angeles, USA</h5>
                                    <p> 2012 – CURRENT </p>
                                    <p>During the past 5 years in LA I have completed projects for more than 50 brands, including TeleSign, a global digital security company and The Sunset Team, a West Hollywood real estate agency. Plus packaging for CuttinEdge Lab and LA Cold Brew.
                                    Other projects include a website for a Hollywood film editor, digital advertising for private jet company and brand creation for a European organic food supplier.
                                    I also acted as Agency of Record for AIGA Los Angeles, responsible for design and production of event assets including social media graphics, emailers and posters.
                                    </p>
                                </div>
                                <div className="col-sm-6 col-md-6 city-text">
                                    <h5>London, UK</h5>
                                    <p>1996 – 2012</p>
                                    <p>I lived and worked in London for more than 15 years where I freelanced at some of London’s (and the world’s) best design agencies including FutureBrand, Design Bridge, Identica, Pentagram, BEAR, Landor and Interbrand.
                                    Working at these agencies gave me the opportunity to work on brands such as Barclays, Ticketmaster, Virgin, McDonalds, AkzoNobel, Moët & Chandon and Nespresso.
                                    Additionally, I worked with my own clients, including a Dubai based automotive company specializing in roadside assistance.
                                    </p>
                                </div>
                                <div className="col-sm-6 col-md-6 city-image">
                                    <img src={e2} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-6 city-image">
                                    <img src={e3} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-6 city-text">
                                    <h5>Rome, Italy</h5>
                                    <p>1995 – 1996</p>
                                    <p>I was only in Rome for one year, but during my time I completed work for various boutique brands, including a high-end leather supplier and a stationer specializing in bespoke stationery and printed goods.
                                    I also continued to work with the global advertising powerhouse DMB&B, working out of their Milan and Dubai offices. I focused on their European based clients including Cadbury, McDonald’s, Siemens and Smirnoff.
                                    </p>
                                </div>
                                <div className="col-sm-6 col-md-6 city-text">
                                    <h5>Dubai, UAE</h5>
                                    <p>1992 – 1995</p>
                                    <p>I spent most of my 4 years in Dubai working at DMB&B, which at the time was the biggest advertising company in the world. I was responsible for visualization and retouching for clients including GMC, Dubai Department of Tourism & Commerce, Philips and Nestlé.
                                    My other role at the agency was that of a production artist, tasked with the creation of multilingual adverts for publication across the Gulf and the Middle East.
                                    </p>
                                </div>
                                <div className="col-sm-6 col-md-6 city-image">
                                    <img src={e4} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-6 city-image">
                                    <img src={e5} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-6 city-text">
                                    <h5>Staffordshire, UK</h5>
                                    <p>1972 – 1992</p>
                                    <p>I grew up in Staffordshire, among the rolling hills and lush landscape of middle England, some 100 miles north of London.
                                    After completing my Graphic Design Diploma in 1992 I was offered a job at a design agency in Dubai. So I decided to jump on a plane and in at the deep end. The rest as they say, is history.
                                    </p>
                                </div>

                            </div>
                        </section>

                    </section>
                    <section className="brand-building services">


                                <section className="intro">
                                    <strong><p className="name"> BRAND BUILDING</p></strong>
                                    <h1 className="describe">Developing brands with the bigger picture in mind.</h1>
                                        <br/>
                                </section>
                        <div className="row">

                                    <div className="col-sm-12 col-md-6">
                                        <section className="bb">
                                        <p>You never quite know how customers will first discover your business. It may be through your website, online advertising, business card or an exhibition stand at a trade show, so it’s imperative they all work together and are of the same high quality.
                                            The ability to consider other brand assets during design and production, even if I am not tasked with doing them, ultimately helps to create a more cohesive brand.
                                            My extensive experience means I’m able to design, implement and produce just about any item you require. From stationery, printed collateral, press adverts and brand guidelines to packaging, office branding, exhibition stands, websites, online advertising and your </p>
                                        </section>
                                    </div>

                                    <div className="col-sm-10 col-md-6 col-lg-5">
                                        <section className="brand-building-image">
                                            <img src={bb1} alt=""/>
                                        </section>
                                    </div>

                        </div>
                    </section>
                    {/*<section className="brand-building services">*/}
                        {/*<div className="row">*/}
                            {/*<div className="col-sm-12 col-md-6">*/}
                                {/*<section className="intro">*/}
                                    {/*<strong><p className="name"> BRAND BUILDING</p></strong>*/}
                                    {/*<h1 className="describe">Developing brands with the bigger picture in mind.</h1>*/}
                                    {/*<br/>*/}
                                    {/*<p>You never quite know how customers will first discover your business. It may be through your website, online advertising, business card or an exhibition stand at a trade show, so it’s imperative they all work together and are of the same high quality.*/}
                                        {/*The ability to consider other brand assets during design and production, even if I am not tasked with doing them, ultimately helps to create a more cohesive brand.*/}
                                        {/*My extensive experience means I’m able to design, implement and produce just about any item you require. From stationery, printed collateral, press adverts and brand guidelines to packaging, office branding, exhibition stands, websites, online advertising and your </p>*/}
                                {/*</section>*/}
                            {/*</div>*/}

                            {/*<div className="col-sm-12 col-md-5">*/}
                                {/*<section className="brand-building-image">*/}
                                    {/*<img src={bb1} alt=""/>*/}
                                {/*</section>*/}
                            {/*</div>*/}

                        {/*</div>*/}
                    {/*</section>*/}
                    <section className="brands">
                        <section className="intro">
                            <strong><p className="name"> BRANDS</p></strong>
                            <h1 className="describe">From telecommunication giants, household brands and private jet companies to small businesses and individuals, I’ve completed work in just about every business sector.</h1>
                        </section>
                        <section className="brands-logo">
                            <div className="row brands-row">
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b1} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b2} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b3} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b4} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b5} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b6} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b7} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b8} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b9} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b10} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b11} alt=""/>
                                </div>
                                <div className="col-sm-6 col-md-4 col-lg-3 brand-logo">
                                    <img src={b12} alt=""/>
                                </div>

                            </div>
                        </section>
                    </section>

                    <section className="carousel-text">
                        <Carousel/>
                    </section>

                    <section className="news">
                        <section className="intro">
                            <strong><p className="name"> NEWS</p></strong>
                            <h1 className="describe">All the latest news, updates on recent projects and stories from the world of design.</h1>
                        </section>
                    </section>
                </div>
                <Footer />
            </div>
        );
    }
}

export default GraphicDesign;
