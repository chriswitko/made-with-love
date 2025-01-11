# Made With Lobe Web Component

A simple web component.

## Installation

```bash
npm i @chriswitko/made-with-love
```

## Usage

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Made With Lobe</title>
  </head>
  <body>
    <made-with-love></made-with-love>
    <script type="module">
      import "https://cdn.jsdelivr.net/npm/@chriswitko/made-with-love/index.js";
    </script>
  </body>
</html>
```

## React

```jsx
import React from "react";
import "@chriswitko/made-with-love";

const App = () => {
  return (
    <div>
      <made-with-love></made-with-love>
    </div>
  );
};

export default App;
```

## Styles

```css
made-with-love {
  --size: 20px;
  --cols: 10;
  --rows: 10;
  --color1: #ff0000;
  --color2: #e63946;
}
```

## Screenshots

![Screenshot](./screenshots/screenshot-1.png)

## License

MIT

```
First released on 2025-01-11 by Chris Witko
```
