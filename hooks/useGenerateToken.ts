import {useMutation} from "@apollo/client";
import { GENERATE_TOKEN } from "../apollo/mutations/generateToken";
import { LOGIN_USER } from "../apollo/queries/loginUser";
import { useLoginUser } from "./useLoginUser";

interface TokenProps {
    email:String;
    password:String;
}

export const useGenerateToken = () => {
    const [generateToken, {data:token,loading,error}] = useMutation(GENERATE_TOKEN,{
      //  refetchQueries:[{query:LOGIN_USER}]
    });
    const {data:user} = useLoginUser();
   
    const handleLogin = async (values:TokenProps) => {
        const token = await generateToken({
            variables: {
                email: values.email,
                password: values.password
            }
        })
        localStorage.setItem("token", token.data.generateCustomerToken.token);
        console.log(user)

    };
    return {
        handleLogin,
        token,
        error,
        loading
    }

}