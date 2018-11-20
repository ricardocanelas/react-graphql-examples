import React from 'react'
import { Query } from 'react-apollo'
import Loading from './UI/Loading';
import FetchMore from './UI/FetchMore';
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

               if (!viewer.repositories.edges.length) {
                  return <div>No repositories found</div>
               }

               return (
                  <div>
                     {viewer.repositories.edges.map(item => (
                        <RepositoryItem
                           key={item.node.id}
                           {...item.node} />
                     ))}

                     <FetchMore
                        loading={loading}
                        hasNextPage={viewer.repositories.pageInfo.hasNextPage}
                        variables={{
                           cursor: viewer.repositories.pageInfo.endCursor
                        }}
                        updateQuery={updateQuery}
                        fetchMore={fetchMore}
                     >
                        More Repositories
                     </FetchMore>
                  </div>
               )
            }}
         </Query>
      </div>
   )
}

export default RepositoryList
