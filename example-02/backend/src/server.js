import mongoose from 'mongoose'
import { GraphQLServer } from 'graphql-yoga'
import Query from './graphql/resolvers/Query'
import Mutation from './graphql/resolvers/Mutation'

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

const server = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers: {
        Query,
        Mutation,
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
        server.start(() => console.log('Server is running on localhost:' + PORT))
    })
    .catch(err => console.error(err))
