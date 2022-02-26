# A Simple React Modal Component Library

A Modal component for React projects with a close button.

## Get started

### Download

[modal-lib-opc14](https://www.npmjs.com/package/modal-lib-opc14)

### Requirements

- React 17.0.2+

### Installation

- using NPM
  `npm install modal-lib-opc14`

- using yarn
  `yarn add modal-lib-opc14`

### Usage

To use the plugin, import it in your React component.
It needs a prop, a boolean and a arrow function to work: `isOpen`, `Message to display (string format)` and `arrow function to modify state`

When isOpen is false > Modal return null

When isOpen is true > Modal is displayed (centered, and overlay applied)

_MyComponent.js_

```javascript
import React, { useState } from "react";
import Modal from "modal-lib-opc14";
import { exampleBody } from "./example";

const MyComponent = () => {
  //React Hook to create and modify local state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/*arrow function into onClick to display modal*/}
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {/*arrow function into closeModale prop to close modal when close button is clicked*/}
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        {exampleBody}
      </Modal>
    </>
  );
};
```

_examples.js_

```javascript
export const exampleBody =
  "Lorem ipsum dolor sit amet. Est voluptate veniam  consequuntur recusandae vel eius tempore in rerum quidem et incidunt dolores. Est quasi asperiores quo consequatur ullam et nisi praesentium aut consequatur Quis aut deserunt corporis. Aut harum iusto non autem inventore ab voluptatem provident a dolor atque aut quia asperiores id possimus minima. Et Quis assumenda et ipsa provident est quia blanditiis eum Quis temporibus rem atque rerum qui perspiciatis omnis. Ut modi delectus et veritatis omnis 33 perspiciatis! Rem internos fuga aut veritatis dignissimos et consequatur laudantium ut galisum voluptatum aut sint quia. Eum enim provident ex quaerat nesciunt id neque asperiores! Eum corporis corporis sit dolores numquam aut rerum eius non minus voluptatem vel dolore ullam ab suscipit quidem et placeat dignissimos. Eum illum repellat eum quod accusamus sit aliquid quia eum voluptate repellat qui quia quis sit suscipit quia sit fuga velit.";
```

### Styling

You can add any classname of your choice by adding `classname prop` into Modal Component

_MyComponent.js_

```javascript
import React, { useState } from "react";
import Modal from "modal-lib-opc14";

const MyComponent = () => {
  //React Hook to create and modify local state
  const [isOpen, setIsOpen] = useState(false);
  const exampleBody = "Lorem ipsum dolor sit amet.";

  return (
    <>
      {/*arrow function into onClick to display modal*/}
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {/*arrow function into closeModale prop to close modal when close button is clicked*/}
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} className="className01">
        {exampleBody}
      </Modal>
    </>
  );
};
```

You can add any style for your modal by adding `style prop` into Modal Component

_MyComponent.js_

```javascript
import React, { useState } from "react";
import Modal from "modal-lib-opc14";

const MyComponent = () => {
  //React Hook to create and modify local state
  const [isOpen, setIsOpen] = useState(false);
  const exampleBody = "Lorem ipsum dolor sit amet.";
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <>
      {/*arrow function into onClick to display modal*/}
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {/*arrow function into closeModale prop to close modal when close button is clicked*/}
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)} style={myStyle}>
        {exampleBody}
      </Modal>
    </>
  );
};
```
