import { RiHtml5Line } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaWordpressSimple } from "react-icons/fa";
import { BiLogoPhp } from "react-icons/bi";
import responsive_icon from '../../assets/responsive_icon.png'
import vite_icon from '../../assets/vite_icon.png'
import { FaReact } from "react-icons/fa";
import './Competencies.sass'

export default function Competencies() {

  return (
    <article className='portfolio__competencies'>
        <h2>Competencies</h2>
        <section className='portfolio__competencies-wrapper'>
            <section>
                <RiHtml5Line className="icon html" />
                <h3>HTML</h3>
            </section>
            <section>
                <FaCss3 className="icon css" />
                <h3>CSS</h3>
            </section>
            <section>
                <FaSass className="icon sass" />
                <h3>SASS</h3>
            </section>
            <section>
                <DiJqueryLogo className="icon jquery" />
                <h3>jQuery</h3>
            </section>
            <section>
                <TbBrandJavascript className="icon javascript" />
                <h3>JavaScript</h3>
            </section>
            <section>
                <FaWordpressSimple className="icon wordpress" />
                <h3>Wordpress</h3>
            </section>
            <section>
                <BiLogoPhp className="icon php" />
                <h3>PHP</h3>
            </section>
            <section>
                <img src={responsive_icon} alt="responsive_icon" className="icon responsive" />
                <h3>Responsive design</h3>
            </section>
            <section>
                <img src={vite_icon} alt="vite_icon" className="icon vite" />
                <h3>Vite</h3>
            </section>
            <section>
                <FaReact className="icon react" />
                <h3>React</h3>
            </section>
        </section>
        
    </article>
  )
}