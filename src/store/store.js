import { configureStore } from '@reduxjs/toolkit';
import { providerSearch } from '../api/filterApi';
// import productReducer from './slices/productSlice';
import providerReducer from './slices/providerSlice'
export const store = configureStore({
    reducer: {
        providerSearch: providerReducer
    },
    devTools: true
});

export default store
