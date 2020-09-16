const Test = require('ava');
const Qi = require('./index');

var shogiStartingPosition = new Qi(
  0,
  [[], []],
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

Test('active side is Sente', t => {
  t.true(shogiStartingPosition.activeSideId === 0);
});

Test('Sente has no in hand pieces', t => {
  t.deepEqual(shogiStartingPosition.inHandPieces(), []);
});

Test("Sente and Gote have no in hand pieces", t => {
  t.deepEqual(shogiStartingPosition.piecesInHandGroupedBySides, [[], []]);
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

Test('active side is Gote', t => {
  t.true(lastPosition.activeSideId === 1);
});

Test('Gote has no in hand pieces', t => {
  t.deepEqual(lastPosition.inHandPieces(), []);
});

Test('the content of the squares on the board', t => {
  t.deepEqual(lastPosition.squares, [
    'l',  'n',  's',  'k',  null, null, 's',  'n',  'l',
    null, 'r',  'g',  null, 'G',  '+B', null, 'b',  null,
    'p',  'p',  'p',  'p',  'p',  'p',  null, 'p',  'p',
    null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null,
    null, null, 'P',  null, null, null, null, null, null,
    'P',  'P',  null, 'P',  'P',  'P',  'P',  'P',  'P',
    null, null, null, null, null, null, null, 'R',  null,
    'L',  'N',  'S',  'G',  'K',  'G',  'S',  'N',  'L'
  ]);
});

Test("Sente and Gote's in hand pieces", t => {
  t.deepEqual(lastPosition.piecesInHandGroupedBySides, [['P'], []]);
});
