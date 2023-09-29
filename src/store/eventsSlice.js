import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getEvents = createAsyncThunk(
  "getEvents",
  async (state, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MAIN_URL}/events`
      );
      return data;
    } catch (error) {
      console.error(error);
      return rejectWithValue("error");
    }
  }
);

const eventsSlice = createSlice({
    name: "events",
    initialState: {
        events: [],
    },
    reducers: {},
    extraReducers: {
        [getEvents.pending] : (state, action) => {
console.log("loading...");
        },
        [getEvents.fulfilled] : (state, action) => {
            state.events = action.payload;
        },
        [getEvents.rejected] : (state, action) => {
            alert(`${action.payload}`);
        }
    }
})


export default eventsSlice.reducer;