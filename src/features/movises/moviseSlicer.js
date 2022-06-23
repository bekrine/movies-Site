import{createSlice ,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMovise=createAsyncThunk('movises/fetchMovise',async()=>{
    try {
        const respance=await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.API-KEY}`)
        return respance
    } catch (error) {
        return error.message
    }
})



const initialState={
    movise:[],
    status:'idle',
    error:null
}


const moviseSlicer=createSlice({
    name:"movises",
    initialState,
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(fetchMovise.pending,(state,action)=>{
            state.status='loading'
        }).addCase(fetchMovise.fulfilled,(state,action)=>{
            state.status='succeeded'
            
        }).addCase(fetchMovise.rejected,(state,action)=>{
            state.status='failed'
            state.error=action.error.message
        })
    }
})