import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        open:true, 
        videos:[],
        category:"All",
    },
    reducers:{
        toogleSidebar:(state)=>{
               state.open = !state.open;
        },
        setHomeVideos:(state,action)=>{
            state.videos = action.payload;
        },
        setCategory:(state,action)=>{
            state.category = action.payload;
        },
    }
})
export const {toogleSidebar,setHomeVideos,setCategory} = appSlice.actions;
export default appSlice;