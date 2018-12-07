import Query from './Query'
import Mutation from './Mutation'
import Subscription from './Subscription'

const resolvers = {
    Query: {
        hello: () => 'world!',

        ...Query
    },

    Mutation,
    Subscription,
};

export default resolvers;