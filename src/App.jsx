
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {

  return (
    <div className='min-h-screen '>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
