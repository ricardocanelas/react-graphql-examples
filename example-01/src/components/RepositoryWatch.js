import React from 'react'
import { Mutation } from 'react-apollo';

import { REPOSITORY_FRAGMENT } from '../utils/fragments';
import { WATCH_REPOSITORY } from '../utils/mutations';

const isWatch = viewerSubscription => {
   return viewerSubscription === 'SUBSCRIBED';
}

const updateWatch = (client, mutationResult) => {

   const {
      data: {
         updateSubscription: {
            subscribable: {
               id, viewerSubscription
            }
         }
      }
   } = mutationResult;

   const repository = client.readFragment({
      id: `Repository:${id}`,
      fragment: REPOSITORY_FRAGMENT
   });

   let { totalCount } = repository.watchers;

   totalCount = viewerSubscription === 'SUBSCRIBED'
      ? totalCount + 1
      : totalCount - 1;

   client.writeFragment({
      id: `Repository:${id}`,
      fragment: REPOSITORY_FRAGMENT,
      data: {
         ...repository,
         watchers: {
            ...repository.watchers,
            totalCount: totalCount
         }
      }
   })
}

const RepositoryWatch = (props) => {

   const { id, viewerSubscription, watchers } = props;

   return (
      <div className="card-watch">
        <Mutation
            mutation={WATCH_REPOSITORY}
            variables={{
               id,
               viewerSubscription: isWatch(viewerSubscription)
                  ? 'UNSUBSCRIBED'
                  : 'SUBSCRIBED',
            }}
            update={updateWatch}
        >
          {(updateSubscription, { data, loading, error }) => (
            <button onClick={updateSubscription}
            >
              {watchers.totalCount}{' 👀 - '}
              {isWatch(viewerSubscription) ? 'Unwatch' : 'Watch'}
            </button>
          )}
        </Mutation>
      </div>
   )
}

export default RepositoryWatch;
