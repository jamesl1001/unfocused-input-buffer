# unfocused-input-buffer

Ever typed a really long message only to realise the input field wasn't selected? Annoying isn't it? 😡

Why not buffer that bad boy and have it magically appear when the user focuses the field? ✨

What a pleasing user experience they will have! 🤩

## Installation

```bash
yarn add unfocused-input-buffer
```

or

```bash
npm i unfocused-input-buffer --save
```

## Usage

Add a class or data attribute to all the input fields you want to be buffered. The default is the `data-buffered` attribute.

Import and call the package with the optional options.

### Example A

```jsx
<input type="text" data-buffered />

import unfocusedInputBuffer from 'unfocused-input-buffer'

unfocusedInputBuffer()
```

### Example B

```jsx
<input type="text" class="buffered" />

import unfocusedInputBuffer from 'unfocused-input-buffer'

unfocusedInputBuffer({ selector: '.buffered' })
```

## Options

| Option | Type | Default | Description |
| - | - | - | - |
| `selector` | `String` | `[data-buffered]` | CSS selector to identify the target input fields. |

## Roadmap

- [ ] Buffer lifespan interval
- [ ] User prompt to insert buffer

## Credits

This package is inspired by a paper titled [Buffering and Inserting Text Inputs](https://www.tdcommons.org/cgi/viewcontent.cgi?article=1023&context=dpubs_series) by Winson Chung.