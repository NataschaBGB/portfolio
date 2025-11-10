import newsify_logo from '../../assets/newsify_logo.png'
import pd_logo from '../../assets/pd_logo.png'
import './Projects.sass'

export default function Projects() {

  return (
    <section className='portfolio__projects'>
    <h2>Projects</h2>
    <div className='portfolio__projects-wrapper'>
        <article className='portfolio__project'>
            <img src={pd_logo} alt="portfolio__project-image" />
            <div className='portfolio__project-description'>
                <h3>Potebandens Dyreservice</h3>
                <p>Project description</p>
                <a href="https://potebandensdyreservice.dk/index.php" target="_blank" className='portfolio__live-link'>Watch it live</a>
            </div>
        </article>
        <article className='portfolio__project'>
            <img src={newsify_logo} alt="portfolio__project-image" />
            <div className='portfolio__project-description'>
                <h3>Newsify App</h3>
                <p>Project description</p>
                <a href="https://rts-cmk.github.io/projekt-newsify-NataschaBGB/" target="_blank" className='portfolio__live-link'>Watch it live</a>
            </div>
        </article>
    </div>
    </section>
  )
}