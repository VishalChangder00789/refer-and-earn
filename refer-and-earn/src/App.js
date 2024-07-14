// src/App.js
import React, { useState } from "react";
import HeroSection from "./components/hero-section/hero-section";
import ReferralModal from "./components/popUp-modal/popUp-modal";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} />
      <Navbar />
      <HeroSection onOpenModal={openModal} />
      <ReferralModal open={modalOpen} onClose={closeModal} />
    </>
  );
};

export default App;
