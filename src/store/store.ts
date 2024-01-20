import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import videoSlice from "./slices/videoSlice";
import cacheSlice from "./slices/cacheSlice";

const store = configureStore({ 
    reducer: {
        app: appSlice,
        video: videoSlice,
        cache: cacheSlice
    }
});

export type StoreType = ReturnType<typeof store.getState>
export default store;