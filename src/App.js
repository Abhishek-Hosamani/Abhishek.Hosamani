import './App.css';
import ProjectCard from './components/ProjectCard';
import Navabar from './components/navabar';

import { Projects } from './components/Details';
import Skillbox from './components/Skillbox';
import { skillset } from './components/Details';
function App() {

  const headingstyles = `text-base sm:text-xl font-semibold my-6 text-center underline underline-offset-4`
  return (
    <>
      <div className='mx-8'>
        <Navabar />
        <h2 className={headingstyles}>
          My Projects
        </h2>
        <div className='flex flex-col sm:flex-row flex-wrap justify-around ml-4'>

          {Projects.map((item) => {

            return (
              <div className='sm:mx-8 mt-4 sm:mt-0'>
                <ProjectCard tech={item.TechStack} ProjName={item.ProjectName} img={item.CoverImage} link={item.repolink} />
              </div>
            )
          })}
        </div>

        <div>
          <h2 className={headingstyles}>What I Know</h2>

          <div className='flex flex-wrap justify-center'>
            {skillset.map((item, ind) => {
              return (
                <Skillbox index={ind} skills={item.skills} type={item.type} />
              )
            }
            )}
          </div>
        </div>
      </div>

    </>
  );
}

export default App;

