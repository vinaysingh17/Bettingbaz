import { createSlice } from "@reduxjs/toolkit";

export const LiveMatch = createSlice({
  name: "counter",
  initialState: {
    liveMatch: [],
    cricketLiveMatch: [],
    basketballLiveMatch: [],
    tennisLiveMatch: [],
  },
  reducers: {
    // for football
    LiveMAtchList: (state, action) => {
      console.log(`${typeof action.payload}`, "<<<<action payload");
      state.liveMatch = action.payload;
    },

    CricketLiveMatchList: (state, action) => {
      console.log(`${typeof action.payload}`, "<<<<action payload");
      state.cricketLiveMatch = action.payload;
    },
    BasketBallMatchList: (state, action) => {
      console.log(`${typeof action.payload}`, "<<<<action payload");
      state.basketballLiveMatch = action.payload;
    },
    TennisMatchList: (state, action) => {
      console.log(`${typeof action.payload}`, "<<<<action payload");
      state.tennisLiveMatch = action.payload;
    },

    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const {
  LiveMAtchList,
  CricketLiveMatchList,
  BasketBallMatchList,
  TennisMatchList,
} = LiveMatch.actions;

export default LiveMatch.reducer;
