import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface NameState {
  firstName: string;
  lastName: string;
}

// Define the initial state using that type
const initialState: NameState = {
  firstName: "",
  lastName: "",
}

// Define a type for the payload
interface NamePayload {
  firstName: string;
  lastName: string;
}

const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<NamePayload>) => {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
  },
})

export const { setName } = nameSlice.actions
export default nameSlice.reducer
