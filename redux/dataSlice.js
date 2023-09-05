import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: '',
    email: '',
    phone: '',
    plan: '',
    planType: '',
    addOns: [],
}

const dataSlice = createSlice({
    name: 'data', 
    initialState,
    reducers: {
        setContactInfo: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.phone = action.payload.phone
        },
        setPlan: (state, action) => {
            state.plan = action.payload
        },
        setPlanType: (state, action) => {
            if (action.payload){
                state.planType = 'Yearly'
            }
            else{
                state.planType = 'Monthly'
            }
        }, 
        setAddOns: (state, action) => {
            state.addOns = action.payload
        }
    }
})

export default dataSlice.reducer
export const {setContactInfo, setPlan, setPlanType, setAddOns} = dataSlice.actions