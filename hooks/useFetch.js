import { useState, useEffect } from "react";
import axios from 'axios'

const RapidApiKey=process.env.EXPO_PUBLIC_Rapid_API_Key

const useFetch =(endpoint,query)=>{
    const [data, setdata] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const options = {
        method: 'GET',
        url: `https://6140749a5cb9280017a112f3.mockapi.io/${endpoint}`,
        // headers: {
        //   'X-RapidAPI-Key': RapidApiKey,
        //   'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        // },
        // params: {...query},
      };

    const fetchData =async ()=>{
        setIsLoading(true);
    try{
        const res = await axios.request(options)
        setdata(res.data[0].data)
        setIsLoading(false)
    }catch(error){
        setError(error.message)
        console.log(error.message)
    } finally{
        setIsLoading(false)
    }
    }

    useEffect(()=>{
        fetchData();
    },[])
    const refetch=()=>{
        setIsLoading(true);
        fetchData();
    }

    return {data , isLoading,error,refetch}

    
}

export default useFetch;