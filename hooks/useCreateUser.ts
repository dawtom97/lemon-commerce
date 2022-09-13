import { useMutation } from "@apollo/client";
import { FormikHelpers } from "formik";
import { CREATE_USER } from "../apollo/mutations/createUser";

interface UserProps {
    firstname: String;
    lastname: String;
    email: String;
    password: String;
}

interface InitialValuesProps {
    firstname: String | any;
    lastname: String;
    email: String;
    password: String;
    confirmPassword: String;
}

export const useCreateUser = () => {
    const [createCustomer, { data, loading, error }] = useMutation(CREATE_USER);

    const handleSubmit = (
        values: UserProps,
        actions: FormikHelpers<InitialValuesProps>
    ) => {
        console.log(actions)
        try {
            createCustomer({
                variables: {
                    firstname: values.firstname,
                    lastname: values.lastname,
                    email: values.email,
                    password: values.password,
                },
            });
            console.log(data);
        } catch (error) {
            console.log(error)
        }

    };

    return {
        handleSubmit,
        data,
        error,
        loading
    }
}