var rp = require('request-promise');
var { GitHubBaseURL } = require('../../../Utils/Constants')

var getUserDetails = (data) => {
    var { user_name } = data
    var options = {
      uri: `${GitHubBaseURL}/users/${user_name}`,
      headers: {'User-Agent': 'Request-Promise'},
      qs: {
        access_token: '8d5ad13f0c054e6ff7bd79d66e2be856daf95a96' // -> uri + '?access_token=xxxxx%20xxxxx'
      },
      json: true
    };
      
    return rp(options)
      .then(function (res) {
        return res
      })
      .catch(function (err) {
        return err
      })
}

module.exports = { getUserDetails }