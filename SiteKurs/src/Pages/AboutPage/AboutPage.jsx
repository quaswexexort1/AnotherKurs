import './AboutPage.scss'
import { Link } from "react-router-dom";
import logo from '../../assets/Logo.png'





const AboutPage = () =>
{
    return(
        <>
        <header>
            <nav>
                <img className="logo" src={logo} alt="" />
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

        </header>
        </>
    )
}

export default AboutPage