# Qi.js

[![Build Status](https://travis-ci.org/sashite/qi.js.svg?branch=master)](https://travis-ci.org/sashite/qi.js)

> `Qi` (棋) is an abstraction for initializing and updating positions of chess variants (including Chess, Janggi, Markruk, Shogi, Xiangqi).

## Installation

```shell
npm install @sashite/qi
```

## Usage

Let's replay [The Shortest Possible Game](https://userpages.monmouth.com/~colonel/shortshogi.html) of [Shogi](https://en.wikipedia.org/wiki/Shogi):

```javascript
const Qi = require('./index');

var startingPosition = new Qi(
  [],
  {
     0: "l",
     1: "n",
     2: "s",
     3: "g",
     4: "k",
     5: "g",
     6: "s",
     7: "n",
     8: "l",
    10: "r",
    16: "b",
    18: "p",
    19: "p",
    20: "p",
    21: "p",
    22: "p",
    23: "p",
    24: "p",
    25: "p",
    26: "p",
    54: "P",
    55: "P",
    56: "P",
    57: "P",
    58: "P",
    59: "P",
    60: "P",
    61: "P",
    62: "P",
    64: "B",
    70: "R",
    72: "L",
    73: "N",
    74: "S",
    75: "G",
    76: "K",
    77: "G",
    78: "S",
    79: "N",
    80: "L"
  }
);

// List of moves generated from PMN (https://developer.sashite.com/specs/portable-move-notation)
var moves = [
  [   56, 47, 'P'       ],  [ 3, 11, 'g' ],
  [   64, 24, '+B', 'P' ],  [ 5, 14, 'g' ],
  [   24, 14, '+B', 'G' ],  [ 4,  3, 'k' ],
  [ null, 13, 'G'       ]
];

var lastPosition = moves.reduce(function(position, move) {
  return position.play(move);
}, startingPosition);

lastPosition.inHand;
// => [ 'P' ]

lastPosition.square;
// =>  {
//       '0': 'l',
//       '1': 'n',
//       '2': 's',
//       '3': 'k',
//       '6': 's',
//       '7': 'n',
//       '8': 'l',
//       '10': 'r',
//       '11': 'g',
//       '13': 'G',
//       '14': '+B',
//       '16': 'b',
//       '18': 'p',
//       '19': 'p',
//       '20': 'p',
//       '21': 'p',
//       '22': 'p',
//       '23': 'p',
//       '25': 'p',
//       '26': 'p',
//       '47': 'P',
//       '54': 'P',
//       '55': 'P',
//       '57': 'P',
//       '58': 'P',
//       '59': 'P',
//       '60': 'P',
//       '61': 'P',
//       '62': 'P',
//       '70': 'R',
//       '72': 'L',
//       '73': 'N',
//       '74': 'S',
//       '75': 'G',
//       '76': 'K',
//       '77': 'G',
//       '78': 'S',
//       '79': 'N',
//       '80': 'L'
//     }
```

## License

The code is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## About Sashite

This [package](https://www.npmjs.com/package/@sashite/qi) is maintained by [Sashite](https://sashite.com/).

With some [lines of code](https://github.com/sashite/), let's share the beauty of Chinese, Japanese and Western cultures through the game of chess!
