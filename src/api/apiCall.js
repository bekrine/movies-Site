import axios from "axios"
export const getMovise= async()=>{
    try {
        const respance=await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${process.env.API-KEY}`)
        return respance
    } catch (error) {
        console.log(error)
    }
}

