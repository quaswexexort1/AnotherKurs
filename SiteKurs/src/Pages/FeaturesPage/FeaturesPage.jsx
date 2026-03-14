import styles from "./FeaturesPage.module.scss"
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png'
import illustration from '../../assets/Illustration.png'
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import people from '../../assets/people.png'
import pencil from '../../assets/pencil.png'
import writing from '../../assets/writing.png'



const FeaturesPage = () =>
{
    return(
    <div className={styles.featuresPage}>
        <header className={styles.header}>
                <nav>
                 <img className={styles.logo} src={logo} alt="" />
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/features">Features</Link>
                    <a>Pricing</a>
                    <a>FAQ</a>
                    <a>Blog</a>
                </ul>

                <button>Contact us</button>
            </nav>
            <div className={styles.underheader}>
                <div>
                    <p className={styles.building}>
                        All the features <br /> you need
                    </p>    
                    <p className={styles.lorem4ik}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqua.                    </p>

                        <div>
                            <button className={styles.price}>View pricing →</button>
                        </div>  
                </div>  
                 <img className={styles.illustration} src={illustration} alt="" />

            </div>

            </header>




              <div className={styles.logos}>
        
                <div className={styles.users}>
                  <h3>100.000+</h3>
                  <p>Figma Users</p>
                </div>
        
                  <img src={logo1} alt="" />
                  <img src={logo2} alt="" />
                  <img src={logo3} alt="" />
                  <img src={logo4} alt="" />
                  <img src={logo5} alt="" />
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
        
            </div>
        </div>
    )
}

export default FeaturesPage