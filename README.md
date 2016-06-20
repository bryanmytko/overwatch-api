# Overwatch API Wrapper

![logo](http://i.imgur.com/uHMulGP.jpg)

__NOTE:__ _This is currently just a placeholder and code skeleton since the Overwatch API has not yet been publicly exposed._

## Requirements

Get an Access Token from Blizzard [https://dev.battle.net/io-docs](https://dev.battle.net/io-docs)

## Usage

Setup:

    var access_token = 'xxxxxxxxxxxxxxxxxxxxx';
    var locale = 'enUS';

    var Overwatch = require('overwatch-api');
    client = new Overwatch(access_token, locale);


## Developers

Tests require an env-vars.js file in **/test** directory with access token field:

    module.exports = {
      'BLIZZARD_ACCESS_TOKEN': 'xxxxxxxxxxxxxxxxxxxxxxx'
    };

Run with `mocha` or `mocha debug test/ -R spec`

## Contributing

1. Fork it ( https://github.com/[my-github-username]/d3-leaderboard-node/fork )
1. Create your feature branch (git checkout -b my-new-feature)
1. Commit your changes (git commit -am 'Add some feature')
1. Push to the branch (git push origin my-new-feature)
1. Create a new Pull Request
