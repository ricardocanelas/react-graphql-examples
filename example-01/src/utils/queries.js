import gql from 'graphql-tag';
import { REPOSITORY_FRAGMENT } from './fragments';

export const GET_CURRENT_USER = gql`
   {
      viewer {
         login
         namexyz
      }
   }
`

export const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  {
    viewer {
      repositories(
        first: 5
        orderBy: { direction: DESC, field: STARGAZERS }
      ) {
        edges {
          node {
            ...repository_fragment
          }
        }
      }
    }
  }

  ${REPOSITORY_FRAGMENT}
`;
