import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);

      state.messages.unshift(action.payload);
    },
    // removeMessages:(state)=>{
    //     state.messages.pop()
    // }
  },
});

export default chatSlice.reducer;
export const { addMessages } = chatSlice.actions;
