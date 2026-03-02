import newsify_logo from '../../assets/newsify_logo.png'
import pd_logo from '../../assets/pd_logo.png'
import pet_finder_logo from '../../assets/animal.svg'
import pokedex_logo from '../../assets/pokedex_logo.png'
import hifi_horizon_logo from '../../assets/hifi_horizon_logo.png'
import './Projects.sass'

export default function Projects() {

  return (
    <section className='projects'>
        <h2>Projects</h2>
        
        <div className='projects__wrapper'>
            
            <article className='projects__project'>
                <img src={pd_logo} alt="projects__project-image" />
                <div className='projects__project-description'>
                    <a href="https://potebandensdyreservice.dk/index.php" target="_blank">Potebandens Dyreservice</a>
                    <p className='text'>Project description</p>
                </div>
            </article>
        
            <article className='projects__project'>
                <img src={newsify_logo} alt="projects__project-image" />
                <div className='projects__project-description'>
                    <a href="https://rts-cmk.github.io/projekt-newsify-NataschaBGB/" target="_blank" className='projects__live-link'>Newsify App</a>
                    <p className='text'>Project description</p>
                    <p>Build for use on phone</p>
                </div>
            </article>
        
            <article className='projects__project'>
                <img src={pet_finder_logo} alt="projects__project-image" />
                <div className='projects__project-description'>
                    <a href="https://rts-cmk.github.io/pet-finder-NataschaBGB/" target="_blank" className='projects__live-link'>Pet Finder App</a>
                    <p className='text'>Project description</p>
                    <p>Build for use on phone</p>
                </div>
            </article>
        
            <article className='projects__project'>
                <img src={pokedex_logo} alt="projects__project-image" />
                <div className='projects__project-description'>
                    <a href="https://nataschabgb.github.io/" target="_blank" className='projects__live-link'>Pokédex</a>
                    <p className='text'>Project description</p>
                </div>
            </article>
        
            <article className='projects__project'>
                <img src={hifi_horizon_logo} alt="projects__project-image" />
                <div className='projects__project-description'>
                    <a href="https://natascha-hifi-horizon-rk7o.onrender.com/" target="_blank" className='projects__live-link'>Hifi Horizon</a>
                    <p className='text'>Project description</p>
                </div>
            </article>
        
        </div>
    </section>
  )
}