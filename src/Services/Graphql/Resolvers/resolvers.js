var githubResolvers = require('./GitHubResolvers')

var resolvers = {
    user: (user_mail) => githubResolvers.getUserDetails(user_mail),
    repositories: () => 'Here Are Your Repositories'
};

module.exports = { resolvers };