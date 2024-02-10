import Button from './Button';

export default function ProjectSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-blue-900 text-blue-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-blue-200'>
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map((project) => {
          let cssClasses =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-blue-200 hover:bg-blue-800';

          if (project.id === selectedProjectId) {
            cssClasses += ' bg-blue-800 text-blue-200';
          } else {
            cssClasses += ' text-blue-400';
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
