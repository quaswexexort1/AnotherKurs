import styles from "./MainPage.module.scss"
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png'
import illustration from '../../assets/Illustration.png'
import card from '../../assets/Card.png'
import bullshit from '../../assets/bullshit.png'
import cultists from '../../assets/cultists.png'
import people from '../../assets/people.png'
import mark from '../../assets/mark.png'
import pencil from '../../assets/pencil.png'
import question from '../../assets/question.png'
import time from '../../assets/time.png'
import writing from '../../assets/writing.png'
import lico from '../../assets/roflanlico.png'
import arab from '../../assets/arabic-businessman-standing-on-street-and-using-laptop.png'
import applemonitors from '../../assets/apple-monitors-326518.png'
import womaninwhite from '../../assets/woman-in-white.png'
import insta from '../../assets/insta.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/Negative.png'
import twitter from '../../assets/twitter.png'

const MainPage = () => 
{
    return(
    <div className={styles.mainpage}>
    <header className={styles.header}>
            <nav>
                <img className={styles.logo} src={logo} alt="" />
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About us</Link>
                    <a>Features</a>
                    <a>Pricing</a>
                    <a>FAQ</a>
                    <a>Blog</a>
                </ul>

                <button>Contact us</button>
            </nav>
            <div className={styles.underheader}>
                <div>
                    <p className={styles.building}>
                        Building stellar <br /> websites for early <br /> startups
                    </p>

                    <p className={styles.lorem4ik}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Quasi, tempore.
                    </p>
                    
                        <div>
                            <button className={styles.work}>View our work</button>
                            <button className={styles.price}>View pricing →</button>
                        </div>

                </div>


                 <img className={styles.illustration} src={illustration} alt="" />

            </div>
    </header>

            <div className={styles.howwe}>
                <div className={styles.textcolumn}>
                    <p className={styles.title}>How we work</p>
                    <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="#" className={styles.link}>Get in touch with us →</a>
                </div>
                            <div className={styles.blocks}>
                <div className={styles.step}>
                    <div className={styles.stepnumber}>
                        <div>01</div>
                        <h3>Strategy</h3>
                        <p>Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et velit aliquam .</p>
                    </div>
                </div>

                <div className={styles.step}>
                    <div className={styles.stepnumber}>
                        <div>02</div>
                        <h3>Wireframing</h3>
                        <p>Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et velit aliquam .</p>
                    </div>
                </div>


                <div className={styles.step}>
                    <div className={styles.stepnumber}>
                        <div>03</div>
                        <h3>Design</h3>
                        <p>Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et velit aliquam .</p>
                    </div>
                </div>


                <div className={styles.step}>
                    <div className={styles.stepnumber}>
                        <div>04</div>
                        <h3>Development</h3>
                        <p>Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et velit aliquam .</p>
                    </div>
                </div>

            </div>
        </div>



        <div className={styles.projects}>
            <div className={styles.projectsheader}>
                <h2>View our projects</h2>
                <a href="#">View more →</a>
            </div>

            <div className={styles.projectscontent}>
                <div className={styles.projectmain}>
                    <img src={card} alt="" />
                    <div className={styles.overlay}>
                        <h3>Workhub office Webflow Webflow Design</h3>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                        <a href="#">View projects→</a>
                    </div>
                </div>


                <div className={styles.projectsside}>
                    <div className={styles.sidetop}>
                        <img src={bullshit} alt="" />
                        <div className={styles.overlaysmall}>
                            <h3>Unisaas Website Design</h3>
                            <a href="#">View portfolio→</a>
                        </div>
                    </div>

                <div className={styles.sidebottom}>
                    <img src={cultists} alt="" />
                </div>
                </div>
            </div>
        </div>





        <div className={styles.features}>
          <div className={styles.featuresheader}>
            <p className={styles.subtitle}>Features</p>
            <h2>
              Design that solves <br />
              problems, one product at <br />
              a time
            </h2>
          </div>

          <div className={styles.featuresgrid}>
            <div className={styles.featurecard}>
              <div className="icon">
                <img src={people} alt="" />
              </div>
                <h3>Uses Client First</h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi.
                </p>
            </div>

            <div className={styles.featurecard}>
              <div className={styles.icon}>
                <img src={mark} alt="" />
              </div>
                <h3>Two Free Revision Round</h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi.
                </p>
            </div>

            <div className={styles.featurecard}>
              <div className={styles.icon}>
                <img src={pencil} alt="" />
              </div>
              <h3>Template Customization</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi.
              </p>
            </div>

            <div className={styles.featurecard}>
              <div className={styles.icon}>
                <img src={question} alt="" />
              </div>
                <h3>24/7 Support</h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi.
                </p>
            </div>

            <div className={styles.featurecard}>
              <div className={styles.icon}>
                <img src={time} alt="" />
              </div>
                <h3>Quick Delivery</h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi.
                </p>
            </div>

            <div className={styles.featurecard}>
              <div className={styles.icon}>
                <img src={writing} alt="" />
              </div>
                <h3>Hands-on approach</h3>
                <p>
                  Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucibus turpis eu gravida mi.
                </p>
            </div>
          </div>
        </div>









        <div className={styles.idkwhattosay}>
          <div className={styles.idkwhattosayleft}>
            <h2>What our clients <br /> say about us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit sed.
            </p>
          </div>

          <div className={styles.idkwhattosayright}>
            <p className={styles.quote}>
              "The best agency we’ve worked with so far. They understand our product 
              and are able to add new features with a great focus."
            </p>

        <div className={styles.bottomrow}>
            <div className={styles.author}>
              <img src={lico} alt="" />
              <div>
                <h4>Jenny Wilson</h4>
                <span>Vice President</span>
              </div>
            </div>

             <div className={styles.arrows}>
               <button className={styles.prev}>‹</button>
               <button className={styles.next}>›</button>
             </div>
            </div>
        </div>
        </div>









        <div className={styles.faq}>
          <div className={styles.faqleft}>
            <h2>Frequently <br /> asked questions</h2>
            <a href="#">Contact us for more info</a>
          </div>

          <div className={styles.faqright}>
            <div className={styles.faqitemactive}>
              <div className={styles.faqquestion}>
                <span>01</span>
                <h4>How much time does it take?</h4>
                <button>×</button>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className={styles.faqitem}>
              <div className={styles.faqquestion}>
                <span>02</span>
                <h4>What is your class naming convention?</h4>
                <button>+</button>
              </div>
            </div>

            <div className={styles.faqitem}>
              <div className={styles.faqquestion}>
                <span>03</span>
                <h4>How do you communicate?</h4>
                <button>+</button>
              </div>
            </div>

            <div className={styles.faqitem}>
              <div className={styles.faqquestion}>
                <span>04</span>
                <h4>I have a bigger project. Can you handle it?</h4>
                <button>+</button>
              </div>
            </div>

            <div className={styles.faqitem}>
              <div className={styles.faqquestion}>
                <span>05</span>
                <h4>What is your class naming convention?</h4>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>




        <div className={styles.contact}>
  
          <div className={styles.contactleft}>
            <div className={styles.contactoverlay}>
              <h2>
                Building stellar <br />
                websites for <br />
                early startups
              </h2>

              

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.
              </p>
            </div>
          </div>

          <div className={styles.contactright}>

            <h3>Send inquiry</h3>

            <p className={styles.contactdesc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore.
            </p>

            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Paste your Figma design URL" />

            <button className={styles.sendbtn}>Send an Inquiry</button>

            <a href="#" className={styles.contactlink}>
              Get in touch with us →
            </a>

          </div>

        </div>

      <div className={styles.blog}>

        <h2>Our blog</h2>

        <div className={styles.blogcards}>

          <div className={styles.blogcard}>
            <img src={arab} alt="" />
            <span>19 Jan 2022</span>

            <h3>
              How one Webflow user grew his <br /> single person consultancy
              from <br /> $0-100K in 14 months
            </h3>

            <p>
              See how pivoting to Webflow changed one <br /> person’s sales strategy
              and allowed him to attract
            </p>

            <a href="#">Read More →</a>
          </div>

          <div className={styles.blogcard}>
            <img src={womaninwhite} alt="" />
            <span>19 Jan 2022</span>

            <h3>
              How one Webflow user grew his <br /> single person consultancy
              from <br /> $0-100K in 14 months
            </h3>

            <p>
              See how pivoting to Webflow changed one <br /> person’s sales strategy
              and allowed him to attract
            </p>

            <a href="#">Read More →</a>
          </div>

          <div className={styles.blogcard}>
            <img src={applemonitors} alt="" />
            <span>19 Jan 2022</span>

            <h3>
              How one Webflow user grew his <br /> single person consultancy
              from <br /> $0-100K in 14 months
            </h3>

            <p>
              See how pivoting to Webflow changed one <br /> person’s sales strategy
              and allowed him to attract
            </p>

            <a href="#">Read More →</a>
          </div>


        </div>

            </div>



    <footer>

            <div className={styles.footertop}>

          <div className={styles.footerleft}>
            <h3>{`{Finsweet`}</h3>

            <p>
              We are always open to discuss your project and<br /> improve your online presence.
            </p>

            <div className={styles.footercontact}>

              <div>
                <span>Email me at</span>
                <p>contact@website.com</p>
              </div>

              <div>
                <span>Call us</span>
                <p>0927 6277 28525</p>
              </div>

            </div>
          </div>

          <div className={styles.footerright}>

            <h2>Lets Talk!</h2>

            <p>
              We are always open to discuss your project,
              improve your online presence and help with
              your UX/UI design challenges.
            </p>

            <div className={styles.footersocial}>
              <span><img src={facebook} alt="" /></span>
              <span><img src={twitter} alt="" /></span>
              <span><img src={insta} alt="" /></span>
              <span><img src={linkedin} alt="" /></span>
            </div>

          </div>

        </div>

        <div className={styles.footerbottom}>

          <p>Copyright 2022, Finsweet.com</p>

          <div className={styles.footerlinks}>
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
          </div>

        </div>

      
    </footer>
        </div>
    )
}

export default MainPage