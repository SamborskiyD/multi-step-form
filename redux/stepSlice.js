import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    stepNum: 1
}

const stepSlice = createSlice({
    name: 'step', 
    initialState,
    reducers: {
        nextStep: (state) => {
            if (state.stepNum < 5){
                state.stepNum++
            }
        },
        prevStep: (state) => {
            if (state.stepNum > 1){
                state.stepNum--
            }
        },
        setStep: (state, action) => {
            state.stepNum = action.payload
        }

    }
})

export default stepSlice.reducer
export const {nextStep, prevStep, setStep} = stepSlice.actions