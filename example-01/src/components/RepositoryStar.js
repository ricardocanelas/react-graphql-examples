import React from 'react'
import { Mutation } from 'react-apollo';

import {
   STAR_REPOSITORY,
   UNSTAR_REPOSITORY,
 } from '../utils/mutations';

const RepositoryStar = (props) => {

   const { id, viewerHasStarred, stargazers } = props;

   return (
      <div className="card-star">
        {!viewerHasStarred ? (
          <Mutation mutation={STAR_REPOSITORY} variables={{ id }}>
               {(addStar, { data, loading, error }) => {
                  return (
                     <button onClick={addStar}>
                        {stargazers.totalCount} ⭐ - Star
                     </button>
                  )
               }}
          </Mutation>
        ) : (
          <Mutation mutation={UNSTAR_REPOSITORY} variables={{ id }}>
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
