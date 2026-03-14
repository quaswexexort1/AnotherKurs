import styles from "./AboutPage.module.scss"
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png'
import group from '../../assets/group-of-people.png'
import man from '../../assets/man-in-blue.png'
import photoofwoman from '../../assets/photo-of-women.png'
import amanstanding from '../../assets/a-man-standing.png'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import trans from '../../assets/girl.png'
import maninblack from '../../assets/maninblack.png'
import maninwhite from '../../assets/maninwhite.png'
import seriousman from '../../assets/serious-man.png'
import people from '../../assets/people.png'
import pencil from '../../assets/pencil.png'
import writing from '../../assets/writing.png'
import insta from '../../assets/insta.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/Negative.png'
import twitter from '../../assets/twitter.png'







const AboutPage = () =>
{
    return(
    <div className={styles.container}>

      <header className={styles.header}>
        <nav className={styles.navv}>
          <img className={styles.logoo} src={logo} alt="" />

          <ul className={styles.menu}>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/features">Features</Link>
            <a>Pricing</a>
            <a>FAQ</a>
            <a>Blog</a>
          </ul>

            <button className={styles.contact}>Contact us</button>

        </nav>

      </header>

      <div className={styles.hero}>

        <div className={styles.heroText}>
          <span>About us</span>

          <h1>Our designs solve problems</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <img src={group} alt="" />

      </div>



      <div className={styles.who}>

        <div>
          <span>Who we are</span>

          <h2>Goal focussed</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div>
          <h2>Continuous improvement</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

      </div>



      <img className={styles.man} src={man} alt="" />

    <div className={styles.justcolor}>
        <div className={styles.process}>

        <h2>The process we follow</h2>

        <div className={styles.steps}>

          <div className={styles.step}>
            <div className={styles.line}></div>
            <h3>Planning</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.line}></div>
            <h3>Conception</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.line}></div>
            <h3>Design</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>

          <div className={styles.step}>
            <div className={styles.line}></div>
            <h3>Development</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>

        </div>

      </div>


    
      <div className={styles.mission}>

        <div className={styles.missionText}>
          <span>Our Mission</span>
          <h2>Inspire, Innovate, Share</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>

        <img src={amanstanding} alt="" />

      </div>



      <div className={styles.vision}>

        <img src={photoofwoman} alt="" />

        <div className={styles.visionText}>
          <span>Our Vision</span>
          <h2>Laser focus</h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.
          </p>
        </div>

      </div>
    </div>



    <div className={styles.benefits}>

      <h2>The benefits of working with us</h2>

      <div className={styles.cards}>

        <div className={styles.card}>
          <img src={writing} alt="" />
          <h3>Customize with ease</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua ut enim.
          </p>
        </div>

        <div className={styles.card}>
          <img src={pencil} alt="" />
          <h3>Perfectly Responsive</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua ut enim.
          </p>
        </div>

        <div className={styles.card}>
          <img src={people} alt="" />
          <h3>Friendly Support</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua ut enim.
          </p>
        </div>

      </div>


      <div className={styles.logos}>

        <div className={styles.users}>
          <h3>100.000+</h3>
          <p>Finsweet Users</p>
        </div>

          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
      </div>

    </div>



    <div className={styles.team}>

      <h2>Meet our team</h2>

      <div className={styles.teamGrid}>

        <div className={styles.member}>
          <img src={maninblack} alt="" />
          <h3>John Smith</h3>
          <p>CEO</p>
        </div>

        <div className={styles.member}>
          <img src={seriousman} alt="" />
          <h3>Simon Adams</h3>
          <p>CTO</p>
        </div>

        <div className={styles.member}>
          <img src={maninwhite} alt="" />
          <h3>Paul Jones</h3>
          <p>Design Lead</p>
        </div>

        <div className={styles.member}>
          <img src={trans} alt="" />
          <h3>Sara Hardin</h3>
          <p>Project Manager</p>
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
               <Link to="/">Home</Link>
               <Link to="/about">About us</Link>
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

export default AboutPage