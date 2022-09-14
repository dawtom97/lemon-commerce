import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../apollo/mutations/createUser";
import { GENERATE_TOKEN } from "../apollo/mutations/generateToken";

interface UserProps {
    firstname: String;
    lastname: String;
    email: String;
    password: String;
}

export const useCreateUser = () => {
    const [createCustomer, { data, loading, error }] = useMutation(CREATE_USER);
    const [generateToken] = useMutation(GENERATE_TOKEN);

    const createUser = async (
        values: UserProps,
    ) => {
        await createCustomer({
            errorPolicy: "all",
            variables: {
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
                password: values.password,
            },
        });
        const res = await generateToken({
            variables: {
                email: values.email,
                password: values.password
            }
        })
        localStorage.setItem("token", res.data.generateCustomerToken.token);
        console.log(res);
    };

    return {
        createUser,
        data,
        error,
        loading
    }
}