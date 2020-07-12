module.exports = class Qi {
  constructor(isTurnToTopside, bottomsideInHandPieces, topsideInHandPieces, ...squares) {
    this.isTurnToTopside = isTurnToTopside;
    this.bottomsideInHandPieces = bottomsideInHandPieces;
    this.topsideInHandPieces = topsideInHandPieces;
    this.squares = squares;
  }

  moveToActions(moveArr) {
    var actions = [];

    for(var i = 0; i < moveArr.length; i += 4) {
      actions.push(moveArr.slice(i, i + 4));
    }

    return actions;
  }

  play(move) {
    var isTurnToTopside             = this.isTurnToTopside;
    var nextBottomsideInHandPieces  = this.bottomsideInHandPieces;
    var nextTopsideInHandPieces     = this.topsideInHandPieces;
    var nextSquares                 = this.squares;

    var actions = this.moveToActions(move);

    actions.forEach(function(action) {
      var srcSquareId       = action[0];
      var dstSquareId       = action[1];
      var movedPieceName    = action[2];
      var capturedPieceName = action[3];

      if (srcSquareId === null) {
        if (isTurnToTopside) {
          var pieceInHandId = nextTopsideInHandPieces.indexOf(movedPieceName);
          nextTopsideInHandPieces.splice(pieceInHandId, 1);
        } else {
          var pieceInHandId = nextBottomsideInHandPieces.indexOf(movedPieceName);
          nextBottomsideInHandPieces.splice(pieceInHandId, 1);
        }
      } else {
        nextSquares[srcSquareId] = null;
      }

      nextSquares[dstSquareId] = movedPieceName;

      if (capturedPieceName) {
        if (isTurnToTopside) {
          nextTopsideInHandPieces.push(capturedPieceName);
        } else {
          nextBottomsideInHandPieces.push(capturedPieceName);
        }
      }
    });

    return new Qi(!isTurnToTopside, nextBottomsideInHandPieces, nextTopsideInHandPieces, ...nextSquares);
  }
};
