var { buildSchema } = require('graphql')
var { userType } = require('./GitHubTypes')

var githubSchema = buildSchema(`
    type User {${userType}}
    type Query {
        user(user_name: String!): User
        repositories(user_name: String!): String
    }
`)

module.exports = { githubSchema };