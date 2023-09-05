import { configureStore } from "@reduxjs/toolkit"
import stepReducer from "./stepSlice"
import dataReducer from "./dataSlice"

const store = configureStore({

    reducer: {
        step: stepReducer,
        data: dataReducer
    },
})

export default store