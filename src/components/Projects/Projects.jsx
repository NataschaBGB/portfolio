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
                <a href="https://potebandensdyreservice.dk/index.php" target="_blank">
                    <img src={pd_logo} alt="projects__project-image" />
                    <div className='projects__project-description'>
                        <h3>Potebandens Dyreservice</h3>
                        <p className='text'>I made this project for a local pet service company in 2025.<br/>
                        Since they didn’t have a website beforehand, I used a flyer and a business card as my starting point. From there, I extracted color codes and design elements to create a modern and user-friendly website.<br/>
                        Behind the public-facing interface, I created and designed an intuitive admin panel where they can create, edit, and delete content. A database is connected to the system, where all content is stored and accessible through the admin panel.<br/>
                        The website is build with HTML, SCSS, jQuery, PHP and SQL.</p>
                    </div>
                </a>
                
            </article>
        
            <article className='projects__project'>
                <a href="https://rts-cmk.github.io/projekt-newsify-NataschaBGB/" target="_blank" className='projects__live-link'>
                    <img src={newsify_logo} alt="projects__project-image" />
                    <div className='projects__project-description'>
                        <h3>Newsify App</h3>
                        <p className='text'>This is a news app made as a project for school.<br/>
                        It fetches news from the New York Times API and displays it in a responsive layout.<br/>
                        The app is built with Vite, React and SASS.</p>
                        <p>The app is built for use on mobile devices.</p>
                    </div>
                </a>
            </article>
        
            <article className='projects__project'>
                <a href="https://rts-cmk.github.io/pet-finder-NataschaBGB/" target="_blank" className='projects__live-link'>
                    <img src={pet_finder_logo} alt="projects__project-image" />
                    <div className='projects__project-description'>
                        <h3>Pet Finder App</h3>
                        <p className='text'>This is a pet finder app made as a project for school.<br/>
                        It uses an API I set up myself, to display information about pets available for adoption.<br/>
                        The app is built with Vite, React and SASS.</p>
                        <p>The app is built for use on mobile devices.</p>
                    </div>
                </a>
            </article>
        
            <article className='projects__project'>
                <a href="https://nataschabgb.github.io/" target="_blank" className='projects__live-link'>
                    <img src={pokedex_logo} alt="projects__project-image" />
                    <div className='projects__project-description'>
                        <h3>Pokédex</h3>
                        <p className='text'>This is a Pokédex app made as a project for school.<br/>
                        It uses the PokeAPI to display information about every Pokémon.<br/>
                        The design is inspired by the original Pokédex from the Pokémon games.<br/>
                        The app is built with HTML, CSS and JavaScript.</p>
                    </div>
                </a>
            </article>
        
            <article className='projects__project'>
                <a href="https://natascha-hifi-horizon-rk7o.onrender.com/" target="_blank" className='projects__live-link'>
                    <img src={hifi_horizon_logo} alt="projects__project-image" />
                    <div className='projects__project-description'>
                        <h3>Hifi Horizon</h3>
                        <p className='text'>This is a Hifi Horizon app made as a project for school.<br/>
                        It uses a custom-built API, created from scratch with JSON Server and deployed on Render for public access, to fetch and display hi-fi products.<br/>
                        The app is built with Vite, React, SASS and json server.</p>
                    </div>
                </a>
            </article>
        
        </div>
    </section>
  )
}