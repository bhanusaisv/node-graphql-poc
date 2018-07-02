var { getUserDetails } = require('./GitHubResolvers')

var resolvers = {
    user: (user_mail) => getUserDetails(user_mail),
    repositories: () => 'Here Are Your Repositories'
};

module.exports = { resolvers };