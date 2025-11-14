import projects from '../../assets/projects.png'
import './Introduction.sass'

export default function Introduction() {

  return (
    <article className='portfolio__introduction'>
        <h2>Hello!</h2>

        <section className='portfolio__introduction-text'>
          
          <section>
            <p>I’m Natascha Bjerning — a passionate web developer based in Brøndby, Denmark, with a strong focus on front-end development.</p>
            
            <p>I love turning ideas into beautiful, engaging, and purposeful digital experiences.</p>

            <p>Working at the intersection of design and technology inspires me; it’s where creativity meets clean, meaningful code.</p>
          
            <p>I’m approachable, curious, and always open to exploring new areas within development. With a keen eye for detail and a creative mindset, I enjoy diving deep into challenges — bringing both structure and imagination to my work.</p>
            
            <p>My curiosity keeps me exploring new tools, trends, and technologies in the fast-moving web world. I’m always learning, growing, and refining my craft to become a more versatile developer.</p>
            
            <p>Whether it’s building something new or improving what already exists, my goal is to create modern, responsive, and thoughtful websites that connect with people.</p>
          </section>

          <img src={projects} alt="portfolio__introduction-image" />
        
        </section>
        
    </article>
  )
}