'use strict'

require('node-jsx').install();
var zen = require('zenserver').start();
var ntwitter = require('ntwitter');
var io = require('socket.io').listen(zen.server);

// Create an ntwitter instance
var twitter = new ntwitter(global.ZEN.twitter);

// Set a stream listener for tweets matching certain keywords
var SEARCH = 'javascript, ecmascript6, es6, reactjs';
twitter.stream('statuses/filter', {track: SEARCH}, function(stream) {
  stream.on('data', function(data) {
    var tweet = {
      twid: data['id'],
      active: false,
      author: data['user']['name'],
      avatar: data['user']['profile_image_url_https'],
      body: data['text'],
      date: data['created_at'],
      screenname: data['user']['screen_name']
    };

    io.emit('tweet', tweet);
  });
});
