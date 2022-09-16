import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  query LoginUser {
  customer {
    firstname
    lastname
    suffix
    email
    addresses {
      firstname
      lastname
      street
      city
      region {
        region_code
        region
      }
      postcode
      country_code
      telephone
    }
  }
} 
`