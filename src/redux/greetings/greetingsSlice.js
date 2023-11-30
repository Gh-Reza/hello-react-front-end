import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchGreeting = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    const response = await fetch('http://localhost:3000/api/v1/random_greeting');
    const data = await response.json();
    return data.greeting;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: null,
    status: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.greeting = action.payload;
      })
      .addCase(fetchGreeting.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default greetingsSlice.reducer;
