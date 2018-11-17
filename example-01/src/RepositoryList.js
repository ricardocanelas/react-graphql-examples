import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Loading from './components/Loading';

const GET_REPOSITORIES_OF_CURRENT_USER = gql`
  {
    viewer {
      repositories(
        first: 5
        orderBy: { direction: DESC, field: STARGAZERS }
      ) {
        edges {
          node {
            id
            name
            url
            descriptionHTML
            primaryLanguage {
              name
            }
            owner {
              login
              url
            }
            stargazers {
              totalCount
            }
            viewerHasStarred
            watchers {
              totalCount
            }
            viewerSubscription
          }
        }
      }
    }
  }
`;

const RepositoryItem = (props) => {
   const { name, stargazers, primaryLanguage, descriptionHTML } = props;

   return (
      <div className="card">
         <div className="card-title">
            {name} ({stargazers.totalCount} ⭐)
            <small>{primaryLanguage.name}</small>
         </div>
         <div className="card-body">
            <div
               className="RepositoryItem-description-info"
               dangerouslySetInnerHTML={{ __html: descriptionHTML }} />
         </div>

      </div>
   )
}

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
