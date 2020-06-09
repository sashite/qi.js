function pcnViewer(gameId, pcnDocument) {
  var gameEl = window.document.getElementById(gameId);
  gameEl.dataset.pcn = JSON.stringify(pcnDocument);

  pcnRender(gameId, 0);
}

function pcnRender(gameId, movesCounter) {
  var gameEl      = window.document.getElementById(gameId);
  var pcnDocument = JSON.parse(gameEl.dataset.pcn);
  var state       = playMoves(pcnDocument.startpos, pcnDocument.moves.slice(0, movesCounter));

  pcnDomApply(gameEl, pcnDocument, state, movesCounter);
}

function pcnDomApply(gameEl, pcnDocument, state, movesCounter) {
  gameEl.className = 'game pcn-viewer';

  var gameHeaderEl = gameEl.querySelector('header');

  if (gameHeaderEl !== null) {
    gameEl.removeChild(gameHeaderEl);
  }

  var gameActionsEl = gameEl.querySelector('.actions');

  if (gameActionsEl !== null) {
    gameEl.removeChild(gameActionsEl);
  }

  var gamePositionEl = gameEl.querySelector('.position');

  if (gamePositionEl !== null) {
    gameEl.removeChild(gamePositionEl);
  }

  var gameName = pcnDocument.name;
  if (gameName !== null) {
    var gameHeaderEl = window.document.createElement('header');
    var gameHeaderH1El = window.document.createElement('h1');
    gameHeaderH1El.textContent = gameName;
    gameHeaderEl.appendChild(gameHeaderH1El);
    gameEl.appendChild(gameHeaderEl);
  }

  var gamePositionEl = window.document.createElement('section');
  gamePositionEl.className = 'position';

  gameEl.appendChild(gamePositionEl);

  var gameTopsidePiecesInHandEl = window.document.createElement('ul');
  gameTopsidePiecesInHandEl.className = 'pieces-in-hand';
  gameTopsidePiecesInHandEl.dataset.isTopside = true;

  for (let id = 0; id < state.topsidePiecesInHands.length; id++) {
    var pieceInHandEl = window.document.createElement('li');
    pieceInHandEl.className = 'piece';
    pieceInHandEl.textContent = state.topsidePiecesInHands[id];
    gameTopsidePiecesInHandEl.appendChild(pieceInHandEl);
  }

  gamePositionEl.appendChild(gameTopsidePiecesInHandEl);

  var gameBoardEl = window.document.createElement('ol');

  gameBoardEl.className = 'board';
  gameBoardEl.style.gridTemplateColumns = 'repeat(' + pcnDocument.indexes[1] + ', 1fr)';

  for (let id = 0; id < state.squares.length; id++) {
    var squareEl = window.document.createElement('li');
    squareEl.className = 'square';
    var pieceText = state.squares[id];
    if (pieceText !== null) {
      var pieceEl = window.document.createElement('span');
      pieceEl.className = 'piece';
      pieceEl.textContent = pieceText;
      squareEl.appendChild(pieceEl);
    }
    gameBoardEl.appendChild(squareEl);
  }

  gamePositionEl.appendChild(gameBoardEl);

  var gameBottomsidePiecesInHandEl = window.document.createElement('ul');
  gameBottomsidePiecesInHandEl.className = 'pieces-in-hand';
  gameBottomsidePiecesInHandEl.dataset.isTopside = false;

  for (let id = 0; id < state.bottomsidePiecesInHands.length; id++) {
    var pieceInHandEl = window.document.createElement('li');
    pieceInHandEl.className = 'piece';
    pieceInHandEl.textContent = state.bottomsidePiecesInHands[id];
    gameBottomsidePiecesInHandEl.appendChild(pieceInHandEl);
  }

  gamePositionEl.appendChild(gameBottomsidePiecesInHandEl);

  gamePositionEl.dataset.positionId = movesCounter;

  var gameActionsEl = window.document.createElement('aside');
  gameActionsEl.className = 'actions'

  var gameActionsFirstEl = window.document.createElement('button');
  var gameActionsPrevEl = window.document.createElement('button');
  var gameActionsNextEl = window.document.createElement('button');
  var gameActionsLastEl = window.document.createElement('button');

  gameActionsFirstEl.className = 'action';
  gameActionsPrevEl.className = 'action';
  gameActionsNextEl.className = 'action';
  gameActionsLastEl.className = 'action';

  gameActionsFirstEl.setAttribute('rel', 'first');
  gameActionsPrevEl.setAttribute('rel', 'prev');
  gameActionsNextEl.setAttribute('rel', 'next');
  gameActionsLastEl.setAttribute('rel', 'last');

  var gameActionsFirstText = document.createTextNode('Start');
  var gameActionsPrevText = document.createTextNode('Prev');
  var gameActionsNextText = document.createTextNode('Next');
  var gameActionsLastText = document.createTextNode('End');

  gameActionsFirstEl.appendChild(gameActionsFirstText);
  gameActionsPrevEl.appendChild(gameActionsPrevText);
  gameActionsNextEl.appendChild(gameActionsNextText);
  gameActionsLastEl.appendChild(gameActionsLastText);

  gameActionsEl.appendChild(gameActionsFirstEl);
  gameActionsEl.appendChild(gameActionsPrevEl);
  gameActionsEl.appendChild(gameActionsNextEl);
  gameActionsEl.appendChild(gameActionsLastEl);

  gameActionsFirstEl.onclick = function(ev) {
    var gameEl = ev.target.closest('.game.pcn-viewer');

    pcnRender(gameEl.id, 0);
  };

  gameActionsPrevEl.onclick = function(ev) {
    var gameEl      = ev.target.closest('.game.pcn-viewer');
    var positionId  = parseInt(gameEl.querySelector('.position').dataset.positionId);

    pcnRender(gameEl.id, Math.max(...[0, positionId - 1]));
  };

  gameActionsNextEl.onclick = function(ev) {
    var gameEl      = ev.target.closest('.game.pcn-viewer');
    var positionId  = parseInt(gameEl.querySelector('.position').dataset.positionId);

    pcnRender(gameEl.id, Math.min(...[positionId + 1, JSON.parse(gameEl.dataset.pcn).moves.length]));
  };

  gameActionsLastEl.onclick = function(ev) {
    var gameEl = ev.target.closest('.game.pcn-viewer');

    pcnRender(gameEl.id, JSON.parse(gameEl.dataset.pcn).moves.length);
  };

  gameActionsFirstEl.disabled = (movesCounter < 2);
  gameActionsPrevEl.disabled = (movesCounter === 0);
  gameActionsNextEl.disabled = (movesCounter === pcnDocument.moves.length);
  gameActionsLastEl.disabled = (movesCounter > pcnDocument.moves.length - 2);

  gameEl.appendChild(gameActionsEl);
}

