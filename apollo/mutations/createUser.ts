import { gql } from '@apollo/client';

export const CREATE_USER = gql`
  mutation CreateCustomer($firstname: String!, $lastname:String!,$email:String!, $password:String!) {
  createCustomer(
    input: {
      firstname: $firstname
      lastname: $lastname
      email: $email
      password: $password
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