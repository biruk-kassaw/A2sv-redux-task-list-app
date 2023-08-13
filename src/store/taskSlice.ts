import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// defining a task interface or model
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// creating a slice
const taskSlice = createSlice({
  name: 'tasks',
  initialState: [] as Task[],
  reducers: {
    // defining add task reducer
    addTask: (state, action: PayloadAction<Task>) => {
      state.push(action.payload);
    },
    // defining update task reducer
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    // defining remove task reducer 
    removeTask: (state, action: PayloadAction<number>) => {
      return state.filter(task => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
