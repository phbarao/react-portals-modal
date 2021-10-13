import { useState } from "react";

import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  function handleShowMessageClick() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div
      style={{
        height: "100%",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 400,
          position: "relative",
        }}
      >
        <h1>Modal using Portals</h1>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nihil
          commodi neque reprehenderit, vel possimus omnis libero! Maxime
          laudantium blanditiis cumque libero facere consequuntur eligendi
          deserunt. Laboriosam numquam cumque id!
        </p>

        <button onClick={handleShowMessageClick}>Show Modal</button>
        {showModal ? (
          <Modal onClose={handleCloseModal}>This is the modal message!</Modal>
        ) : null}
      </div>
    </div>
  );
}

export default App;
