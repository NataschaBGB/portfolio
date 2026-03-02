import { PiReadCvLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import './Header.sass'

export default function Header() {

  return (
    <section className='header'>
        <nav className="header__nav">
            
            <div className='header__logo'>
                <h1>Natascha Gutenberg Bjerning</h1>
                <p>Designed with care. Built for people.</p>
            </div>

            <ul className='header__links'>
                <li className="cv">
                    <PiReadCvLogoFill className="header__links-icon" />
                    <a href="https://nataschabjerning.me/" target="_blank">CV</a>
                </li>
                <li className="linkedin">
                    <FaLinkedin className="header__links-icon" />
                    <a href="https://www.linkedin.com/in/natascha-gutenberg-bjerning/" target="_blank">LinkedIn</a>
                </li>
                <li className="github">
                    <FaGithub className="header__links-icon" />
                    <a href="https://github.com/NataschaBGB" target="_blank">GitHub</a>
                </li>
            </ul>
        </nav>
      
    </section>
  )
}