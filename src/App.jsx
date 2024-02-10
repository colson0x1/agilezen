import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectSidebar from './components/ProjectSidebar';
import SelectedProject from './components/SelectedProject';

/*
 * <NewProject /> component state is lifted to the <App /> component.
 * App component has access to the <NewProject /> component where the data is
 * generated and the state change will be initiated, and the <ProjectSidebar />
 * component where the data is needed thereafter.
 * */
function App() {
  // selectedProjectId prop is either used to store id of the project that
  // was selected from multiple projects, OR null if we want to add
  // a new project OR undefined if we are not adding a new project and also
  // did not select any project
  // In this context: undefined means nothing, null means adding a project
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  // start adding process
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  // finish adding process
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // console.log(projectsState);

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  let content = <SelectedProject project={selectedProject} />;

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
