module.exports = class Qi {
  constructor(activeSideId, piecesInHandGroupedBySides, ...squares) {
    this.activeSideId = activeSideId % piecesInHandGroupedBySides.length;
    this.piecesInHandGroupedBySides = piecesInHandGroupedBySides;
    this.squares = squares;
  }

  inHandPieces() {
    return this.piecesInHandGroupedBySides[this.activeSideId];
  }

  moveToActions(moveArr) {
    var actions = [];

    for(var i = 0; i < moveArr.length; i += 4) {
      actions.push(moveArr.slice(i, i + 4));
    }

    return actions;
  }

  play(move) {
    var activeSideId      = this.activeSideId;
    var nextInHandPieces  = this.inHandPieces().concat();
    var nextSquares       = this.squares.concat();

    var actions = this.moveToActions(move);

    actions.forEach(function(action) {
      var srcSquareId       = action[0];
      var dstSquareId       = action[1];
      var movedPieceName    = action[2];
      var capturedPieceName = action[3];

      if (srcSquareId === null) {
        var pieceInHandId = nextInHandPieces.indexOf(movedPieceName);

        if (pieceInHandId !== -1)
          nextInHandPieces.splice(pieceInHandId, 1);
      } else {
        nextSquares[srcSquareId] = null;
      }

      nextSquares[dstSquareId] = movedPieceName;

      if (capturedPieceName) {
        nextInHandPieces.push(capturedPieceName);
      }
    });

    var nextPiecesInHandGroupedBySides = this.piecesInHandGroupedBySides.concat();
    nextPiecesInHandGroupedBySides[activeSideId] = nextInHandPieces;

    return new Qi(
      activeSideId + 1,
      nextPiecesInHandGroupedBySides,
      ...nextSquares
    );
  }
};
