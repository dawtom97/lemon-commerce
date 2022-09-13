import {useMutation} from "@apollo/client";
import { GENERATE_TOKEN } from "../apollo/mutations/generateToken";
import { useLoginUser } from "./useLoginUser";

interface TokenProps {
    email:String;
    password:String;
}

export const useGenerateToken = () => {
    const [generateToken, {data,loading,error}] = useMutation(GENERATE_TOKEN);
    const {data:user} = useLoginUser();
   
    const handleLogin = async (values:TokenProps) => {
        const {data} = await generateToken({
            variables: {
                email: values.email,
                password: values.password
            }
        })
        localStorage.setItem("token", data.generateCustomerToken.token);
        console.log(user)

    };
    return {
        handleLogin,
        data,
        error,
        loading
    }

}