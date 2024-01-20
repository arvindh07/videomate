import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        homeVideos: null,
        playingVideoChannel: null
    },
    reducers: {
        setHomeVideos: (state, action) => {
            state.homeVideos = action.payload
        },
        setPlayingVideoChannel: (state, action) => {
            state.playingVideoChannel = action.payload
        },
    }
})

export const videoActions = videoSlice.actions;
export default videoSlice.reducer;