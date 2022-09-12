import {string,number,mixed,object,ref} from 'yup'


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = object().shape({
    // email:string().email("Please enter a valid email").required("Required"),
    // age: number().positive().integer("Age must be a number").required("Required"),
    // password: string().min(5).matches(passwordRules, {message:"Please create a stronger password"}).required("Required"),
    // confirmPassword: string().oneOf([ref('password'), null]),


    money:mixed().when("millionaire",{
        is:true,
        then: number().required("This field is required").min(1_000_000, "You need 1 million"),
        otherwise: number().required("This field is required")
    })
})