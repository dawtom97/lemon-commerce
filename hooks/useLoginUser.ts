import { useLazyQuery} from "@apollo/client"
import { useEffect, useState } from "react";
import { LOGIN_USER } from "../apollo/queries/loginUser"


export const useLoginUser = () => {
    const [getUser,{data,loading,error}] = useLazyQuery(LOGIN_USER);
    const [token,setToken] = useState<any>();

    useEffect(()=>{
       setToken(localStorage.getItem("token"));
       if(token) getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[token])

    return {
        getUser,
        data,
        loading,
        error
    }
}