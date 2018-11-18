import React from 'react'
import { Query } from 'react-apollo'
import Loading from './UI/Loading';
import RepositoryItem from './RepositoryItem'
import { GET_REPOSITORIES_OF_CURRENT_USER } from '../utils/queries';

const RepositoryList = (props) => {

   return (
      <div>
         <Query query={GET_REPOSITORIES_OF_CURRENT_USER}>
            {({ data, loading }) => {

               const { viewer } = data;

               if (loading || !viewer) {
                  return (
                     <Loading />
                  )
               }

               return (
                  <div>
                     {viewer.repositories.edges.map(item => (
                        <RepositoryItem key={item.node.id} {...item.node} />
                     ))}
                  </div>
               )
            }}
         </Query>
      </div>
   )
}

export default RepositoryList
