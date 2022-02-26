import React, { useState } from "react";
import { exampleBody } from "./example";

import Modal from "./lib/Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        {exampleBody}
      </Modal>
    </>
  );
};

export default App;
