import { createSlice } from "@reduxjs/toolkit";

const providerSlice = createSlice({
    name: "providers",
    initialState: {
        filters: {
            Rndrng_Prvdr_Zip5: "78745",
            Rndrng_Prvdr_Type: "Cardiology",
            HCPCS_Cd: "",
            Avg_Sbmtd_Chrg__gte: "",
            Avg_Sbmtd_Chrg__lte: ""
        }
    },
    reducers: {
        setFilter: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        resetFilters: (state) => {
            state.filters = {
                Rndrng_Prvdr_Zip5: "",
                Rndrng_Prvdr_Type: "",
                HCPCS_Cd: "",
                Avg_Sbmtd_Chrg__gte: "",
                Avg_Sbmtd_Chrg__lte: ""
            };
        }
    }
});

export const { setFilter, resetFilters } = providerSlice.actions;
export default providerSlice.reducer;
