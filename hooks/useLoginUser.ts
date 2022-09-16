import { useLazyQuery} from "@apollo/client"
import { useEffect, useState } from "react";
import { LOGIN_USER } from "../apollo/queries/loginUser"


export const useLoginUser = () => {
    const [getUser,{data,loading,error}] = useLazyQuery(LOGIN_USER,{
       // pollInterval: 1,
     
    });
    const [token,setToken] = useState<any>();

    useEffect(()=>{
       setToken(localStorage.getItem("token"));
       if(token) getUser();

    },[token, loading, getUser])

    return {
        getUser,
        data,
        loading,
        error
    }
}