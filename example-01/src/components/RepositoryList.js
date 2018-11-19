import React from 'react'
import { Query } from 'react-apollo'
import Loading from './UI/Loading';
import RepositoryItem from './RepositoryItem'
import { GET_REPOSITORIES_OF_CURRENT_USER } from '../utils/queries';

// needed to tell Apollo Client how to merge the previous result with a new one.
const updateQuery = (previousResult, { fetchMoreResult }) => {
   if (!fetchMoreResult) {
      return previousResult;
   }

   return {
      ...previousResult,
      viewer: {
         ...previousResult.viewer,
         repositories: {
            ...previousResult.viewer.repositories,
            ...fetchMoreResult.viewer.repositories,
            edges: [
               ...previousResult.viewer.repositories.edges,
               ...fetchMoreResult.viewer.repositories.edges,
            ],
         },
      },
   };
}

const RepositoryList = (props) => {

   return (
      <div>
         <Query
            query={GET_REPOSITORIES_OF_CURRENT_USER}
            notifyOnNetworkStatusChange={true}
         >
            {({ data, loading, fetchMore }) => {
               const { viewer } = data;

               if (loading && !viewer) {
                  return (
                     <Loading />
                  )
               }

               return (
                  <div>
                     {viewer.repositories.edges.map(item => (
                        <RepositoryItem
                           key={item.node.id}
                           {...item.node} />
                     ))}

                     {loading && (
                        <Loading />
                     )}

                     {viewer.repositories.pageInfo.hasNextPage && (
                        <button onClick={() => fetchMore({
                           variables: {
                              cursor: viewer.repositories.pageInfo.endCursor,
                           },
                           updateQuery: updateQuery,
                        })}>
                           More Repositories
                        </button>
                     )}

                  </div>
               )
            }}
         </Query>
      </div>
   )
}

export default RepositoryList
