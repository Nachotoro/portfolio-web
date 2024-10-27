import Navbar from './components/Navbar';
import './styles/navbar.css';
import Gif from './components/Gif';
import './styles/gif.css';
import Webdeveloper from './sections/Webdeveloper';
import Marquee from './components/Marquee'; // Asegúrate de importar Marquee
import TitleProjects from './sections/TitleProjetcs';
import './styles/projects.css';


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
      <TitleProjects></TitleProjects>
    </div>
  );
}

export default App;