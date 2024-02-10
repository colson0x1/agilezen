import { forwardRef } from 'react';

const classes =
  'w-full p-1 border-b-2 rounded-sm border-blue-300 bg-blue-200 text-blue-600 focus:outline-none focus:border-blue-600';

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  return (
    <p className='flex flex-col gap-1 my-4'>
      <label className='text-sm font-bold upercase text-blue-500'>
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
