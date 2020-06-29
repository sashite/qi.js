# PCN Viewer

> A minimalist [PCN](https://developer.sashite.com/specs/portable-chess-notation) viewer to display games.  Various chess variants can be supported, such as Chinese chess (xiangqi), Japanese chess (shogi), Thai chess (makruk) and Western chess.

## Usage

HTML:

```html
<head>
  <link href="pcn-viewer.css" type="text/css" rel="stylesheet" />
  <script type="text/javascript" src="pcn-viewer.js"></script>
</head>

<body>
  <article id="game1"></article>
</body>
```

JavaScript:

```javascript
pcnViewer("game1", {
  "bottomside": {
    "name": "Adolf Anderssen"
  },

  "event": "London",
  "finished_at": null,
  "href": "https://en.wikipedia.org/wiki/Immortal_Game",
  "location": "London ENG",

  "moves": [
    [ 52, 36, "♙" ],
    [ 12, 28, "♟" ],
    [ 53, 37, "♙" ],
    [ 28, 37, "♟" ],
    [ 61, 34, "♗" ],
    [ 3, 39, "♛" ],
    [ 60, 61, "♔" ],
    [ 9, 25, "♟" ],
    [ 34, 25, "♗" ],
    [ 6, 21, "♞" ],
    [ 62, 45, "♘" ],
    [ 39, 23, "♛" ],
    [ 51, 43, "♙" ],
    [ 21, 31, "♞" ],
    [ 45, 39, "♘" ],
    [ 23, 30, "♛" ],
    [ 39, 29, "♘" ],
    [ 10, 18, "♟" ],
    [ 54, 38, "♙" ],
    [ 31, 21, "♞" ],
    [ 63, 62, "♖" ],
    [ 18, 25, "♟" ],
    [ 55, 39, "♙" ],
    [ 30, 22, "♛" ],
    [ 39, 31, "♙" ],
    [ 22, 30, "♛" ],
    [ 59, 45, "♕" ],
    [ 21, 6, "♞" ],
    [ 58, 37, "♗" ],
    [ 30, 21, "♛" ],
    [ 57, 42, "♘" ],
    [ 5, 26, "♝" ],
    [ 42, 27, "♘" ],
    [ 21, 49, "♛" ],
    [ 37, 19, "♗" ],
    [ 26, 62, "♝" ],
    [ 36, 28, "♙" ],
    [ 49, 56, "♛" ],
    [ 61, 52, "♔" ],
    [ 1, 16, "♞" ],
    [ 29, 14, "♘" ],
    [ 4, 3, "♚" ],
    [ 45, 21, "♕" ],
    [ 6, 21, "♞" ],
    [ 19, 12, "♗" ]
  ],

  "name": "Immortal Game",
  "round": null,

  "setup": {
    "bottomside_in_hand_pieces": [],

    "indexes": [8, 8],
    "is_topside_moves_first": false,

    "squares": [
      "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
      "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
      null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null,
      "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
      "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
    ],

    "topside_in_hand_pieces": []
  },

  "started_on": "1851-06-21",

  "state": {
    "is_in_check": true,
    "is_topside_better": false
  },

  "topside": {
    "name": "Lionel Adalbert Bagration Felix Kieseritzky"
  }
});
```

## Examples

![Chess game example](https://github.com/sashite/pcn-viewer.js/raw/master/chess-game-example.png)

Source: https://github.com/sashite/pcn-viewer.js/raw/master/chess-game-example.html

![Shogi game example](https://github.com/sashite/pcn-viewer.js/raw/master/shogi-game-example.png)

Source: https://github.com/sashite/pcn-viewer.js/raw/master/shogi-game-example.html

![Xiangqi game example](https://github.com/sashite/pcn-viewer.js/raw/master/xiangqi-game-example.png)

Source: https://github.com/sashite/pcn-viewer.js/raw/master/xiangqi-game-example.html

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
