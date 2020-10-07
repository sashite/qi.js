module.exports = class Qi {
  constructor(inHand, square) {
    this.inHand = inHand;
    this.square = square;
  }

  moveToActions(moveArr) {
    var actions = [];

    for(var i = 0; i < moveArr.length; i += 4) {
      actions.push(moveArr.slice(i, i + 4));
    }

    return actions;
  }

  play(move) {
    var nextInHand = this.inHand.concat();
    var square     = this.square;
    var nextSquare = {};

    Object.keys(square).forEach(function(key) {
      nextSquare[key] = square[key];
    });

    var actions = this.moveToActions(move);

    actions.forEach(function(action) {
      var srcSquareId       = action[0];
      var dstSquareId       = action[1];
      var movedPieceName    = action[2];
      var capturedPieceName = action[3];

      if (srcSquareId === null) {
        var inHandId = nextInHand.indexOf(movedPieceName);

        if (inHandId !== -1)
          nextInHand.splice(inHandId, 1);
      } else {
        delete nextSquare[srcSquareId];
      }

      nextSquare[dstSquareId] = movedPieceName;

      if (capturedPieceName)
        nextInHand.push(capturedPieceName);
    });

    return new Qi(
      nextInHand,
      nextSquare
    );
  }
};
