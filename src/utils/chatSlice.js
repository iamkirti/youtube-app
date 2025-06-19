import { createSlice } from "@reduxjs/toolkit";


const chatSlice=createSlice({
    name:"chat",
    initialState:{
        messages:[]
    },
    reducers:{
        addMessages:(state,action)=>{
            state.messages.push(action.payload)

        },
        // removeMessages:(state)=>{
        //     state.messages.pop()
        // }
    }
})

export default chatSlice.reducer;
export const {addMessages}=chatSlice.actions;