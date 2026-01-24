import newsify_logo from '../../assets/newsify_logo.png'
import pd_logo from '../../assets/pd_logo.png'
import pet_finder_logo from '../../assets/animal.svg'
import pokedex_logo from '../../assets/pokedex_logo.png'
import hifi_horizon_logo from '../../assets/hifi_horizon_logo.png'
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
                    <p>Build for use on phone</p>
                    <a href="https://rts-cmk.github.io/projekt-newsify-NataschaBGB/" target="_blank" className='portfolio__live-link'>Watch it live</a>
                </div>
            </article>
            <article className='portfolio__project'>
                <img src={pet_finder_logo} alt="portfolio__project-image" />
                <div className='portfolio__project-description'>
                    <h3>Pet Finder App</h3>
                    <p>Project description</p>
                    <p>Build for use on phone</p>
                    <a href="https://rts-cmk.github.io/pet-finder-NataschaBGB/" target="_blank" className='portfolio__live-link'>Watch it live</a>
                </div>
            </article>
            <article className='portfolio__project'>
                <img src={pokedex_logo} alt="portfolio__project-image" />
                <div className='portfolio__project-description'>
                    <h3>Pokédex</h3>
                    <p>Project description</p>
                    <a href="https://nataschabgb.github.io/" target="_blank" className='portfolio__live-link'>Watch it live</a>
                </div>
            </article>
            <article className='portfolio__project'>
                <img src={hifi_horizon_logo} alt="portfolio__project-image" />
                <div className='portfolio__project-description'>
                    <h3>Hifi Horizon</h3>
                    <p>Project description</p>
                    <a href="https://natascha-hifi-horizon-rk7o.onrender.com/" target="_blank" className='portfolio__live-link'>Watch it live</a>
                </div>
            </article>
        </div>
    </section>
  )
}