import GreeterPage from './sections/greeter';
import AboutPage from './sections/AboutPage';
import ProjectsPage from './sections/ProjectsPage';
import FadeSection from './sections/FadeSection';
import './App.css';

function App() {
  return (
    <>
      <GreeterPage />
      <AboutPage />
      <FadeSection from="var(--color-primary)" to="var(--color-dark-background)"/>
      <ProjectsPage />
    </>
  );
}

export default App;