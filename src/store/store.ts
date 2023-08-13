import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';

// configure the store
const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;