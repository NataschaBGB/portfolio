import Header from './components/Header/Header.jsx'
import Introduction from './components/Introduction/Introduction.jsx'
import Competencies from './components/Competencies/Competencies.jsx'
import Projects from './components/Projects/Projects.jsx'

export default function App() {

  return (
    <main className='portfolio'>
        <Header />
        <Introduction />
        <Competencies />
        <Projects />
    </main>
  )
}