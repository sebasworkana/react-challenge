import {createSlice} from '@reduxjs/toolkit';
import {processInput} from "../thunks";


const initialState  = {

    working: false,
    result: []
};


const applicationSlice = createSlice({

    name: 'applicationSlice',
    initialState,
    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(processInput.pending, (state, action) => {

            state.working = true;

        });

        builder.addCase(processInput.fulfilled, (state, action) => {

            state.working = false;

            state.result = action.payload;

        });

    }

});


export default  applicationSlice.reducer;
