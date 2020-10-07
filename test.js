const Test = require('ava');
const Qi = require('./index');

var shogiStartingPosition = new Qi(
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

Test('there are no in hand pieces', t => {
  t.deepEqual(shogiStartingPosition.inHand, []);
});

Test('the content of the first board', t => {
  t.deepEqual(shogiStartingPosition.square, {
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
  });
});

var moves = [
  [ 56, 47, 'P'       ],  [ 3, 11, 'g'        ],
  [ 64, 24, '+B', 'P' ],  [ 5, 14, 'g'        ],
  [ 24, 14, '+B', 'G' ],  [ 4, 3, 'k'         ],
  [ null, 13, 'G'     ]
];

var lastPosition = moves.reduce(function(position, move) {
  return position.play(move);
}, shogiStartingPosition);

Test("sente's captured pawn in hand", t => {
  t.deepEqual(lastPosition.inHand, [ 'P' ]);
});

Test('the content of the last board', t => {
  t.deepEqual(lastPosition.square, {
     0: "l",
     1: "n",
     2: "s",
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
    25: "p",
    26: "p",
    54: "P",
    55: "P",
    57: "P",
    58: "P",
    59: "P",
    60: "P",
    61: "P",
    62: "P",
    70: "R",
    72: "L",
    73: "N",
    74: "S",
    75: "G",
    76: "K",
    77: "G",
    78: "S",
    79: "N",
    80: "L",
    47: "P",
    11: "g",
    14: "+B",
     3: "k",
    13: "G"
  });
});
