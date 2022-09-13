import {string,number,mixed,object,ref} from 'yup'


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const registerSchema = object().shape({
    firstname:string().required("Required"),
    lastname:string().required("Required"),
    email:string().email("Please enter a valid email").required("Required"),
    password: string().min(5).matches(passwordRules, {message:"Please create a stronger password"}).required("Required"),
    confirmPassword: string().oneOf([ref('password'), null]),

})
