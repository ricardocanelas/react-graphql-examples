import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';

const GET_CURRENT_USER = gql`
   {
      viewer {
         login
         namexyz
      }
   }
`

const Profile = (props) => {

   return (
      <div>
         <Query query={GET_CURRENT_USER}>
            {({ data, loading, error }) => {

               if (error) {
                  return <ErrorMessage error={error} />;
               }


               const { viewer } = data;

               if (loading || !viewer) {
                  return (
                     <Loading/>
                  )
               }

               return (
                  <div>
                     <b>Name: </b>{viewer.name}<br/>
                     <b>Username: </b>{viewer.login}
                  </div>
               )
            }}
         </Query>
      </div>
   )
}

export default Profile
