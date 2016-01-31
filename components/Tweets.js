var React = require('react');
var Tweet = require('./Tweet.js');

var Tweets = React.createClass({

  render: function() {
    var content = this.props.tweets.map(function(tweet) {
      return (
        <Tweet key={tweet.twid} tweet={tweet} />
      )
    });

    return (
      <ul className="tweets">{content}</ul>
    )
  }

});

module.exports = Tweets;
