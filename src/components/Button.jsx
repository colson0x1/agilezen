export default function Button({ children, ...props }) {
  return (
    <button
      className='px-4 py-2 text-xs md:text-base rounded-md bg-blue-700 text-blue-400 hover:bg-blue-600 hover:text-blue-100'
      {...props}
    >
      {children}
    </button>
  );
}
