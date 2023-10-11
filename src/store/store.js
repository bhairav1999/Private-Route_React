import { configureStore } from "@reduxjs/toolkit"; 
import authenticationReducer from '../feautres/AuthSlice'


const store =configureStore({
 reducer :{
    authentication:authenticationReducer,
 }
})

export default store