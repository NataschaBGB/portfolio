import { PiReadCvLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import './Header.sass'

export default function Header() {

  return (
    <section className='portfolio__header'>
        <nav>
            <a href="/"><h1>Natascha Bjerning</h1></a>
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