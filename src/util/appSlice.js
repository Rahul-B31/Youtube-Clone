import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:'app',
    initialState:{
        open:true, 
        videos:[],
        category:"All",
        searchSuggetion:[],
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
        setSearchSuggetion :(state,action)=>{
           state.searchSuggetion = action.payload;
        }
    }
})
export const {toogleSidebar,setHomeVideos,setCategory,setSearchSuggetion} = appSlice.actions;
export default appSlice;