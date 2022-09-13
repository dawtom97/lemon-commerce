import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../apollo/mutations/createUser";

interface UserProps {
    firstname: String;
    lastname: String;
    email: String;
    password: String;
}

export const useCreateUser = () => {
    const [createCustomer, { data, loading, error }] = useMutation(CREATE_USER);

    const handleSubmit = (
        values: UserProps,
    ) => {
        createCustomer({
            errorPolicy: "all",
            variables: {
                firstname: values.firstname,
                lastname: values.lastname,
                email: values.email,
                password: values.password,
            },
        });
    };

    return {
        handleSubmit,
        data,
        error,
        loading
    }
}