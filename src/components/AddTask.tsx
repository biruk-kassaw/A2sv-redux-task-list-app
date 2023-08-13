import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  // submit event handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // dispaching an event to the redux store
    if (title) {
      dispatch(addTask({ id: Date.now(), title, completed: false }));
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 mb-10 text-center">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter a task..."
        className="lg:w-96 md:w-96 sm:64 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
      />
      <button type="submit" className="ml-2 bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600">Add Task</button>
    </form>
  );
};

export default AddTask;
