import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        setSearchResults: (state, action) => {
            return {...action.payload, ...state};
        }
    }
})

export const searchActions = cacheSlice.actions;
export default cacheSlice.reducer;
