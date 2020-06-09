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
  "indexes": [8, 8],
  "startpos": [
    "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
    "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
    "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
  ]
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
