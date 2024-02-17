import {configureStore} from '@reduxjs/toolkit'
import appSlice from './appSlice';
import chatSlice from './chatSlice';

const store = configureStore({
     reducer :{
         app:appSlice.reducer,
         chat:chatSlice.reducer,
     },
     devTools:true
})


export default store;