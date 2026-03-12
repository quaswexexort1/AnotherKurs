import styles from "./AboutPage.module.scss"
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png'
import group from '../../assets/group-of-people.png'
import man from '../../assets/man-in-blue.png'





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
            <a>Features</a>
            <a>Pricing</a>
            <a>FAQ</a>
            <a>Blog</a>
          </ul>

            <button className={styles.contact}>Contact us</button>

        </nav>

      </header>

        <div className={styles.heroText}>
          <span>About us</span>
          <h1>Our designs solve problems</h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </p>

          <img src={group} alt="" />
        </div>

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
     <img className={styles.man} src={man} alt="" />
    </div>

    )
}

export default AboutPage