import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'

import { productType } from './graphql/types'
import { productResolver } from './graphql/resolvers'

mongoose.Promise = global.Promise
mongoose.set('debug', true)

const server = new GraphQLServer({
    typeDefs: productType,
    resolvers: productResolver,
})

mongoose
    .connect(
        'mongodb://localhost:27017/react-graphql-examples-02',
        { useNewUrlParser: true }
    )
    .then(() => {
        server.start(() => console.log('Server is running on localhost:4000'))
    })
    .catch(err => console.error(err))
