import Button from './Button';

export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-blue-900 text-blue-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-blue-200'>
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
