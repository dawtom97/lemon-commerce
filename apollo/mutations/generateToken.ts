import { gql } from '@apollo/client';

export const GENERATE_TOKEN = gql`
  mutation ($email: String!, $password: String!) {
  generateCustomerToken(
      email: $email
      password: $password
  ) {
    token
  }
}
`