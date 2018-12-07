const mongoose = require('mongoose');

// ---------
// Constants
// ---------

const MONGODB_URI = 'mongodb://localhost:27017/react-graphql-examples-backend-1'
const PORT = 4000

// ----------
// Connection
// ----------

mongoose.set('debug', true)
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});

// ------
// Config
// ------

module.exports = {
    server: {
        port: PORT,
        endpoint: '/graphql',
        subscriptions: '/subscriptions',
        playground: '/playground',
    },
};