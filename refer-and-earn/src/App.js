// src/App.js
import React, { useState } from "react";
import HeroSection from "./components/hero-section/hero-section";
import ReferralModal from "./components/popUp-modal/popUp-modal";
import "./App.css";
import Navbar from "./components/navbar/navbar";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="border border-sky-900">
      <Navbar />
      <HeroSection onOpenModal={openModal} />
      <ReferralModal open={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
