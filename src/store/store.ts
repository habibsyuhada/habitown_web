import { configureStore } from '@reduxjs/toolkit';  
import exampleReducer from './exampleSlice'; // Import reducer dari slice  

const store = configureStore({  
  reducer: {  
    example: exampleReducer, // Tambahkan reducer ke store  
  },  
});  

// Tipe untuk RootState dan AppDispatch  
export type RootState = ReturnType<typeof store.getState>;  
export type AppDispatch = typeof store.dispatch;  

export default store;  
