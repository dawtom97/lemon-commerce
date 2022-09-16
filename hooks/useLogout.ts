import { useApolloClient } from "@apollo/client";

export const useLogout = () => {
    const client = useApolloClient();

    console.log(client)

    const logout = () => {
        client.cache.reset()
        localStorage.setItem("token", "");
    }

    return {
        logout
    }
}