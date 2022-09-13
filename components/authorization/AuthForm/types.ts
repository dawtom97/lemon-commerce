export interface AuthProps {
    isRegister: boolean;
}

export interface InitialValuesProps {
    firstname: String | any;
    lastname: String;
    email: String;
    password: String;
    confirmPassword: String;
}

export interface InitialLoginProps {
    email:String;
    password:String
}