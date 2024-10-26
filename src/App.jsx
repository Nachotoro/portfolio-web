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
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'GraphQL',
  ];

  return (
    <div>
      <Navbar />
      <Gif />
      <Webdeveloper />
      <Marquee items={skills} speed={18} />
      <TitleProjects></TitleProjects>
    </div>
  );
}

export default App;