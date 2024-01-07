import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from './Slices/AuthSliceReducer';
const store=configureStore({
    reducer:{
        auth:authSliceReducer
    },
    devTools:true


});
export default store;