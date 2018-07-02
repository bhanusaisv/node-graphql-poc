var express = require('express');
var expressGraphql = require('express-graphql');

var resolvers = require('./Services/Graphql/Resolvers/resolvers');
var schemas = require('./Services/Graphql/Schemas/schema');
 
var app = express();

app.use('/graphql', expressGraphql({
    schema: schemas.githubSchema,
    rootValue: resolvers.resolvers,
    graphiql: true
}));

app.listen(3330, () => console.log('Express GraphQl now running on localhost:3330/graphql'));
