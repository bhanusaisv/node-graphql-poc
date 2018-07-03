var {  getPublicRepos, getUserDetails } = require('./GitHubResolvers')

var resolvers = {
    repositories: (userNameorAllUserArgs) => getPublicRepos(userNameorAllUserArgs),    
    user: (userNameArgs) => getUserDetails(userNameArgs)
};

module.exports = { resolvers };
