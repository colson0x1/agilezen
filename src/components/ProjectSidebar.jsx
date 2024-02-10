export default function ProjectSidebar() {
  return (
    <aside className='w-1/3 px-8 py-16 bg-blue-900 text-blue-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-blue-200'>
        Your Projects
      </h2>
      <div>
        <button className='px-4 py-2 text-xs md:text-base rounded-md bg-blue-700 text-blue-400 hover:bg-blue-600 hover:text-blue-100'>
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
