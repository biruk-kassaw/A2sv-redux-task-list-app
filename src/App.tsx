import React from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';


const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4 border mt-5">
      <h1 className="text-3xl font-bold mb-12 text-center text-green-600">Redux Task List</h1>
      <AddTask />
      <TaskList />
    </div>
  )
}

export default App