function playMoves(squares, moves) {
  var gameTopsidePiecesInHands    = [];
  var gameBottomsidePiecesInHands = [];
  var isTurnToTopside             = false;

  moves.forEach(function(move) {
    var actions = moveToActions(move);

    actions.forEach(function(action) {
      var srcSquareId       = action[0];
      var dstSquareId       = action[1];
      var movedPieceName    = action[2];
      var capturedPieceName = action[3];

      if (srcSquareId === null) {
        if (isTurnToTopside) {
          var pieceInHandId = gameTopsidePiecesInHands.indexOf(movedPieceName);
          gameTopsidePiecesInHands.splice(pieceInHandId, 1);
        } else {
          var pieceInHandId = gameBottomsidePiecesInHands.indexOf(movedPieceName);
          gameBottomsidePiecesInHands.splice(pieceInHandId, 1);
        }
      } else {
        squares[srcSquareId] = null;
      }

      squares[dstSquareId] = movedPieceName;

      if (capturedPieceName) {
        if (isTurnToTopside) {
          gameTopsidePiecesInHands.push(capturedPieceName);
        } else {
          gameBottomsidePiecesInHands.push(capturedPieceName);
        }
      }
    });

    isTurnToTopside = !isTurnToTopside;
  });

  var result = {
    squares:                  squares,
    topsidePiecesInHands:     gameTopsidePiecesInHands,
    bottomsidePiecesInHands:  gameBottomsidePiecesInHands
  };

  return result;
}

function moveToActions(moveArr) {
  var actions = [];

  for(var i = 0; i < moveArr.length; i += 4) {
    actions.push(moveArr.slice(i, i + 4));
  }

  return actions;
}

module.exports = pcnViewer;
