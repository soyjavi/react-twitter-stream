React = require 'react'
TweetsApp = require '../components/TweetsApp'

module.exports = (zen) ->

  zen.get '/', (request, response) ->
    bindings =
      markup: React.renderComponentToString TweetsApp(tweets: tweets = [])
      state: JSON.stringify tweets
    response.page 'index', bindings

