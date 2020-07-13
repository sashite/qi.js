# 棋.js

[![Build Status](https://travis-ci.org/sashite/qi.js.svg?branch=master)](https://travis-ci.org/sashite/qi.js)

> Instantiate [Portable Chess Notation](https://developer.sashite.com/specs/portable-chess-notation)'s positions and apply [Portable Move Notation](https://developer.sashite.com/specs/portable-move-notation)'s moves.

## Installation

```shell
npm install @sashite/qi
```

## Usage

Let's replay [The Shortest Possible Game of Shogi](https://userpages.monmouth.com/~colonel/shortshogi.html):

```javascript
const Qi = require('./index');

var startingPosition = new Qi(false, [], [],
  'l',  'n',  's',  'g',  'k',  'g',  's',  'n',  'l',
  null, 'r',  null, null, null, null, null, 'b',  null,
  'p',  'p',  'p',  'p',  'p',  'p',  'p',  'p',  'p',
  null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null,
  null, null, null, null, null, null, null, null, null,
  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',
  null, 'B',  null, null, null, null, null, 'R',  null,
  'L',  'N',  'S',  'G',  'K',  'G',  'S',  'N',  'L'
);

var moves = [
  [ 56, 47, 'P' ],
  [ 3, 11, 'g' ],
  [ 64, 24, '+B', 'P' ],
  [ 5, 14, 'g' ],
  [ 24, 14, '+B', 'G' ],
  [ 4, 3, 'k' ],
  [ null, 13, 'G' ]
];

var lastPosition = moves.reduce(function(position, move) {
  return position.play(move);
}, startingPosition);

lastPosition.topsideInHandPieces; // => []

lastPosition.squares; // => ['l',  'n',  's',  'k',  null, null, 's',  'n',  'l',
                      //     null, 'r',  'g',  null, 'G',  '+B', null, 'b',  null,
                      //     'p',  'p',  'p',  'p',  'p',  'p',  null, 'p',  'p',
                      //     null, null, null, null, null, null, null, null, null,
                      //     null, null, null, null, null, null, null, null, null,
                      //     null, null, 'P',  null, null, null, null, null, null,
                      //     'P',  'P',  null, 'P',  'P',  'P',  'P',  'P',  'P',
                      //     null, null, null, null, null, null, null, 'R',  null,
                      //     'L',  'N',  'S',  'G',  'K',  'G',  'S',  'N',  'L']

lastPosition.bottomsideInHandPieces; // => [ 'P' ]
lastPosition.isTurnToTopside; // => true
```

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## About Sashite

This package is maintained by [Sashite](https://sashite.com/).

With some [lines of code](https://github.com/sashite/), let's share the beauty of Chinese, Japanese and Western cultures through the game of chess!
