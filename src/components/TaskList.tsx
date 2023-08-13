import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask, removeTask, Task } from '../store/taskSlice';
import { RootState } from '../store/store';

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTask, setEditedTask] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  // completed task toggle handler
  const toggleTaskStatus = (task: Task) => {
    dispatch(updateTask({ ...task, completed: !task.completed }));
  };
  // delete task handler
  const deleteTask = (id: number) => {
    dispatch(removeTask(id));
  };
  // editing task handler
  const startEditing = (id: number, title: string) => {
    setEditingTaskId(id);
    setEditedTask(title);
  };
  // finished editing handler 
  const finishEditing = (task: Task) => {
    dispatch(updateTask({ ...task, title: editedTask }));
    setEditingTaskId(null);
  };

  // task filter based on status
  const filteredTasks = showCompleted ? tasks.filter(task => task.completed) : tasks;

  return (
    <div>
      <div className="mb-2">
        <button className="text-green-600 mr-2" onClick={() => setShowCompleted(!showCompleted)}>
          {showCompleted ? 'Show All Tasks' : 'Show Completed Tasks'}
        </button>
      </div>

      {filteredTasks.map(task => (
        <div
          key={task.id}
          className={`flex items-center justify-between p-2 border-b mb-4 bg-white rounded-lg border ${
            task.completed ? 'bg-gray-200' : ''
          }`}
        >
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskStatus(task)}
            className="mr-2"
          />
          {editingTaskId === task.id ? (
            <input
              type="text"
              value={editedTask}
              onChange={e => setEditedTask(e.target.value)}
            />
          ) : (
            <div
              className={`ml-2 cursor-pointer ${task.completed ? 'line-through' : ''}`}
              onClick={() => toggleTaskStatus(task)}
            >
              {task.title}
            </div>
          )}
        </div>
        <div>
          {editingTaskId === task.id ? (
            <button
              className="text-green-600 mr-2"
              onClick={() => finishEditing(task)}
            >
              Save
            </button>
            ) : (
            <button
              className="text-green-600 mr-2"
              onClick={() => startEditing(task.id, task.title)}
            >
              Edit
            </button>
          )}
          <button className="text-red-600" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
  );
};

export default TaskList;
