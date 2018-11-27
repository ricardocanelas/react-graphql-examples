import mongoose from 'mongoose'
import { GraphQLServer, PubSub } from 'graphql-yoga'
import Query from './graphql/resolvers/Query'
import Mutation from './graphql/resolvers/Mutation'
import Subscription from './graphql/resolvers/Subscription'

// ---------
// Constants
// ---------

const MONGODB_URI = 'mongodb://localhost:27017/react-graphql-examples-02'
const PORT = 4000

// ---------------
// Mongoose Config
// ---------------

mongoose.Promise = global.Promise
mongoose.set('debug', true)

// --------------
// GraphQL Server
// --------------

const pubsub = new PubSub()
const server = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        Subscription,
    },
    context: {
        pubsub,
    },
})

// ----------
// Connection
// ----------

mongoose
    .connect(
        MONGODB_URI,
        { useNewUrlParser: true }
    )
    .then(() => {
        const options = {
            port: PORT,
            endpoint: '/graphql',
            subscriptions: '/subscriptions',
            playground: '/playground',
        }

        server.start(options, ({ port }) =>
            console.log(`Server started, listening on port ${port} for incoming requests.`)
        )
    })
    .catch(err => console.error(err))
