import { Navbar } from "./components/Navbar"
import { Hero } from "./sections/Hero"
import { Projects } from "./sections/Projects"
import { Skills } from "./sections/Skills"
import { Contact } from "./sections/Contact"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <main class="pt-20">
        <Hero></Hero>
        <Projects></Projects>
        <Skills></Skills>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </>
  )
}

export default App
