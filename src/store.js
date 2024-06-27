import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./slice/menuSlice"
import ToolReducer from "./slice/toolSlice"

export const store = configureStore({
    reducer: {
        menu: MenuReducer,
        toolbox: ToolReducer,
    },
})