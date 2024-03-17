import { configureStore } from "@reduxjs/toolkit";
import { getApiData } from "./service";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [getApiData.reducerPath]: getApiData.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(getApiData.middleware),
});

setupListeners(store.dispatch);