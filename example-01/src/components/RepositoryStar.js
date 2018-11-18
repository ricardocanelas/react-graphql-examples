import React from 'react'
import { Mutation } from 'react-apollo';
import { REPOSITORY_FRAGMENT } from '../utils/fragments';

import {
   STAR_REPOSITORY,
   UNSTAR_REPOSITORY,
 } from '../utils/mutations';

const updateAddStar = (client, mutationResult) => {
   const { data: { addStart: { starrable: { id } } } } = mutationResult;
   const repository = client.readFragment({
      id: `Repository:${id}`,
      fragment: REPOSITORY_FRAGMENT
   })
   const totalCount = repository.stargazers.totalCount + 1;

   client.writeFragment({
      id: `Repository:${id}`,
      fragment: REPOSITORY_FRAGMENT,
      data: {
         ...repository,
         stargazers: {
            ...repository.stargazers,
            totalCount
         }
      }
   })
}

const updateRemoveStar = (client, mutationResult) => {
   const { data: { removeStar: { starrable: { id } } } } = mutationResult;
   const repository = client.readFragment({
      id: `Repository:${id}`,
      fragment: REPOSITORY_FRAGMENT
   });
   const totalCount = repository.stargazers.totalCount - 1;

   client.writeFragment({
      id: `Repository:${id}`,
      fragment: REPOSITORY_FRAGMENT,
      data: {
         ...repository,
         stargazers: {
            ...repository.stargazers,
            totalCount
         }
      }
   })
}

const RepositoryStar = (props) => {

   const { id, viewerHasStarred, stargazers } = props;

   return (
      <div className="card-star">
        {!viewerHasStarred ? (
            <Mutation
               mutation={STAR_REPOSITORY} variables={{ id }}
               update={updateAddStar}
            >
               {(addStar, { data, loading, error }) => {
                  return (
                     <button onClick={addStar}>
                        {stargazers.totalCount} ⭐ - Star
                     </button>
                  )
               }}
          </Mutation>
        ) : (
            <Mutation
               mutation={UNSTAR_REPOSITORY}
               variables={{ id }}
               update={updateRemoveStar}
            >
            {(removeStar, { data, loading, error }) => (
              <button onClick={removeStar} >
                {stargazers.totalCount} ⭐ - Unstar
              </button>
            )}
          </Mutation>
        )}
      </div>
   )
}

export default RepositoryStar;
