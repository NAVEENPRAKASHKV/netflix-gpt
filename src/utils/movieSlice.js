import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movie',
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null

    },
    reducers:{
        addNowPlayingMovie :(state,action)=>{
            state.nowPlayingMovies= action.payload
        },
        addTrailerVideo :(state,action)=>{
            state.trailerVideo= action.payload
        },
        addPopularMovie :(state,action)=>{
            state.popularMovies= action.payload
        }
        


    }
})

export const{addNowPlayingMovie,addTrailerVideo,addPopularMovie} =movieSlice.actions
export default movieSlice.reducer