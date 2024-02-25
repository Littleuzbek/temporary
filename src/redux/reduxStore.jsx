import { configureStore } from "@reduxjs/toolkit";
import SavatSlice from './SavatSlice'

const reduxStore = configureStore({
    reducer:{
        savat: SavatSlice.reducer
    }
})

export default reduxStore