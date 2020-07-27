const Test = require('ava');
const Qi = require('./index');

var shogiStartingPosition = new Qi(false, [], [], 'l',  'n',  's',  'g',  'k',  'g',  's',  'n',  'l',
                                                  null, 'r',  null, null, null, null, null, 'b',  null,
                                                  'p',  'p',  'p',  'p',  'p',  'p',  'p',  'p',  'p',
                                                  null, null, null, null, null, null, null, null, null,
                                                  null, null, null, null, null, null, null, null, null,
                                                  null, null, null, null, null, null, null, null, null,
                                                  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',  'P',
                                                  null, 'B',  null, null, null, null, null, 'R',  null,
                                                  'L',  'N',  'S',  'G',  'K',  'G',  'S',  'N',  'L');

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
}, shogiStartingPosition);

Test('topside has no in hand pieces', t => {
	t.deepEqual(lastPosition.topsideInHandPieces, []);
});

Test('each square content on the board', t => {
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

Test('bottomside has one in hand piece', t => {
  t.deepEqual(lastPosition.bottomsideInHandPieces, [ 'P' ]);
});

Test('current player has no in hand pieces', t => {
  t.deepEqual(lastPosition.inHandPieces(), []);
});

Test('turn to topside', t => {
  t.true(lastPosition.isTurnToTopside);
});
