import { gql } from '@apollo/client';


export const REGISTER_USER = gql`

input RegisterUserObject {
   firstname:String 
   lastname: String 
   email: String 
   password: String
}

  mutation CreateCustomer($user: RegisterUserObject){
  createCustomer (user:$user) (
    input: {
      firstname: $user.firstname
      lastname: $user.lastname
      email: $user.email
      password: $user.password
    }
  ) {
    customer {
      firstname
      lastname
      email
    }
  }
}
`