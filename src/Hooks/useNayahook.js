import { useState,useEffect } from "react";
import axios from "axios";
import React from 'react'

 const useNayahook = (url) =>  {
    const [dataFromApi,setDataFromApi]= useState([]);
    useEffect(()=>{
        getData();
    },[]);

    const getData =async()=>{
       let data = await axios.get(url).then((coming)=>{
            setDataFromApi(coming.data);
        }).error((err)=>{console.log("err",err)});
    }
     
    return dataFromApi;
}
export  {useNayahook};