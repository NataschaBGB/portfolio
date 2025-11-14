import { PiReadCvLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import './Header.sass'

export default function Header() {

  return (
    <section className='portfolio__header'>
        <nav>
            <div className='portfolio__logo'>
            <h1>Natascha Gutenberg Bjerning</h1>
            <p>Designed with care. Built for people.</p>
            </div>
            <ul className='portfolio__links'>
                <li className="cv">
                    <PiReadCvLogoFill className="portfolio__links-icon" />
                    <a href="https://nataschabgb.github.io/online-cv/" target="_blank">CV</a>
                </li>
                <li className="linkedin">
                    <FaLinkedin className="portfolio__links-icon" />
                    <a href="https://www.linkedin.com/in/natascha-gutenberg-bjerning/" target="_blank">LinkedIn</a>
                </li>
                <li className="github">
                    <FaGithub className="portfolio__links-icon" />
                    <a href="https://github.com/NataschaBGB" target="_blank">GitHub</a>
                </li>
            </ul>
        </nav>
      
    </section>
  )
}