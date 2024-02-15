import React from 'react';
import '../App.css';
import Sale from '../Components/sale-section'
import { BsCalendarRange } from "react-icons/bs";
import { ProductCard } from '../Components/Card';
import Calendar from 'react-calendar';
import Star from '../Components/star'
import 'react-calendar/dist/Calendar.css';
import ReactPlayer from 'react-player';
import Footer from '../Components/Footer';
import check from '../Images/Featured_Icons/check.png'



const Product = () => {




    return (
        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-9 productMain">
                        <h1 className='fw-bold mt-4'>Learn Acoustic Guitar And<br></br> Electric Guitar</h1>
                        <p>Learn how to Acoustic Guitar and Electric Guitar to keep your music vibes going</p>
                        <div className="d-flex"><Star rating={5} />
                            <p> 4.7 (938  Reviews)</p></div>
                        <div className="videoPlayer my-4 ">
                            <ReactPlayer controls url="https://www.youtube.com/watch?v=l_gowxWDulA&list=PLlbkseU54VWzzhML9S7g9u6hX5MDTlAU5" className="react-player" width={'90%'} height={'500px'} ></ReactPlayer>
                        </div>


                        {/*---------------------- Product Discription---------------------- */}
                        <div className="productDisc">
                            <h2>
                                After Completing This activity You Will Be Able To
                            </h2>
                            <ul>
                                <li><img src={check} alt={check}></img>
                                    Can play guitar easily
                                </li>
                                <li><img src={check} alt={check}></img>
                                    Differentiate between different chords
                                </li>
                                <li><img src={check} alt={check}></img>
                                    Can start recognizing chords and playing with it
                                </li>
                                <li><img src={check} alt={check}></img>
                                    Use it in family functions
                                </li>
                            </ul>
                            {/*---------------------- About Activity---------------------- */}
                            <h2>About This Activity</h2>
                            <p style={{ whiteSpace: 'pre-line' }}>
                                I have over ten years experience as a professional studio guitarist, with adept knowledge in theory and practical skills. I have years of teaching and playing experience both on stage and in the studio.
                                <br />
                                <br />
                                I can help you reach your goals, from beginner to intermediate at any age!
                                <br />
                                <br />
                                I specialize in but not limited to:
                                <br />
                                Rock
                                <br />
                                Jazz
                                <br />
                                Neo-soul/Rnb
                                <br />
                                <br />
                                From basic to advanced music theory and scales, all of which will be incorporated into your lessons based on your level.
                                <br />
                                <br />
                                I also specialize in more advanced techniques such as sweep picking, legato, thumping, and alternate picking for any intermediates out there!
                                <br />
                                <br />
                                I work by doing 1 lesson a week over a 4-week period. If you are enjoying the lessons, feel free to continue until you are at a level you are happy with.
                                <br />
                                <br />
                                Note: My goal is to get you to a level where you can start making your own riffs/songs and not be reliant on me or any other teacher for you to enjoy your instrument!
                            </p>




                            {/*---------------------- Bullet Points---------------------- */}
                            <div className="bulletPoints">


                                <h2> What will you Learn</h2>
                                <ul className='blue-bullets'>
                                    <li>How to select and customize the right theme and media to achieve your sites goals</li>
                                    <li>How to ensure that your website is a good reflection of your brand identity</li>
                                    <li>Prepare and build content that will consistently drive traffic to your site</li>
                                    <li>Search Engine Optimization best practices</li>
                                    <li>How to create a wireframe for your website’s design</li>
                                    <li>How to add widgets to your site</li>
                                    <li>How to successfully launch a brand new WordPress.com site</li>
                                    <li>How to get noticed after your launch</li>
                                </ul>

                                <h2>Who Is This Course For?</h2>
                                <ul className='blue-bullets'>
                                    <li>Freelancers wanting to start offering web design services</li>
                                    <li>Business owners wanting to take their brand online</li>
                                    <li>eCommerce entrepreneurs wanting to enhance their website</li>
                                    <li>Bloggers looking to build their own blog site</li>
                                    <li>Influencers needing a secure online platform for their content</li>
                                    <li>Web programmers, designers, front end and full stack developers wanting to diversify their skills</li>
                                    <li>Anyone wanting to start a career in building websites with WordPress.com</li>
                                    <li>All levels of experience</li>
                                </ul>

                                <h2>Requirements</h2>
                                <ul className='blue-bullets'>
                                    <li>
                                        Weekly Classes
                                    </li>
                                    <li>
                                        Electric Guitar
                                    </li>
                                </ul>

                            </div>
                            <div className="Reviews">
                                <h2>938 Reviews</h2>
                                <p className='fw-700'><Star rating={5}></Star> &nbsp; 4.7</p>

                                <hr/>
                                <p className='fw-700'><Star rating={5}></Star> &nbsp; cmexpert</p>
                                <p>Outstanding course now happy Let Us Know What You Thought About: Build A Professional Website With WordPress.Com nice</p>
                                <hr/>
                                <p className='fw-700'><Star rating={5}></Star> &nbsp; sissiwedgwood</p>
                                <p>Pretty complete for building a basic WP site.</p>
                                <hr/>

                                <p className='fw-700'><Star rating={5}></Star> &nbsp; Oladiran Mary</p>
                                <p>It's amazing learning from Marjorie. From Wordpress to Content Strategy, SEO and Marketing.... I was blessed beyond measure through her wealth of experience.</p>
                                <hr/>
                                <p className='fw-700'><Star rating={5}></Star> &nbsp; harryfergus0673</p>
                                <p> Information was very clear and easily implemented. Was able complete the course in two sittings without being stressed and overwhelmed.</p>
                                <hr/>

                                <button className='bg-wbbtn'>Learn More</button>

                            </div>
                        </div>
                        




                    </div>
                    <div className="col-lg-3 col-sm-9 mt-4 mb-3 p-0">
                        <div className=" sale-section">
                            <ProductCard></ProductCard>
                            <Sale></Sale>

                        </div>
                        <div className='timings'>
                            <p><BsCalendarRange />&nbsp;  Available Timings</p>
                        </div>
                        <br></br>
                        <div className="calendar-div">
                            <Calendar className={'calendar-box'}></Calendar>
                            <br></br>
                            <div className="btn-section  pb-2 pe-3 d-flex">
                                <button className="bg-bkbtn btn-br6 me-2">Cancel</button>
                                <button className="bg-bluebtn btn-br6">Book Session</button>

                            </div>
                        </div>

                    </div>

                </div>
                <div className="row mt-4">
                    <hr className='grey-hr'></hr>
                    <div className="col-12 faq">
                    <h2 className='text-center'>Frequently Asked Questions</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <p className='fw-700'>What is WordPress?</p>
                        <p>WordPress is a content management system (CMS) that is most commonly used to build websites, blogs, and eCommerce/online stores. WordPress.com is a hosted platform of websites and blogs owned and managed by Automattic, Inc., where millions of users can create and publish blogs and websites without needing to write a single line of code.</p>

                        <p className='fw-700'>What is WordPress cms?</p>
                        <p>WordPress CMS (content management system) is a system that lets a user organize, manage, and publish content on the web, using the powerful, open-source WordPress software. The WordPress CMS is typically used with themes (templates) to facilitate layout design, and plugins to add extra, custom functionality to the platform.</p>
                   
                        <p className='fw-700'>Can WordPress be used for eCommerce?</p>
                        <p>WordPress can definitely be used to build an eCommerce online store. Because the WordPress CMS software is flexible and powerful, users can create a professional, attractive website and add eCommerce functionality by installing an eCommerce plugin like WooCommerce, the most popular eCommerce plugin for WordPress. You can also upgrade to the eCommerce plan on your account at WordPress.com, which automatically includes the WooCommerce plugin and a collection of the most popular WooCommerce extensions.</p>
                    </div>

                    <div className="col-lg-6">
                        <p className='fw-700'>How to build a WordPress website?</p>
                       <p>You can build a WordPress website by going to https://wordpress.com and creating an account. WordPress.com does not require any technical knowledge or background; you only need a valid email address. Once you create an account, you can start building your site, adding content, selecting a theme, customizing its design, and then publishing it for free.</p>

                        <p className='fw-700'>Is WordPress free?</p>
                        <p>Users can create an account and build a WordPress-powered website or blog for free on WordPress.com. All you need is a valid email address, and you can set up a simple website or blog in minutes. The open-source WordPress CMS software can also be downloaded for free at wordpress.org.</p>
                        <p className='fw-700'>Can WordPress be used for eCommerce?</p>
                        <p>WordPress lets users build a complete, professional website or blog without needing any technical or programming knowledge or background. To set up a WordPress site, you can go to WordPress.com and create a free account using just a valid email address to verify your identity. You can then start building your website by choosing a website name, selecting a theme for your site design, uploading media like images or documents, and adding other content like text. You can also add social sharing buttons and other features as you build your site.</p>
                    </div>
                </div>

                    </div>
                </div>
            </div>

            <Footer/>

        </>

    );
};

export default Product;
