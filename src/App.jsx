import Navbar from './components/Navbar';
import './styles/navbar.css';
import Gif from './components/Gif';
import './styles/gif.css';
import Webdeveloper from './sections/Webdeveloper';
import Marquee from './components/Marquee'; // Asegúrate de importar Marquee
import TitleProjects from './sections/TitleProjetcs';
import './styles/projects.css';
import Footer from './sections/Footer';
import AboutMe from './sections/AboutMe';


function App() {
  const skills = [
    'Design', '🌐', '3D artist', '🖌️', 'Branding', '📊', 'Javascript', '👨🏽‍💻', 'Figma', '☕', 'Node.js', '💻', 'Design', '🌐', '3D artist', '🖌️', 'Branding', '📊', 'Javascript', '👨🏽‍💻', 'Figma', '☕', 'Node.js', '💻'
  ];

  return (
    <div>
      <Navbar />
      <Gif />
      <Webdeveloper />
      <Marquee items={skills} speed={24} />
      <TitleProjects title={"About me"}></TitleProjects>
      <AboutMe></AboutMe>
      <TitleProjects title={"Projects"}></TitleProjects>


      <Footer></Footer>
    </div>
  );
}

export default App;