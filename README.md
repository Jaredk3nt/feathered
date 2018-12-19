# Feathered - Feather based react icons

This package is based on the [feather-icons](https://github.com/feathericons/feather) package to create Icon components without DangerouslySetInnerHTML.

## How to use Feathered

```js
import React from 'react';
import Feather from 'feathered';

function CloseButton({ onClose }) {
    return (
        <button onClick={onClose}>
            Close
            <Feather icon='x' />
        </button>
    )
}
```

Feathered accepts the [toSvg](https://github.com/feathericons/feather#feathericonsnametosvgattrs) attributes as props for configuration:

```js
<Feather
    icon='feather'  // The full list of icons can be found on [Feather](https://feathericons.com/)
    color='#000'
    height={24}     // The icons are designed on a 24x24 grid but can be scaled to any size
    width={24}
    strokeWidth={2}
    linecap='round'
    linejoin='round'
/>
```