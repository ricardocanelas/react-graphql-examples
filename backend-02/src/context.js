import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub()

const context = req => ({
    pubsub
});

export default context;