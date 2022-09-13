import {string,number,mixed,object,ref} from 'yup'


const passwordRules = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/;
const letterRules = /[A-Za-z]/

export const registerSchema = object().shape({
    firstname:string().matches(letterRules,{message:"First Name should have only letters"}).required("Required"),
    lastname:string().matches(letterRules,{message:"Last Name should have only letters"}).required("Required"),
    email:string().email("Please enter a valid email").required("Required"),
    password: string().min(5).matches(passwordRules, {message:"Please create a stronger password"}).required("Required"),
    confirmPassword: string().oneOf([ref('password'), null]).required("Required"),
})

export const loginSchema = object().shape({
    email:string().email("Please enter a valid email").required("Required"),
    password: string().required("Required"),
})