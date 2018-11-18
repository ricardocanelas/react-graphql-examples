import React from 'react'
import { Mutation } from 'react-apollo';

import { WATCH_REPOSITORY } from '../utils/mutations';

const isWatch = viewerSubscription => {
   return viewerSubscription === 'SUBSCRIBED';
}

const RepositoryWatch = (props) => {

   const { id, viewerSubscription, watchers } = props;

   console.log('star', id, viewerSubscription, watchers.totalCount);

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
